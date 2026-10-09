import test from 'node:test';
import assert from 'node:assert/strict';
import {checkedQuery, checkedDoi, checkedGithubId, safeLimit,clipped} from '../lib/guards.mjs';
test('bounded queries',()=>{assert.equal(checkedQuery('  Bayesian  '),'Bayesian');assert.throws(()=>checkedQuery('x'));assert.throws(()=>checkedQuery('a'.repeat(181)));assert.throws(()=>checkedQuery('hello\nworld'));});
test('github ids reject URL and traversal',()=>{assert.deepEqual(checkedGithubId('vercel/mcp-handler'),{owner:'vercel',repo:'mcp-handler'});for(const id of ['https://github.com/a/b','../etc','x/../y','a/b/c'])assert.throws(()=>checkedGithubId(id));});
test('doi guard and limits',()=>{assert.equal(checkedDoi('https://doi.org/10.1234/abcd'),'10.1234/abcd');assert.throws(()=>checkedDoi('file:///etc/passwd'));assert.equal(safeLimit(999),5);assert.equal(safeLimit(0),1);assert.equal(clipped('hello\r\nworld'), 'hello  world');});