import {checkedQuery, checkedGithubId, checkedDoi, clipped, safeLimit} from './guards.mjs';

const SOURCE_TIMEOUT = 6500;
const MAX_UPSTREAM_BYTES = 220000;
const USER_AGENT = 'Nemukhina-Signal-Reader/0.1 (+https://github.com/marinanemukhina-lgtm/nemukhina-signal-reader)';
const ALLOWED_HOSTS = new Set(['api.crossref.org','api.github.com']);

export type SourceResult = {source: string; fetched_at: string; query: string; items: unknown[]; note: string};

async function getJson(url: URL): Promise<any> {
  if (url.protocol !== 'https:' || !ALLOWED_HOSTS.has(url.hostname) || url.username || url.password || url.port) {
    throw new Error('Внешний адрес не входит в разрешённые источники');
  }
  const res = await fetch(url.toString(), {
    headers: {'Accept':'application/json', 'User-Agent':USER_AGENT},
    cache:'no-store', redirect:'error', signal:AbortSignal.timeout(SOURCE_TIMEOUT)
  });
  if (!res.ok) {
    if (res.status === 429 || res.status === 403) throw new Error('Ограничение запросов источника; повторите позже');
    if (res.status === 404) throw new Error('Источник не найден');
    throw new Error('Внешний источник временно недоступен');
  }
  if (Number(res.headers.get('content-length')||0) > MAX_UPSTREAM_BYTES) throw new Error('Ответ источника превышает ограничение');
  const responseText = await res.text();
  if (Buffer.byteLength(responseText,'utf8') > MAX_UPSTREAM_BYTES) throw new Error('Ответ источника превышает ограничение');
  return JSON.parse(responseText);
}

export async function searchScience(q: string, limit=5): Promise<SourceResult> {
  const query = checkedQuery(q), rows = safeLimit(limit);
  const url = new URL('https://api.crossref.org/works');
  url.searchParams.set('query', query); url.searchParams.set('rows', String(rows));
  const response = await getJson(url);
  const items = (Array.isArray(response?.message?.items) ? response.message.items : []).slice(0,rows).map((item:any)=>({
    title: clipped(item.title?.[0],400),
    doi: clipped(item.DOI,180), url: clipped(item.URL,300),
    publisher: clipped(item.publisher,150), type: clipped(item.type,80),
    year: item.published?.['date-parts']?.[0]?.[0] ?? null,
    authors: Array.isArray(item.author) ? item.author.slice(0,4).map((a:any)=>clipped([a.given,a.family].filter(Boolean).join(' '),100)) : [],
    citations: Number.isInteger(item['is-referenced-by-count']) ? item['is-referenced-by-count'] : null
  }));
  return {source:'Crossref',fetched_at:new Date().toISOString(),query,items,
    note:'Библиографические записи, не полный текст и не доказательство правильности гипотезы. Проверяйте первичный источник.'};
}

export async function inspectDoi(rawDoi:string):Promise<SourceResult>{
  const doi=checkedDoi(rawDoi), url=new URL('https://api.crossref.org/works/'+encodeURIComponent(doi));
  const item=(await getJson(url))?.message;
  return {source:'Crossref',fetched_at:new Date().toISOString(),query:doi,items:[{
    doi:item?.DOI||doi,title:clipped(item?.title?.[0],400),url:clipped(item?.URL,300),
    publisher:clipped(item?.publisher,150),year:item?.published?.['date-parts']?.[0]?.[0]??null,
    abstract_present:typeof item?.abstract==='string', citations:item?.['is-referenced-by-count']??null
  }],note:'Библиографическая идентификация; наличие DOI не подтверждает качество исследования.'};
}

export async function searchGitHub(q:string,limit=5):Promise<SourceResult>{
  const query=checkedQuery(q),rows=safeLimit(limit);
  const url=new URL('https://api.github.com/search/repositories');
  url.searchParams.set('q',query);url.searchParams.set('per_page',String(rows));
  const response=await getJson(url);
  const items=(Array.isArray(response?.items)?response.items:[]).slice(0,rows).map((item:any)=>({
    name:clipped(item.full_name,200),url:clipped(item.html_url,300),description:clipped(item.description,450),
    stars:item.stargazers_count??null,updated_at:item.updated_at??null,
    archived:Boolean(item.archived),license:item.license?.spdx_id??null
  }));
  return {source:'GitHub public repositories',fetched_at:new Date().toISOString(),query,items,
    note:'Метаданные поиска не подтверждают качество кода, безопасность или правовую пригодность зависимости.'};
}

export async function inspectGitHub(id:string):Promise<SourceResult>{
  const {owner,repo}=checkedGithubId(id);
  const url=new URL(`https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}`);
  const item=await getJson(url);
  return {source:'GitHub public repository',fetched_at:new Date().toISOString(),query:`${owner}/${repo}`,items:[{
    name:clipped(item.full_name,200),url:clipped(item.html_url,300),description:clipped(item.description,450),
    stars:item.stargazers_count??null,pushed_at:item.pushed_at??null,archived:Boolean(item.archived),
    license:item.license?.spdx_id??null,default_branch:clipped(item.default_branch,80),open_issues:item.open_issues_count??null
  }],note:'Публичные метаданные. Перед ADOPT/ADAPT изучите код, лицензию и ограничения отдельно.'};
}