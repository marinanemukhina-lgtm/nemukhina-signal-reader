import {createMcpHandler} from 'mcp-handler';
import {z} from 'zod';
import {searchScience,searchGitHub,inspectDoi,inspectGitHub} from '../../lib/sources';

export const runtime = 'nodejs';
export const maxDuration = 15;

const Q=z.string().min(2).max(180).describe('Строка запроса, 2–180 символов');
const LIMIT=z.number().int().min(1).max(5).optional().describe('Число результатов, от 1 до 5');
const READONLY = {readOnlyHint:true, destructiveHint:false, idempotentHint:true, openWorldHint:true};
const wrap=async (fn:()=>Promise<unknown>)=>{
  try {const data=await fn();return {content:[{type:'text' as const,text:JSON.stringify(data)}]};}
  catch(e) {return {isError:true,content:[{type:'text' as const,text:e instanceof Error?e.message:'Ошибка источника'}]};}
};

const handler=createMcpHandler((server)=>{
  server.registerTool('search_scientific_literature',{
    title:'Поиск научной литературы',description:'Ищет публичные библиографические записи Crossref, возвращает DOI и ссылки на первичные источники.',
    inputSchema:z.object({query:Q,limit:LIMIT}).strict(),annotations:READONLY
  },async ({query,limit})=>wrap(()=>searchScience(query,limit)));
  server.registerTool('inspect_doi',{
    title:'Проверить DOI',description:'Получает метаданные конкретной научной работы по DOI из Crossref.',
    inputSchema:z.object({doi:z.string().min(6).max(220)}).strict(),annotations:READONLY
  },async ({doi})=>wrap(()=>inspectDoi(doi)));
  server.registerTool('search_github_projects',{
    title:'Поиск проектов GitHub',description:'Ищет публичные репозитории и возвращает ссылки, активность и вид лицензии.',
    inputSchema:z.object({query:Q,limit:LIMIT}).strict(),annotations:READONLY
  },async ({query,limit})=>wrap(()=>searchGitHub(query,limit)));
  server.registerTool('inspect_github_project',{
    title:'Проверить репозиторий',description:'Запрашивает публичные метаданные репозитория GitHub по формату owner/repository.',
    inputSchema:z.object({repository:z.string().min(3).max(185)}).strict(),annotations:READONLY
  },async ({repository})=>wrap(()=>inspectGitHub(repository)));
},{serverInfo:{name:'nemukhina-signal-reader-mcp',version:'0.1.0'}});

export {handler as GET,handler as POST};
