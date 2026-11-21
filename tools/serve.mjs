import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve('dist');
const types={'.html':'text/html','.js':'text/javascript','.css':'text/css','.jpg':'image/jpeg','.png':'image/png','.webp':'image/webp','.svg':'image/svg+xml','.pdf':'application/pdf'};
http.createServer(async(req,res)=>{try{const url=new URL(req.url,'http://localhost');let file=path.resolve(root,'.'+decodeURIComponent(url.pathname));if(!file.startsWith(root+path.sep)&&file!==root){res.writeHead(403).end();return;}if(url.pathname.endsWith('/'))file=path.join(file,'index.html');const body=await fs.readFile(file);res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-cache'}).end(body);}catch{res.writeHead(404).end('Not found');}}).listen(8517,'0.0.0.0',()=>console.log('Local: http://localhost:8517'));
