import {test} from 'node:test';
import assert from 'node:assert/strict';
import {solvedCube,turn,isSolved,faces} from '../dist/cube-state.js';
const canonical=s=>JSON.stringify(s);
test('each face has nine pieces and returns exactly after four turns or its inverse',()=>{for(const face of Object.keys(faces)){const s=solvedCube(),initial=canonical(s);turn(s,face);assert.equal(isSolved(s),false);assert.equal(s.filter((p,i)=>canonical([p])!==canonical([solvedCube()[i]])).length,9);turn(s,face,true);assert.equal(canonical(s),initial);for(let n=0;n<4;n++)turn(s,face);assert.equal(canonical(s),initial);}});
test('a mixed scramble reverses exactly and retains 26 distinct integer positions',()=>{const s=solvedCube(),initial=canonical(s),sequence=['R','U','F','L','D','B','R','F','U','B'];for(const f of sequence)turn(s,f);assert.equal(isSolved(s),false);assert.equal(new Set(s.map(p=>p.position.join(','))).size,26);assert(s.every(p=>p.position.every(n=>Number.isInteger(n)&&Math.abs(n)<=1)));for(const f of sequence.reverse())turn(s,f,true);assert.equal(canonical(s),initial);assert.equal(isSolved(s),true);});
