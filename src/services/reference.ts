import cassettes from '../data/cassettes.json';
import components from '../data/components.json';
import wheels from '../data/wheels.json';
import {z} from 'zod';
const cassetteSchema=z.object({id:z.string(),manufacturer:z.string(),series:z.string(),model:z.string(),speeds:z.number().int(),sprockets:z.array(z.number().positive()),freehub:z.string(),family:z.string(),source:z.string(),status:z.string()}).refine(c=>c.speeds===c.sprockets.length&&c.sprockets.every((t,i)=>i===0||t>c.sprockets[i-1]),'Invalid sprocket sequence');
export const getCassettes=()=>z.array(cassetteSchema).parse(cassettes);
export const getComponents=()=>components;
export const getWheels=()=>wheels;
