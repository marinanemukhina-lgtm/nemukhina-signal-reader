import assert from 'node:assert/strict';
import { Client, StreamableHTTPClientTransport } from '@modelcontextprotocol/client';

const endpoint = new URL('/mcp',process.env.MCP_TEST_ORIGIN||'http://127.0.0.1:3000');
const client = new Client({ name: 'signal-reader-ci',version:'0.1.0' });
try {
  await client.connect(new StreamableHTTPClientTransport(endpoint));
  const { tools } = await client.listTools();
  const names=tools.map(x=>x.name).sort();
  const expected=['inspect_doi','inspect_github_project','search_github_projects','search_scientific_literature'].sort();
  assert.deepEqual(names,expected,'MCP must advertise exactly the four read-only tools');
  assert(tools.every(x=>x.annotations?.readOnlyHint===true),'Every tool must be read-only');
  const validation = await client.callTool({name:'inspect_github_project',arguments:{repository:'invalid'}});
  assert(validation.isError,'Bad inputs must fail closed');
  const status=await fetch(new URL('/health',endpoint.origin));
  assert(status.ok,'Health endpoint must respond');
  assert.equal((await status.json()).status,'ok');
  console.log('PASS: MCP initialized; exactly four read-only tools exposed; invalid input rejected; health responded');
} finally {
  await client.close();
}
