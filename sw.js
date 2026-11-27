const CACHE_NAME='deutsch-meister-shell-v15';
const APP_ASSETS=[
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon.svg",
  "./design.css?v=7",
  "./b-levels.js?v=2",
  "./b-levels-expansion.js?v=1",
  "./grammar-expansion-1.js?v=1",
  "./vocabulary-expansion.js?v=3",
  "./vocabulary-expansion-2.js?v=1",
  "./vocabulary-expansion-3.js?v=2",
  "./vocabulary-expansion-4.js?v=1",
  "./vocabulary-expansion-5.js?v=1",
  "./vocabulary-expansion-6.js?v=1",
  "./vocabulary-expansion-7.js?v=1",
  "./vocabulary-expansion-8.js?v=1",
  "./vocabulary-expansion-9.js?v=1",
  "./vocabulary-expansion-10.js?v=1",
  "./vocabulary-expansion-11.js?v=2",
  "./vocabulary-expansion-12.js?v=1",
  "./vocabulary-expansion-13.js?v=1",
  "./vocabulary-expansion-14.js?v=1",
  "./vocabulary-expansion-15.js?v=1",
  "./phrase-expansion-3.js?v=1",
  "./phrase-expansion-4.js?v=1",
  "./phrase-expansion-5.js?v=2",
  "./phrase-expansion-6.js?v=1",
  "./phrase-expansion-7.js?v=1",
  "./phrase-expansion-8.js?v=1",
  "./phrase-expansion-9.js?v=1",
  "./phrase-expansion-10.js?v=1",
  "./phrase-expansion-11.js?v=1",
  "./phrase-expansion-12.js?v=1",
  "./phrase-expansion-13.js?v=1",
  "./phrase-expansion-14.js?v=1",
  "./phrase-expansion-15.js?v=1",
  "./phrase-expansion-16.js?v=2",
  "./phrase-expansion-17.js?v=1",
  "./phrase-expansion-18.js?v=1",
  "./a1-a2-completion.js?v=1",
  "./vocabulary-expansion-16.js?v=4",
  "./phrase-expansion-19.js?v=2",
  "./sentence-writing.js?v=3",
  "./cefr-assessment.js?v=4",
  "./b-cefr-assessment.js?v=1",
  "./dashboard.js?v=1"
];
self.addEventListener('install',event=>{
 event.waitUntil((async()=>{
  const cache=await caches.open(CACHE_NAME);
  await Promise.all(APP_ASSETS.map(async path=>{
   try{
    const request=new Request(new URL(path,self.registration.scope),{cache:'reload'});
    const response=await fetch(request);
    if(response.ok)await cache.put(request,response.clone());
   }catch(_){}
  }));
  await self.skipWaiting();
 })());
});
self.addEventListener('activate',event=>{
 event.waitUntil((async()=>{
  const keys=await caches.keys();
  await Promise.all(keys.filter(key=>key.startsWith('deutsch-meister-shell-')&&key!==CACHE_NAME).map(key=>caches.delete(key)));
  await self.clients.claim();
 })());
});
self.addEventListener('fetch',event=>{
 const request=event.request;
 if(request.method!=='GET')return;
 const url=new URL(request.url);
 if(url.origin!==self.location.origin)return;
 if(request.mode==='navigate'){
  event.respondWith((async()=>{
   try{
    const response=await fetch(request);
    if(response.ok){const cache=await caches.open(CACHE_NAME);await cache.put(new URL('./index.html',self.registration.scope),response.clone());}
    return response;
   }catch(_){
    const cache=await caches.open(CACHE_NAME);
    return (await cache.match(new URL('./index.html',self.registration.scope)))||Response.error();
   }
  })());
  return;
 }
 event.respondWith((async()=>{
  const cache=await caches.open(CACHE_NAME);
  const cached=await cache.match(request);
  if(cached)return cached;
  try{
   const response=await fetch(request);
   if(response.ok)await cache.put(request,response.clone());
   return response;
  }catch(_){return Response.error()}
 })());
});
