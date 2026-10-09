import {copyFileSync,cpSync,mkdirSync} from 'node:fs';
mkdirSync('assets',{recursive:true});
cpSync('dist/assets','assets',{recursive:true});
copyFileSync('dist/index.html','index.html');
