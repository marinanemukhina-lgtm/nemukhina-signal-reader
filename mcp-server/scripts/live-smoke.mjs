import {Client, StreamableHTTPClientTransport} from '@modelcontextprotocol/client';

const origin = process.env.MCP_TEST_ORIGIN;
if (!origin || !/^https:\/\/[a-z0-9.-]+\.vercel\.app\/?$/i.test(origin)) {
  throw new Error('Expected explicit production Vercel domain');
}
const server = new URL('/mcp', origin);
const controller = AbortSignal.timeout(12000);
const health = await fetch(new URL('/health', origin), {signal:controller});
if (!health.ok) throw new Error('Health endpoint HTTP '+health.status);
const status=await health.json();
if(status?.status!=='ok'||status?.tools!==4)throw new Error('Unexpected health response '+JSON.stringify(status));
console.log('HEALTH OK',JSON.stringify(status));
for (const [path,needle] of [['/privacy','конфиденциальности'],['/terms','Условия использования']]) {
  const page=await fetch(new URL(path,origin),{signal:AbortSignal.timeout(12000)});
  const body=await page.text();
  if (!page.ok || !body.includes(needle)) throw Error('Required policy page failed: '+path+' '+page.status);
  console.log('PUBLIC POLICY OK',path);
}
const client=new Client({name:'signal-reader-production-check',version:'0.1.0'});
try {
  await client.connect(new StreamableHTTPClientTransport(server));
  const {tools}=await client.listTools();
  const names=tools.map(x=>x.name).sort();
  const expected=['inspect_doi','inspect_github_project','search_github_projects','search_scientific_literature'].sort();
  if(JSON.stringify(names)!==JSON.stringify(expected)) throw Error('Tool catalog mismatch: '+JSON.stringify(names));
  if(!tools.every(x=>x.annotations?.readOnlyHint===true))throw Error('Non-readonly tool declared');
  console.log('MCP CONNECTED 4 READ-ONLY TOOLS');
  const invalid=await client.callTool({name:'inspect_github_project',arguments:{repository:'https://example.com'}});
  if (!invalid.isError) throw Error('Invalid input was not rejected');
  console.log('MCP INVALID INPUT REJECTED');
  const github=await client.callTool({name:'inspect_github_project',arguments:{repository:'modelcontextprotocol/typescript-sdk'}});
  if(github.isError) throw Error('GitHub live tool error '+JSON.stringify(github.content).slice(0,250));
  const gh=JSON.parse(github.content[0].text);
  if(gh.source!=='GitHub public repository'||!gh.items?.[0]?.url?.startsWith('https://github.com/')) throw Error('Github source invalid');
  console.log('GITHUB LIVE FETCH OK',gh.items[0].name);
  const lit=await client.callTool({name:'search_scientific_literature',arguments:{query:'Bayesian inverse planning',limit:1}});
  if(lit.isError)throw Error('Crossref live tool error '+JSON.stringify(lit.content).slice(0,250));
  const article=JSON.parse(lit.content[0].text);
  if(article.source!=='Crossref'||!article.items?.[0]?.doi)throw Error('Crossref source invalid');
  console.log('CROSSREF LIVE SEARCH OK',article.items[0].doi);
}finally{await client.close()}
