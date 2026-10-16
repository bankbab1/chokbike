import React,{useEffect,useState} from 'react';
import {Moon,Sun} from 'lucide-react';

type Theme='light'|'dark';

function initialTheme():Theme{
  try{
    const saved=localStorage.getItem('bike-mate-theme');
    if(saved==='light'||saved==='dark')return saved;
  }catch{}
  return matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';
}

export default function ThemeToggle(){
  const[theme,setTheme]=useState<Theme>(initialTheme);
  useEffect(()=>{document.documentElement.dataset.theme=theme;try{localStorage.setItem('bike-mate-theme',theme)}catch{}},[theme]);
  const dark=theme==='dark';
  return <button className="theme-toggle" onClick={()=>setTheme(dark?'light':'dark')} aria-label={`Switch to ${dark?'light':'dark'} mode`} title={`Switch to ${dark?'light':'dark'} mode`}>{dark?<Sun size={18}/>:<Moon size={18}/>}<span>{dark?'Light':'Dark'}</span></button>;
}
