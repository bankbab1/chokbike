import React from 'react';
import GuidedSetup from './GuidedSetup';
import {type BuildSetup,disciplines,normalizeSetup} from './domain/bikes';
import standards from './data/wheelDefinitions.json';

const tireWidths=[18,20,23,25,28,30,32,35,37,40,42,45,47,50,55,57,60,65,70,75,80,90,100,110,120];
const rimWidths=[13,15,17,19,21,23,25,27,29,30,32,35,40,45];
const wheelWeights=[1200,1400,1600,1800,2000,2200,2500,3000];

function StandardNumber({label,value,values,unit,onChange,min,max}:{label:string;value:number;values:number[];unit:string;onChange:(n:number)=>void;min:number;max:number}){
  const isStandard=values.includes(value);
  return <div className="standard-field"><label className="field"><span>{label}</span><select value={isStandard?String(value):'other'} onChange={e=>e.target.value!=='other'&&onChange(+e.target.value)}>{values.map(n=><option value={n} key={n}>{n} {unit}</option>)}<option value="other">Other / enter manually</option></select></label>{!isStandard&&<label className="field manual-field"><span>Custom value</span><div><input type="number" value={value} min={min} max={max} onChange={e=>onChange(+e.target.value)}/><small>{unit}</small></div></label>}</div>
}

function WheelFields({setup:s,onPatch}:{setup:BuildSetup;onPatch:(p:Partial<BuildSetup>)=>void}){
  return <div className="sim-wheel wheel-editor">
    <label className="field"><span>Bike shape · illustration only</span><select value={s.bikeShape} onChange={e=>onPatch({bikeShape:e.target.value})}><option>Auto</option>{disciplines.map(d=><option key={d}>{d}</option>)}</select></label>
    <label className="match-wheels"><input type="checkbox" checked={s.sameWheels} onChange={e=>onPatch(e.target.checked?{sameWheels:true}:{sameWheels:false,frontBsd:s.bsd,frontTire:s.tire,frontMeasured:s.measured,frontRimWidth:s.rimWidth,frontDepth:s.depth,frontStyle:s.wheelStyle})}/><span><strong>Front and rear use the same size</strong><small>Turn this off only if your bicycle uses different front and rear wheels or tires.</small></span></label>
    {[false,...(!s.sameWheels?[true]:[])].map(front=>{
      const bsd=front?s.frontBsd:s.bsd,tire=front?s.frontTire:s.tire,measured=front?s.frontMeasured:s.measured,width=front?s.frontRimWidth:s.rimWidth,depth=front?s.frontDepth:s.depth,style=front?s.frontStyle:s.wheelStyle;
      const set=(rear:keyof BuildSetup,f:keyof BuildSetup,v:string|number)=>onPatch({[front?f:rear]:v});
      const standard=standards.some(w=>w.bsd===bsd);
      return <section className="wheel-editor-section" key={String(front)}><h4>{front?'Front wheel':s.sameWheels?'Both wheels':'Rear wheel · drives gearing'}</h4><label className="field"><span>{front?'Front':'Rear'} rim / wheel standard</span><select value={standard?bsd:'other'} onChange={e=>{if(e.target.value!=='other'){const n=+e.target.value;onPatch(front?{frontBsd:n,frontMeasured:0,frontDepth:Math.min(depth,n/4)}:{bsd:n,measured:0,depth:Math.min(depth,n/4)})}}}><option value="other">Other / custom BSD</option>{standards.map(w=><option key={w.bsd} value={w.bsd}>{w.name} · BSD {w.bsd} mm</option>)}</select></label>{!standard&&<label className="field manual-field"><span>Custom rim BSD</span><div><input type="number" value={bsd} min="100" max="800" onChange={e=>set('bsd','frontBsd',+e.target.value)}/><small>mm</small></div></label>}<StandardNumber label="Tire width marked on sidewall" value={tire} values={tireWidths} unit="mm" min={10} max={130} onChange={n=>set('tire','frontTire',n)}/><details className="wheel-advanced"><summary>Advanced wheel measurements</summary><div className="form-grid"><label className="field"><span>Measured outer diameter · 0 = estimate</span><div><input type="number" value={measured} min="0" max="1200" onChange={e=>set('measured','frontMeasured',+e.target.value)}/><small>mm</small></div></label><StandardNumber label="Rim internal width" value={width} values={rimWidths} unit="mm" min={10} max={80} onChange={n=>set('rimWidth','frontRimWidth',n)}/><label className="field"><span>Rim depth · appearance</span><div><input type="number" value={depth} min="10" max="100" onChange={e=>set('depth','frontDepth',+e.target.value)}/><small>mm</small></div></label><label className="field"><span>Wheel style · appearance</span><select value={style} onChange={e=>set('wheelStyle','frontStyle',e.target.value)}><option value="spokes">Spoked</option><option value="three">Three-spoke</option><option value="disc">Disc</option></select></label></div></details></section>
    })}
    <section className="wheel-material"><h4>Rim material and actual wheelset weight</h4><div className="form-grid"><label className="field"><span>Rim material</span><select value={s.rimMaterial} onChange={e=>onPatch({rimMaterial:e.target.value})}><option>Aluminum</option><option>Carbon</option><option>Steel</option><option>Other</option></select></label><StandardNumber label="Complete wheelset weight" value={s.wheelsetMass} values={wheelWeights} unit="g" min={300} max={6000} onChange={wheelsetMass=>onPatch({wheelsetMass})}/></div><p><b>Weight drives the mass estimate; material is descriptive.</b> Carbon is not automatically faster or lighter. Compare actual weight, rim depth, tire system, braking, durability, serviceability and manufacturer limits.</p></section>
    <p className="wheel-editor-help">12 inch includes 203 BSD; 14 inch includes 254 and 288 BSD. Always use the exact ETRTO marking. Mounted diameter is estimated as BSD + 2 × nominal tire width unless measured. Mixed-wheel conversions need frame, fork, brake and handling checks.</p>
  </div>
}

export default function WheelEditor({setup,onPatch}:{setup:BuildSetup;onPatch:(p:Partial<BuildSetup>)=>void}){
  let baseline=setup;try{const saved=JSON.parse(localStorage.getItem('bike-mate-lab-v2')||'[]');baseline=normalizeSetup(saved?.[0])||setup}catch{}
  return <GuidedSetup setup={setup} baseline={baseline} onPatch={onPatch} wheelEditor={<WheelFields setup={setup} onPatch={onPatch}/>}/>;
}
