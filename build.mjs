import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const config=JSON.parse(read('site.json'));
const styles=Object.fromEntries(['home','inner','artwork','review','archive','owned-pages','cinema'].map(n=>[n,read('styles/'+n+'.css')]));
const templates=Object.fromEntries(['home','shell'].map(n=>[n,read('templates/'+n+'.html')]));
const home=read('scripts/home.js');
const native=read('scripts/native.js')
 .replace(/window.IBF_BRIDGE_CONFIG=(\{[^\n]+\});/,(_,json)=>`window.IBF_BRIDGE_CONFIG={...${json},pageUrl:window.IBF_BRIDGE_CONFIG?.pageUrl};`)
 .replace(/window.IBF_REVIEW_CONFIG=(\{[^\n]+\});/,(_,json)=>`window.IBF_REVIEW_CONFIG={...${json},pageUrl:window.IBF_BRIDGE_CONFIG?.pageUrl};`);
new vm.Script(home);new vm.Script(native);
const release=process.env.GITHUB_SHA||crypto.createHash('sha256').update(JSON.stringify({styles,templates,home,native})).digest('hex');
const js=`/* İki Bakış Bir Film — GitHub managed runtime. */
(()=>{'use strict';
 if(window.IBF_REMOTE_READY)return;
 const base=new URL('.',document.currentScript.src).href;
 const replace=s=>s.replaceAll('@@ASSET_BASE@@',base);
 const styles=${JSON.stringify(styles)};
 const templates=${JSON.stringify(templates)};
 const original=document.getElementById('ibf-home');
 if(!original)return;
 const isNative=original.hasAttribute('data-native-bridge');
 const css=document.createElement('style');css.id='ibf-github-styles';
 css.textContent=replace((isNative?styles.inner:styles.home)+'\\n'+styles.artwork+'\\n'+styles.review+'\\n'+styles.archive+'\\n'+styles['owned-pages']+'\\n'+styles.cinema);
 document.head.append(css);
 const holder=document.createElement('template');holder.innerHTML=replace(isNative?templates.shell:templates.home);
 const frame=holder.content.firstElementChild;
 if(!frame||frame.id!=='ibf-home')throw Error('IBF: invalid GitHub page frame');
 original.replaceWith(frame);
 // Individual Pages retain their actual content in Blogger. Their former
 // inline stylesheet is superseded by the identical GitHub-managed stylesheet.
 document.querySelectorAll('style[data-ibf-page]').forEach(s=>s.remove());
 try {
  if(isNative){${native}}else{${home}}
  const root=document.getElementById('ibf-home');
  root.dataset.ibfSource='github';root.dataset.ibfRelease=${JSON.stringify(release)};
  document.documentElement.dataset.ibfRelease=${JSON.stringify(release)};
  window.IBF_REMOTE_READY=true;
 }catch(error){console.error('IBF GitHub runtime:',error);throw error;}
})();`;
new vm.Script(js);
for(const html of Object.values(templates)){
 if(!html.trim().startsWith('<div id="ibf-home"'))throw Error('Frame root must be ibf-home');
 if(/<script\b/i.test(html))throw Error('Templates cannot contain executable scripts');
}
const used=[...JSON.stringify({styles,templates}).matchAll(/@@ASSET_BASE@@assets\/([^\s"'\\)]+)/g)].map(m=>m[1]);
for(const name of used)if(!fs.existsSync(path.join(root,'assets',name)))throw Error('Missing asset '+name);
const out=path.join(root,'public');fs.mkdirSync(out,{recursive:true});
fs.cpSync(path.join(root,'assets'),path.join(out,'assets'),{recursive:true});
fs.writeFileSync(path.join(out,'runtime.js'),js);
fs.writeFileSync(path.join(out,'version.json'),JSON.stringify({release,blogUrl:config.blogUrl,font:config.font},null,2));
fs.writeFileSync(path.join(out,'.nojekyll'),'');
fs.writeFileSync(path.join(out,'index.html'),`<!doctype html><html lang="tr"><meta charset="utf-8"><meta name="robots" content="noindex"><meta name="viewport" content="width=device-width,initial-scale=1"><title>İki Bakış Bir Film — Yayın durumu</title><style>body{background:#faf8f4;color:#18323c;font:400 18px/1.7 system-ui;max-width:760px;margin:10vh auto;padding:24px}a{color:#ca654e}code{overflow-wrap:anywhere}</style><h1>İki Bakış Bir Film</h1><p>GitHub üzerinden yönetilen tasarım dosyaları yayında.</p><p><a href="${config.blogUrl}">Siteyi aç ↗</a></p><p>Yayın: <code>${release}</code></p><p>Film yazıları ve sayfa içerikleri Blogger üzerinden yönetilir.</p></html>`);
console.log(JSON.stringify({release,runtimeBytes:Buffer.byteLength(js),assets:used.length,output:'public',syntaxChecks:true}));
