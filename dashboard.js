// Deutsch Meister — friendly home dashboard refresh.
window.home = function home(){
 const total=pool().length;
 const done=pool().filter(w=>data.known[w.id]).length;
 const pct=total?Math.round(done/total*100):0;
 const shortcuts=[
  ['lesson','📖','Günlük ders','Kısa konu anlatımı ve pratik'],
  ['cards','🃏','Kelime kartları','Hatırla, çevir ve pekiştir'],
  ['newwords','🌱','Yeni kelimeler','Yeni sözcükleri keşfet'],
  ['phrases','🧩','Kalıplar','Doğal ifadeleri cümle içinde öğren'],
  ['speak','🎧','Konuşma','Dinle ve cevap vermeyi dene'],
  ['grammar','🧩','Dil bilgisi','Kuralları örneklerle öğren'],
  ['exam','✍️','Mini sınav','Bilgini kontrol et'],
  ['translate','💬','Çeviri','Okuma ve anlama pratiği']
 ];
 return `<section class="home-hero">
  <div><span class="eyebrow">WILLKOMMEN · HOŞ GELDİN</span>
   <h2>Hallo! Her gün biraz Almanca, büyük bir ilerleme.</h2>
   <p>Küçük adımlarla ilerle. Kelimeleri öğren, sesleri dinle ve öğrendiklerini günlük hayatta kullanmaya hazırlan.</p>
   <div class="home-actions">${button('Hemen çalışmaya başla',"setTab('cards')")}${button('Bugünün dersini aç',"setTab('lesson')",'secondary')}</div>
  </div>
  <div class="home-art" aria-hidden="true"><div class="home-art-disc">🇩🇪</div><div class="home-art-note">Ein Wort nach dem anderen ✨</div></div>
 </section>
 <div class="home-stats">
  <div class="home-stat"><div class="stat-icon">🌿</div><strong>${done}/${total}</strong><span>Öğrendiğin kelimeler</span></div>
  <div class="home-stat"><div class="stat-icon">🔥</div><strong>${data.streak}</strong><span>Günlük çalışma serisi</span></div>
  <div class="home-stat"><div class="stat-icon">🎯</div><strong>${pct}%</strong><span>${LEVELS[data.level]} seviye ilerlemesi</span></div>
 </div>
 <section class="panel">
  <div class="home-section-title"><div><h2>Öğrenme yolculuğun</h2><p>Hazır olduğunda bir sonraki seviyeye geç.</p></div><span class="pill">${LEVELS[data.level]} · ${pct}%</span></div>
  <div class="home-levels"><div class="grid">${LEVELS.map((l,i)=>`<button class="level ${i===data.level?'sel':''} ${i>data.unlocked?'lock':''}" onclick="setLevel(${i})"><b>${i>data.unlocked?'🔒 ':''}${l}</b><span class="tiny">${['Başlangıç · temel iletişim','Temel · günlük yaşam','A2 · geçmiş ve günlük anlatım','A2 · bağımsız temel iletişim','B1 · iş ve gündelik yaşam','B1 · toplum ve fikirler','B2 · akademik ve mesleki anlatım','B2 · soyut ve karmaşık konular'][i]}</span></button>`).join('')}</div></div>
  <p class="muted tiny" style="margin:15px 0 8px">${done} / ${total} kelime öğrendin</p><div class="bar"><span style="width:${pct}%"></span></div>
  <p class="tiny muted">Seviye geçişi için kelimelerin en az %80’ini bilmen ve 10 soruluk testi en az %80 başarıyla tamamlaman gerekir.</p>
 </section>
 <div class="home-section-title"><div><h2>Bugün nasıl çalışmak istersin?</h2><p>Sana uygun öğrenme yöntemini seç.</p></div></div>
 <div class="home-shortcuts">${shortcuts.map(([id,icon,title,desc])=>`<button class="home-shortcut" onclick="setTab('${id}')"><span class="shortcut-icon">${icon}</span><span><b>${title}</b><small>${desc}</small></span></button>`).join('')}</div>
 <section class="panel" style="margin-top:18px"><div class="row between"><div><h2 style="margin-bottom:5px">Küçük bir hatırlatma</h2><p class="muted tiny" style="margin:0">Düzenli tekrar, uzun ve yorucu çalışmalardan daha etkilidir.</p></div><span style="font-size:30px">☕</span></div></section>`;
};
if(typeof render==='function') render();
