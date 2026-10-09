import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {dirname,resolve} from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';

const here=dirname(fileURLToPath(import.meta.url));
const canonical=readFileSync(resolve(here,'../../README.md'),'utf8');
const generated=readFileSync(resolve(here,'../lib/approved-description.ts'),'utf8');
const prefix='export const APPROVED_DESCRIPTION: string = ';
const index=generated.indexOf(prefix);
assert(index>=0,'Missing approved description export');
const literal=generated.slice(index+prefix.length).trim();
assert(literal.endsWith(';'),'Generated description has no terminating semicolon');
const onSite=JSON.parse(literal.slice(0,-1));
assert.equal(onSite,canonical,
  'Website copy differs from approved GitHub README. Update approved-description.ts from README.md without rewriting any sentence.');
assert.equal((canonical.match(/^— /gm)||[]).length,15,'Expected all 15 approved domains');
assert.equal(canonical.split('\n\n').at(-1).trim(),'Nemukhina Signal Reader — расширяет поле возможного.');
const sha=createHash('sha256').update(canonical,'utf8').digest('hex');
console.log('PASS: GitHub/Vercel description byte-for-byte identical, 15 domains, SHA256 '+sha);
