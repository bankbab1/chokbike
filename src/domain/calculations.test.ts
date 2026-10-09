import {test} from 'node:test';import assert from 'node:assert/strict';import {gear,mounted,equivalents,fit,mmToInches,compatibility} from './calculations';
test('69/13 and development',()=>{assert.equal(gear(69,13,423,90).ratio,69/13)});
test('37-451 mounted dimensions',()=>assert.equal(mounted(451,37).diameter,525));
test('equivalent rankings',()=>{const t=gear(69,13,423,90).development;const r=equivalents(t,58,[11,12,13],423);assert.equal(r[0].cog,11);assert.ok(Math.abs(r[0].difference)<=Math.abs(r[1].difference))});
test('invalid fit',()=>assert.throws(()=>fit(165,180,'Sport')));
test('inch conversion',()=>assert.equal(mmToInches(25.4),1));
test('incompatible family is rejected',()=>{const a={model:'a',family:'a',speeds:11,maxCog:30,capacity:35};assert.equal(compatibility(a,{...a,family:'b'},a,{...a,sprockets:[11,28]},[69])[0].ok,false)});
