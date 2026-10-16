import {test} from 'node:test';import assert from 'node:assert/strict';import {metrics,defaultRoad,roadPower,wheelDimensions,tangentChain} from './simulation';
test('same road speed needs same watts despite gearing',()=>{const d=678,speed=25;const aRpm=speed/(Math.PI*d/1000*50/13*.06),bRpm=speed/(Math.PI*d/1000*52/13*.06);const a=metrics(50,13,d,aRpm,defaultRoad),b=metrics(52,13,d,bRpm,defaultRoad);assert.ok(Math.abs(a.power.total-b.power.total)<1e-9);assert.ok(b.torque>a.torque)});
test('same cadence taller gearing increases speed and road power',()=>{const a=metrics(50,13,678,80,defaultRoad),b=metrics(52,13,678,80,defaultRoad);assert.ok(b.speed>a.speed);assert.ok(b.power.total>a.power.total)});
test('622 BSD mounted with 28 mm tire is 678 mm',()=>assert.equal(wheelDimensions(622,28,0).mounted,678));
test('measured outer diameter overrides estimate',()=>assert.equal(wheelDimensions(451,37,520).mounted,520));
test('uphill power exceeds flat',()=>assert.ok(roadPower(25,{...defaultRoad,grade:5}).total>roadPower(25,defaultRoad).total));
test('tailwind reduces aerodynamic load',()=>assert.ok(roadPower(25,{...defaultRoad,wind:-10}).total<roadPower(25,defaultRoad).total));
test('chain tangent remains finite across supported sizes',()=>assert.ok(!tangentChain(135,10.8,310).includes('NaN')));
test('shorter cranks increase tangential force at fixed torque but not gearing',()=>{const a=metrics(50,13,678,80,{...defaultRoad,crank:170}),b=metrics(50,13,678,80,{...defaultRoad,crank:160});assert.equal(a.ratio,b.ratio);assert.equal(a.speed,b.speed);assert.equal(a.power.total,b.power.total);assert.equal(a.torque,b.torque);assert.ok(Math.abs(b.pedalForce/a.pedalForce-170/160)<1e-12)});
