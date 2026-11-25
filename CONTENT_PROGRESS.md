# Deutsch Meister — İçerik İlerleme Kaydı

Son kontrol: 25 Kasım 2026

## Hedefler ve mevcut durum

| İçerik | Hedef | Mevcut | İlerleme | Kalan |
|---|---:|---:|---:|---:|
| Benzersiz kelime başlıkları | 5.200 | 1.799 | %34,6 | 3.401 |
| Benzersiz kalıp / ifade | 1.400 | 962 | %68,7 | 438 |

### Kelimeler — alt seviyelere göre

| Alt seviye | Erişilebilir kelime |
|---|---:|
| A1.1 | 378 |
| A1.2 | 253 |
| A2.1 | 211 |
| A2.2 | 218 |
| B1.1 | 180 |
| B1.2 | 169 |
| B2.1 | 185 |
| B2.2 | 205 |
| **Toplam** | **1.799** |

Kelime bankalarında 1.733 kaynak kaydı bulunur. KAPITEL5 listesindeki 105 kayıt da korunur; uygulamanın mevcut birleştirme ve tekrar ayıklama mantığıyla toplam erişilebilir kelime sayısı 1.799'dur.

### Kalıplar — alt seviyelere göre

| Alt seviye | Benzersiz kalıp |
|---|---:|
| A1.1 | 110 |
| A1.2 | 119 |
| A2.1 | 127 |
| A2.2 | 134 |
| B1.1 | 114 |
| B1.2 | 116 |
| B2.1 | 121 |
| B2.2 | 121 |
| **Toplam** | **962** |

Kalıp kaynaklarında 962 kayıt ve 962 benzersiz ifade bulunur. Tekrarlar temizlenmiş, mevcut normalizasyon kuralıyla yeniden kontrol edilmiştir.

## İçerik kalite kuralları

- Yeni kelimeler mevcut bankalara karşı kontrol edilir; artikel farkı tek başına yeni kelime sayılmaz.
- İsimlerde doğru artikel korunur; yazma alıştırmasında önce artikel seçilir, sonra yalnızca isim yazılır.
- Çekimli biçimler, ayrı öğretilen sözlüksel birimler olmadıkça yeni başlık olarak sayılmaz.
- Her yeni kalıpta Türkçe karşılık ve Almanca örnek cümle bulunur.
- CEFR yerleşimleri pedagojik tahmindir; resmî Goethe-Institut onayı iddiası değildir.

## Teknik doğrulama

- Uygulama içi JavaScript sözdizimi kontrolü: başarılı.
- Yeni kelime ve kalıp dosyalarının HTML yükleme zincirine bağlandığı doğrulandı.
- Artikel-önce-yazma akışı, `deutsch_meister_v1` yerel ilerleme anahtarı ve Supabase kimlik doğrulama/kayıt kodu korundu.
- Tarayıcıda uçtan uca, mobil cihazda ve gerçek Supabase oturumuyla test henüz yapılmadı.

## Yayın durumu

- Çalışma dalı: `content-expansion-2026-11`
- PR: https://github.com/monurc80/deutsch-meister/pull/1
- Dal, `main` dalından ayrışmış durumdadır; PR incelemesi açık tutulmaktadır.
- PR açık; birleştirme ve GitHub Pages yayını yapılmadı.

## 24 Kasım kalite kontrolü

- `vocabulary-expansion-16.js` içindeki 110 kayıt önceki kelime bankalarıyla yeniden karşılaştırıldı; yinelenen başlık kalmadı.
- `Salzkartoffel` artikel/tekil kullanımı düzeltilerek doğal çoğul biçim `die Salzkartoffeln` yapıldı.
- Önceki bankada zaten bulunan `Feierabend` ve `Verein` kayıtları, benzersiz `Mittagspause` ve `Kantine` kayıtlarıyla değiştirildi.
- Güncellenen kelime dosyasının JavaScript sözdizimi ve zorunlu alan kontrolleri başarılı.
- Kelime hedef sayısı değişmedi; düzeltmeler mevcut 110 kaydın niteliğini artırdı.
- Kalıp bankasındaki 18 yinelenen ifade farklı ve bağlama uygun cümlelerle değiştirildi; tüm 962 kayıtta benzersiz ifade, Türkçe karşılık ve Almanca örnek cümle kontrolü başarılı.
- A2.2 seviyesindeki iade süreci örnek cümlesinde soru kelime dizilişi düzeltildi; ilgili 23 kayıt yeniden ayrıştırıldı ve zorunlu alan kontrolü başarılı.
- A2 dilbilgisi paketinde Perfekt alıştırmasının öznesi belirsiz `Sie` yerine `Maria` yapıldı; `wenn` alıştırmasının ipucu, boşluğun ana cümledeki fiil konumunu ölçtüğünü doğru açıklayacak şekilde düzeltildi.
- A1.1–A2.2 paketinde 20 ders, 24 dilbilgisi alıştırması, 16 diyalog ve 8 okuma metninin veri yapısı, zorunlu alanları ve grup sayıları doğrulandı.
- A1–A2 ders alıştırmaları genel denetiminde iki boşluklu `anrufen` sorusunun tek yanıt alanında `rufe ... an` beklediği saptandı. Soru tek boşluğa indirildi ve cevap `rufe` olarak düzeltildi; uygulamanın birebir normalize edilmiş yanıt kontrolüyle uyumu doğrulandı.
## 25 Kasım A1–A2 kelime kartı kalite kontrolü

- `vocabulary-expansion-16.js` içindeki 110 kelimenin tamamına, kelimeyi doğal bağlamda kullanan Almanca örnek cümle eklendi. Bu örnekler Yeni Kelimeler ve tekrar kartlarında görüntülenip seslendirilebilir.
- 15 Türkçe karşılık daha kesin ve ayırt edici hâle getirildi; özellikle `Kenntnis`–`Fähigkeit`, `Tatsache`, `Selbstständigkeit`, `Rücksichtnahme` ve `Wahrnehmung` anlamları netleştirildi.
- Dosya JavaScript sözdizimi, 110 kayıt sayısı, dört A1–A2 alt seviyesi, zorunlu alanlar ve örnek cümlelerin hedef kelimeyi içermesi bakımından yeniden doğrulandı.
- İlk geniş taramada 18 yinelenen başlık raporlanmıştı; alt-seviye bazlı yeniden denetim bu sayının eksik olduğunu gösterdi. Aynı alt seviyede 19 tekrar grubu (20 fazla kayıt) doğrulandı. Farklı alt seviyelerdeki tekrarlar ayrı öğrenme basamakları olabileceği için bu temizlik kapsamına alınmadı.
- Kelime başlığı toplamı değişmedi; bu geliştirme yeni kelime değil, mevcut kartların örnek ve anlam kalitesini artırır.


## 25 Kasım A1–A2 soru netliği denetimi

- Tek yanıt alanında birebir cevap kontrolü yapılan ders ve dil bilgisi soruları, birden fazla makul cevaba açık olmaması için yeniden düzenlendi.
- Olumsuzluk sorularına `sondern` karşıtlığı, artikel/iyelik sorularına temel biçim ipucu, modal fiil sorusuna `dürfen` fiil ipucu eklendi.
- Dativ ve yer bildiren edat sorularında hedeflenen belirli artikelin cinsiyeti belirtildi; zaman ve sıfat sorularında hedeflenen fiil/temel sıfat açıkça verildi.
- `a1-a2-completion.js` yeniden ayrıştırıldı: A1.1–A2.2 için 20 ders, 24 dil bilgisi sorusu, 16 diyalog ve 8 okuma metni korundu. 44 ders/dil bilgisi sorusunun her birinde tek boşluk ve boş olmayan cevap doğrulandı.
- JavaScript sözdizimi ve veri grubu kontrolleri başarılı. Tarayıcıda, mobilde ve gerçek Supabase hesabıyla uçtan uca test yapılmadı.
- Kod commit'i: `65ffac8aa07aacafda009fe978186c83e3452883`.


## 25 Kasım A1–A2 yinelenen kelime temizliği

- A1.1–A2.2 kelime havuzunda aynı kelimenin aynı alt seviyede birden fazla bulunması nedeniyle 19 tekrar grubu ve 20 fazla kayıt tespit edildi.
- Kart havuzu, sınav ve mevcut seviye çalışması aynı alt seviyedeki tekrarları tek karta indiriyor. Farklı alt seviyelerdeki tekrarlar korunuyor; seviye bağlamı silinmiyor.
- Kayıt sırasına bağlı `w0`, `w1`… kimlikleri değiştirilmedi ve kaynak kayıtlar silinmedi. İlk görünen kimlik kanonik kimlik olarak korunuyor; yinelenen kimlikler çalışma anında bu kimliğe eşleniyor.
- Kanonik kartta örnek cümle yoksa yinelenen kaydın örneği kanonik karta aktarılıyor.
- Yerel ve Supabase ilerleme verilerinde `known`, `seen`, `missed` alanları hem `w*` hem `nw_w*` anahtarları için birleştiriliyor. Tekrar kayıtlarında en erken vade ve daha düşük tekrar sayısı korunarak kullanıcıya ek tekrar fırsatı veriliyor.
- Eşleme/migrasyon uygulama açılışında, hesap verisi yüklendiğinde ve yedek geri yüklendiğinde çalışıyor; ikinci çalıştırmada değişiklik yapmadığı test edildi.
- Alt seviyelere göre kart sayıları: A1.1 323 → 318; A1.2 309 → 301; A2.1 278 → 273; A2.2 285 → 283. Toplam A1–A2 kayıt sayısı 1.195'ten seviye bazında benzersiz 1.175 karta indi.
- 20 eski kimlik için örnek kullanıcı ilerlemesiyle migrasyon testi yapıldı: bilinen/yanlış/çalışma sayaçları, tekrar tarihi ve tekrar sayısı korundu; özel kullanıcı kelimelerine dokunulmadı.
- Ana uygulama JavaScript sözdizimi, tüm A1–A2 havuzlarının tekilleştirilmesi, örnek cümle aktarımı, kimlik eşlemesi ve migrasyonun idempotent olması kontrol edildi.
- Kod commit'leri: `6dbda86864bf6e2cdb3e370b58579ee39f98f366`, `ac020b839715c4e0eafa6bda3958f255a12ff406`.
- Tarayıcı, mobil cihaz ve gerçek Supabase hesabıyla uçtan uca test henüz yapılmadı.


## 25 Kasım kelime/kalıp tekrar ve hata defteri tutarlılığı

- Kelime ilerlemesinde eski `w*`, `nw_w*` ve aynı alt seviyede DB ile eşleşen Kapitel 5 `k5_*` kimlikleri tek kanonik kimliğe bağlandı. Eşleştirme alt seviye sınırını korur; farklı seviyelerdeki aynı kelimeler ayrı öğrenme kayıtları olarak kalır.
- Yerel kayıt, yedek geri yükleme ve Supabase'den yüklenen ilerleme için aynı migrasyon kullanılır. `known` kayıtları mantıksal OR ile, `seen` ve `missed` sayaçları toplanarak birleştirilir. Eski tekrar kayıtlarında daha düşük tekrar sayısı ve daha erken vade korunur; kalıp kayıtlarının anahtarlarına dokunulmaz.
- Ana kelime kartları, Yeni Kelimeler, yazma modu, akıllı tekrar kuyruğu, seviye ilerlemesi ve sınav geçiş kontrolü aynı kanonik kimliği kullanır. Böylece bir ekranda bilinen/yanlış görünen kelimenin diğer ekranda yeni görünmesi ve aynı kelimenin iki kez sayılması engellenir.
- Kelime havuzu artık tekrarları yalnızca aynı alt seviye içinde tekilleştirir. A1'de ve A2'de ayrı öğrenme basamağı olan aynı kelimeler akıllı tekrar kuyruğunda ayrı kalır.
- Hata defteri kayıt eşlemesi doğru cevap bilgisini de dikkate alır. Aynı soru metninin farklı doğru cevapları tek kayıtta yanlışlıkla birleşmez; aynı doğru cevaba ait tekrarlar mevcut kaydın sayacını artırır.
- JavaScript sözdizimi, eski kimliklerin birleştirilmesi, `known/seen/missed` değerlerinin korunması, tekrar kaydı birleştirmesi, migrasyonun ikinci çalıştırmada değişiklik yapmaması, farklı seviye tekrarlarının korunması ve hata defteri cevap ayrımı için sentetik regresyon kontrolleri başarılı.
- Güncellenen kelime ilerleme referanslarının tamamı kanonik kimlik kullanımı açısından tarandı; eski doğrudan `w.id/nw_w.id` ilerleme erişimi kalmadı.
- Kod commit'leri: `8601babf557063ee0c0ded44e3ecfb084e29b14a`, `0f903141b03a6e3f5987134981655ad36f401c0a`.
- Tarayıcı, mobil cihaz ve gerçek Supabase hesabıyla uçtan uca test henüz yapılmadı.


## 25 Kasım hata defteri yeniden çözme akışı

- Hata defterindeki açık kelime, kalıp, ders, dil bilgisi, yazma ve dinleme kayıtları için doğrudan `Tekrar çöz` akışı eklendi. Kayıt türü ve özgün soru/cevap verisi korunur; mevcut `data.errors` yapısı geriye dönük uyumlu kalır.
- Yanıt doğruysa hata otomatik olarak pekiştirilen kayıtlarına taşınır; yanlışsa aynı hata kaydının sayacı ve son yanıtı güncellenir. Tekrar denemeleri ayrıca `retryCount` alanında tutulur; mevcut kayıtlar için zorunlu migrasyon gerekmez.
- Dinleme hatalarında, eski kayıtlarda tam cümle saklanmış olsa bile beklenen kelime soru görünümünde boşlukla maskelenir. Dinleme düğmesi cümlenin tam sesini çalar; yanıt kontrol edilmeden doğru kelime gösterilmez.
- Açık hata listesindeki doğru yanıt varsayılan olarak gizlendi; isteyen kullanıcı ayrıntıyı açabilir. Önceki elle “Pekiştirdim” seçeneği korundu.
- Hata kimlikleri buton olaylarına güvenli biçimde aktarılır; mevcut yerel kayıt anahtarı ve Supabase senkronizasyon akışı değiştirilmedi.
- JavaScript sözdizimi, dinleme sorusunun maskelenmesi/seslendirmede geri kurulması, yanlış denemede kaydın açık kalması ve sayacın artması, doğru denemede kaydın kapanması, deneme/doğru sayaçları, doğru yanıtın varsayılan gizlenmesi ve özel karakter içeren kimliklerin HTML olay niteliğinde güvenli kodlanması için sentetik kontroller başarılı.
- Kod commit'leri: `30fe6520940a86370af2c69f2000a228fe350c5a`, `64488c87f51ab573e58a05d507e9093fb30516eb`.
- Tarayıcı, mobil cihaz ve gerçek Supabase hesabıyla uçtan uca test henüz yapılmadı.

## 25 Kasım hata defteri ve aralıklı tekrar bağlantısı

- Hata defterinde yeniden çözülen kelime kayıtları, `nwAll()` üzerinden özgün kelime kaydına eşlenerek kanonik `w*` kimliğiyle mevcut `known`, `seen`, `missed` ve `review` alanlarına yazılır. Kalıp kayıtları seviye kapsamı korunarak `phraseProgressId` ve mevcut kalıp tekrar anahtarıyla eşlenir.
- Doğru tekrar, ilgili kelime/kalıp için mevcut 1–3–7–14–30–60 günlük aralıklı tekrar takvimindeki sıradaki vadeyi ilerletir. Yanlış tekrar, öğrenme durumunu yeniden `learning` yapar ve kartı bugünün tekrarına alır.
- Eşleşmeyen eski/özel hata kayıtları güvenli biçimde mevcut hata defteri akışında kalır; yeni veri şeması, zorunlu migrasyon, yerel kayıt anahtarı veya Supabase şeması değişikliği gerekmez.
- Ana `index.html` içindeki inline JavaScript sözdizimi doğrulandı. Sentetik kontroller; kelime doğru/yanlış yanıtı, kanonik kimlik eşlemesi, kalıp doğru yanıtı ve eşleşmeyen eski kayıt davranışı için başarılı.
- Kod commit'i: `e2be85f9ac4ac409d277cd363d143908574bc1ea`.
- Tarayıcı, mobil cihaz ve gerçek Supabase hesabıyla uçtan uca test henüz yapılmadı.

## 25 Kasım dinleme ve dil bilgisi tekrar takvimi

- Dinleme Laboratuvarı'nda yanlış yanıtlanan cloze soruları ve dil bilgisi bölümündeki yanlış yanıtlar, kelime/kalıp kayıtlarından ayrı `exercise:Dinleme` ve `exercise:Dil bilgisi` tekrar anahtarlarıyla mevcut `data.review` yapısına kaydedilir. Anahtar; alıştırma türü, alt seviye, normalize edilmiş soru ve doğru cevabı birlikte içerir.
- İlk yanlış yanıt alıştırmayı bugünkü tekrar listesine ekler. Hata defterinden yeniden doğru çözüldüğünde veya akıllı tekrar kuyruğunda doğru yanıtlandığında mevcut 1–3–7–14–30–60 günlük aralık ilerler; yanlış yanıt aynı gün tekrarını açık tutar.
- Akıllı tekrar kuyruğu artık kelime ve kalıplara ek olarak vadesi gelen dinleme ve dil bilgisi alıştırmalarını da gösterir. Dinleme sorusunda cevap metinde gizlenir; seslendirme için tam Almanca cümle korunur. Alıştırma tekrarları kelime sayaçlarına yazılmaz.
- Eski kelime/kalıp kayıtları geriye dönük uyumlu tutuldu. Yinelenen kelime migrasyonu `exercise:` anahtarlarını açıkça atlar; böylece yeni alıştırma kayıtları yanlışlıkla `word:` kaydına dönüştürülmez. Yerel kayıt anahtarı, Supabase tablo/şeması ve mevcut kimlik doğrulama akışı değiştirilmedi.
- JavaScript sözdizimi kontrolü başarılı. Sentetik regresyonlar; dinleme ve dil bilgisi kayıtlarının oluşturulması, tür/seviye çakışmasının önlenmesi, doğru yanıtla 1 günlük aralığa geçiş, due kuyruğunda görünme, dinleme boşluğunun maskelenmesi ve tam ses metninin korunması, yanlış kuyruk yanıtında yeni hata oluşturulması ve kaydın bugünkü kuyruğa dönmesi, eski kelime migrasyonunun `exercise:`/`phrase:` anahtarlarını koruması senaryolarında başarılı.
- Kod commit'i: `1e9dc29d88b5fcdcd15595e774f465e080f780e9`.
- Tarayıcı, mobil cihaz, mikrofon/ses motoru ve gerçek Supabase hesabıyla uçtan uca test henüz yapılmadı.

## 25 Kasım konuşma çalışmasının kişisel tekrar takvimine bağlanması

- Gerçek konuşma alıştırmalarında kullanıcı artık yanıtını yazabilir veya tarayıcı mikrofonuyla dikte edebilir; ardından kendi performansını açıkça değerlendirir. Başarılı öz değerlendirme diyalog modülünün ilerlemesini kaydeder ve `exercise:Konuşma` türünde mevcut aralıklı tekrar kaydını oluşturur/ilerletir. Tekrar çalışılması gerektiği seçilirse soru hata defterine eklenir ve bugünkü tekrar kuyruğuna alınır.
- Konuşma tekrarları akıllı tekrar ekranında soru seslendirmesi ve örnek yanıtla çalışılabilir. Hata defterinden yeniden çalışırken de soru seslendirilir ve kullanıcı tekrarını kendi değerlendirir; serbest konuşma yanıtı örnek cümleyle birebir karşılaştırılmaz.
- Web Speech Recognition yalnızca konuşmayı metne dönüştürür. Uygulama bunu fonetik doğruluk veya aksan puanı olarak sunmaz; telaffuz puanlaması yapılmış gibi bir iddia eklenmedi.
- Mevcut `data.review`, `data.errors` ve `moduleProgress.dialogue` alanları kullanıldı. Yerel kayıt anahtarı, Supabase şeması ve mevcut kullanıcı kayıtları değiştirilmedi. Eski `Dinleme` ve `Dil bilgisi` tekrarları aynı akışta kalır.
- Ana `index.html` inline JavaScript sözdizimi doğrulandı. Sentetik regresyon kontrolleri; konuşma tekrar kaydı oluşturma, başarılı/başarısız öz değerlendirme, hata defterinden başarılı/başarısız tekrar ve konuşma kaydının vadesi geldiğinde akıllı tekrar kuyruğuna girmesi senaryolarında başarılı.
- Kod commit'leri: `7746a0628763a53d9e151dcc92ebfc20afca3240` (konuşma tekrar akışı), `59644a3462197f244c3e9d6c31000cc199ca0634` (değerlendirme kaydında mikrofonu güvenli kapatma).
- Gerçek tarayıcı, mobil cihaz ve mikrofonla uçtan uca test henüz yapılmadı. Tarayıcı desteği bulunmayan ortamlarda metinle cevap verme seçeneği korunuyor.



## 25 Kasım yazma ve cümle kurma modülü

- Yeni `sentence-writing.js` veri paketiyle A1.1–B2.2 seviyelerinde günlük yaşam, alışveriş, randevu, iş, planlama, görüş bildirme ve resmî iletişim gibi senaryolarda cümle kurma görevleri eklendi. A1.1–A2.2 için seviye başına 5, B1.1–B2.2 için seviye başına 3 görev bulunur.
- Yeni `Cümle kurma` sekmesinde kullanıcı Türkçe yönerge ve kelime ipuçlarından hareketle Almanca cümle yazar; örnek cümleyi dinleyip karşılaştırabilir. Serbest yanıtlar otomatik doğru/yanlış veya CEFR puanına çevrilmez; kullanıcı öz değerlendirmesiyle tamamlanır.
- Yeterli bulunan çalışma mevcut `moduleProgress.writing` alanına kaydedilir ve `exercise:Yazma` türünde aralıklı tekrar takvimine eklenir. Tekrar çalışılması gereken yanıt hata defterine yazılır ve aynı gün tekrarına alınır.
- Yazma hataları hata defterinden serbest metin ve öz değerlendirme ile yeniden çalışılabilir; örnek yanıt gösterimi desteklenir. Akıllı tekrar kuyruğu Yazma türünü mevcut egzersiz tekrar yapısı üzerinden işler.
- Yerel kayıt anahtarı, mevcut ilerleme alanları ve Supabase tablo/şeması değiştirilmedi; yeni bir zorunlu migrasyon eklenmedi. AI olmadan yazma alıştırması çalışır.
- Sekiz seviyenin içerik sayısı ve zorunlu alanları doğrulandı; yeni veri dosyası ve ana uygulamanın inline JavaScript sözdizimi derleme kontrolünden geçti. Aynı yazma çalışmasının art arda birden fazla kez puanlanmasını önleyen koruma eklendi.
- Sentetik akış kontrolleri dışında tarayıcı, mobil cihaz ve gerçek Supabase hesabıyla uçtan uca test henüz yapılmadı.
- Kod commit'leri: `cf37f7a1c77477a4e3ea03bdaa69013e52f71fbc` (içerik), `c3878b94b70fa889c079423a807c25e7411f1f76` (entegrasyon), `4a4ef52d1de7ab8661581be8b36162c61f129609` (hata defteri), `3ac405ab6ea61de15e54dbe232820d0220c59a7b` (çift değerlendirme koruması).


## 25 Kasım A1–A2 CEFR beceri sınavı ve ilerleme raporu

- A1.1, A1.2, A2.1 ve A2.2 için ayrı deneme sınavları eklendi. Her seviyede 4 kelime, 4 dil bilgisi, 4 okuma ve 4 dinleme sorusu; ayrıca bir serbest yazma görevi bulunur. Toplam 64 çoktan seçmeli soru ve 4 seviye yazma görevi vardır.
- Çoktan seçmeli bölümlerin her biri 20 puan değerindedir. Yazma 0–4 öz değerlendirme ölçeğiyle 20 puana çevrilir. Toplam 100 puandır. Başarı için toplam en az 70 ve beş beceri alanının her birinde en az 10 puan gerekir.
- Soru seçenekleri her denemede karıştırılır; puanlama karıştırılmış seçeneklerin doğru cevap indeksini kullanır. Bu nedenle doğru cevabın daima ilk seçenek olmasına dayanan bir örüntü yoktur.
- Dinleme metni sınav ekranında ve hata defteri soru başlığında gösterilmez; seslendirme için ayrı audioText alanında tutulur. Hata defteri ve akıllı tekrar düğmeleri metni seslendirir. Okuma pasajı soru bağlamıyla birlikte tekrar edilebilir.
- Yanlış kelime/sınav, gramer ve dinleme yanıtları hata defterine kaydedilir ve mevcut exercise:* aralıklı tekrar sistemiyle bugünkü tekrar listesine eklenir. Yazma öz değerlendirmesi 0–1 ise hata defterine ve bugünkü tekrara eklenir; daha yüksek puanda çalışma başarılı tekrar olarak takvime kaydedilir.
- Yeni CEFR raporu her A1–A2 alt seviyesi için son sınav puanını, beş beceri skorunu ve modül tamamlama yüzdesini gösterir; en düşük beceri alanına uygun mevcut çalışma ekranına yönlendirir. Son 40 deneme saklanır. Puanlar uygulama içi pratik göstergesidir; resmî CEFR/Goethe/telc belgesi değildir.
- Sonuçlar mevcut kullanıcı veri nesnesindeki isteğe bağlı cefrAssessments alanında tutulur. Yerel kayıt anahtarı, Supabase şeması, mevcut kelime/kalıp kimlikleri veya eski sınav akışı değiştirilmedi; zorunlu migrasyon yoktur.
- JavaScript sözdizimi ve içerik yapısı kontrolleri başarılı: dört seviye, her seviyede dört bölüm ve bölüm başına dört soru; seçeneklerin benzersizliği ve cevap indeksleri doğrulandı.
- Sentetik regresyon testleri başarılı: 100 puan/tam başarı, 0 puan/başarısızlık, toplam puanı yüksek olsa da bir beceri alanı 10'un altında kaldığında başarısızlık; karıştırılmış seçeneklerle puanlama; sınav bitirme ve sonuç kaydı; yanlış cevapların hata defteri/tekrar kaydı; dinleme transkriptinin görünmemesi ve yalnızca ses düğmesinden çalınması; yazma taslağının sekme ve soru yanıtı değişiminde korunması; raporda son denemenin ve en zayıf alan önerisinin gösterilmesi.
- Tarayıcıda gerçek kullanım, iOS/Android cihaz, gerçek mikrofon/ses motoru ve gerçek Supabase oturumuyla uçtan uca test henüz yapılmadı. Depoda bu akış için otomatik tarayıcı test altyapısı bulunmuyor.
- Kod commit'leri: 9e1197635a7018230929438a0ef7afda05a11080 (sınav içerikleri), aadb54eb7fb9b6671aecd294bcb2942bdec380b5 (sınav ve rapor entegrasyonu), 4e7740efcea27691c2bd888f822109292cee9fb1 (yazma taslağı koruması), 223975b56af1523ccd97552a87ac6d4504f0a62c (karıştırılmış seçenek puanlaması), 60e544988a7d23c4c59cf38d0e009f3eaf4e4f0a (dinleme metni gizliliği), e0e85b7653f5fdf27f0d97870b50b7a736f9751a (sonuç metinleri).

## 25 Kasım arama, favoriler ve çevrimdışı uygulama kabuğu

- Yeni **Ara & Favoriler** sekmesi Almanca kelime, Türkçe anlam, örnek cümle, kalıp ve kalıp örnekleri içinde arama yapar. Sonuçlar kelime/kalıp türüne ve favori filtresine göre daraltılabilir; sonuçlar seslendirilebilir ve ilgili çalışma ekranında açılabilir.
- Favoriler mevcut kullanıcı veri nesnesinin isteğe bağlı `favorites` dizisinde saklanır. Kelimelerde kanonik kelime kimliği, kalıplarda seviye kapsamlı kalıp ilerleme kimliği kullanılır; böylece yinelenen eski kelime kimlikleri aynı favoriye bağlanır, aynı ifade farklı seviyelerde ayrı tutulur. Var olan yerel kayıt anahtarı ve Supabase `state` senkronizasyonu kullanılır; tablo veya şema migrasyonu yoktur.
- GitHub Pages alt yoluyla uyumlu `manifest.webmanifest`, `icon.svg` ve `sw.js` eklendi. Service worker uygulama HTML'sini, stil dosyasını ve sayfada kullanılan 39 yerel JavaScript kaynağını (toplam 44 shell kaynağı) önbelleğe alır. Navigasyon isteklerinde ağ önceliklidir; bağlantı kesilirse önbellekteki ana sayfaya düşer. Yerel statik kaynaklar önbellekten sunulur.
- Üst bilgi alanında çevrimiçi/çevrimdışı durumu gösterilir. Çevrimdışı açılışta süresi dolmuş oturum yenilemesi başarısız olsa bile kayıtlı oturum ve kullanıcıya ait yerel ilerleme korunarak uygulama açılabilir; yapılan değişiklikler cihazda saklanır ve bağlantı geri geldiğinde mevcut Supabase eşitleme kuyruğu tekrar dener.
- Arama sonuçlarından kelime açılırken Yeni Kelimeler filtresi güvenli biçimde `all` durumuna alınır; böylece aranan kartın yanlış indeksle açılması önlenir. Kilitli seviyeye çalışma ekranı üzerinden geçiş engellenir. Ayrıca yazma modülünde sonraki senaryoya geçerken değerlendirme kilidi ve taslak temizliği sıfırlanır.
- Kontroller: ana uygulamadaki iki inline JavaScript bloğu ve service worker sözdizimi; manifest JSON; sayfadaki 39 yerel script ve CSS'nin service worker önbellek listesinde bulunması; Almanca/Türkçe kelime araması, kalıp araması, favori ekleme/çıkarma/filtreleme, arama sonucunu doğru kelime veya kalıp ekranında açma, kilitli seviye engeli; service worker'ın 44 kaynağı önbelleğe alması, eski uygulama önbelleğini temizlemesi, ilgisiz cache'i koruması, çevrimdışı navigasyon ve CSS yanıtı; süresi dolmuş oturumla çevrimdışı yerel hesaba dönüş senaryoları başarılı.
- Gerçek tarayıcıda service worker kurulumu, ana ekrana ekleme, uçak modu, iOS Safari/Android Chrome ve gerçek Supabase hesabıyla çevrimdışı-çevrimiçi eşitleme henüz test edilmedi. Bu nedenle çevrimdışı davranış kod ve sentetik service worker testleriyle doğrulandı; cihaz üzerinde doğrulanmış olarak sunulmuyor.
- Kod commit'leri: `6fdb7959a47395d4db888fd348d4c7e01177de98` (arama/favori ekranı), `a9e57037335267a10dc711132ae631e22978fa6a` (arama sonuçlarının çalışma ekranına bağlanması), `c612dc5a2d3267fcdbf5dac9f26ccc68ee20a26c` (filtreli kart indeksini düzeltme), `f3d5915aa8421e99ab1482c812369149bc4917aa` (çevrimdışı durum ve yerel oturum), `5aa9e32f72292f053072ae8f74c29f3263025243` (service worker), `35eb3e05b55cb9d4bee8f739f13b0682166a7c30` (manifest), `08ca159dc29c68ebca5c083bad9055e7b6688ec1` (ikon).


## 25 Kasım B1–B2 içerik ve CEFR sınav altyapısı

- B1.1, B1.2, B2.1 ve B2.2 için yeni `b-levels-expansion.js` paketi eklendi. Her alt seviyede ders sayısı 4'ten 8'e, dil bilgisi alıştırması 4'ten 8'e, diyalog 3'ten 6'ya ve okuma/dinleme metni 2'den 4'e çıkarıldı. Yeni konular arasında zu + Infinitiv, sabit edatlı fiiller, Plusquamperfekt, indirekte Fragen, Passiv mit Modalverb, Konjunktiv I, Nominalisierung, Futur II, Konjunktiv II der Vergangenheit, je ... desto ve Genitiv nach trotz bulunur.
- B1.1–B2.2 cümle kurma içerikleri genel ve tekrarlı üç örnekten, alt seviye başına beş farklı günlük/akademik/iş yaşamı görevine dönüştürüldü. A1.1–A2.2 yazma görevleri aynen korundu.
- Yeni `b-cefr-assessment.js` ile B1.1, B1.2, B2.1 ve B2.2 için ayrı beceri sınavları eklendi. Her alt seviyede kelime, dil bilgisi, okuma ve dinleme alanlarında dörder soru (toplam 16 çoktan seçmeli soru) ve seviyeye uygun bir serbest yazma görevi bulunur. Dört B seviyesi toplam 64 yeni çoktan seçmeli soru ve 4 yazma görevi sağlar.
- Mevcut CEFR sınavı ve raporu A1.1–B2.2 aralığındaki sekiz seviyeyi destekleyecek şekilde genişletildi. Her seviyenin son sınavı, beş beceri puanı ve modül tamamlama oranı aynı `data.cefrAssessments` ve mevcut `moduleProgress` yapısında saklanır. 100 puanlık sınavın yazma bileşeni öz değerlendirmesidir; uygulama resmî sertifika iddiasında bulunmaz.
- Çevrimdışı uygulama kabuğuna iki yeni veri paketi eklendi ve Service Worker önbelleği `deutsch-meister-shell-v2` sürümüne yükseltildi. B1–B2 dersleri, yazma görevleri ve CEFR sınavları önceden önbelleğe alınmışsa AI veya ağ bağlantısı olmadan temel akışta kullanılabilir.
- Geriye dönük uyumluluk: A1–A2 yazma içeriği korunmuştur; mevcut `deutsch_meister_v1` yerel kayıt anahtarı, `data.cefrAssessments`, `moduleProgress`, Supabase tablo/şeması ve kimlik doğrulama akışı değiştirilmemiştir. Zorunlu veritabanı migrasyonu yoktur.
- Kontroller: B1–B2 ders/dil bilgisi/diyalog/metin sayıları sırasıyla 8/8/6/4 olarak her alt seviyede doğrulandı; yazma bankasında sekiz seviyenin her birinde beş görev bulunduğu ve A1–A2 kayıtlarının değişmediği doğrulandı. Dört B CEFR sınavının her birinde 4×4 soru, benzersiz seçenekler, geçerli doğru cevap indeksi, okuma bağlamı, dinleme sesi ve dört yazma ölçütü kontrol edildi.
- Sentetik regresyonlar: B1.1–B2.2 sınav başlatma ve 16 soruluk set üretimi, tüm doğru yanıtlarla 100 puan, bir beceri alanı 10/20 altındayken başarı engeli, CEFR raporunda sekiz seviyenin görünmesi ve B2.2 son sınav puanının gösterilmesi başarılı. Ana uygulamanın inline JavaScript'i, yeni veri paketleri, Service Worker ve manifest sözdizimi kontrol edildi; yeni yerel scriptlerin tümü Service Worker varlık listesinde bulunuyor.
- Tarayıcıda gerçek kullanım, iOS/Android çevrimdışı kurulum ve gerçek Supabase oturumuyla senkronizasyon testi henüz yapılmadı.
- Kod commit'leri: `090892f38a769faa22e15f00155497a2446b1e34` (B ders/dil bilgisi/diyalog/metin paketi), `d7ee8b2019054e6d0151f302ebbeb08d2fd28df4` (B CEFR sınav bankası), `f61f182350dd4a023fd005651d0e0c2f5a61c0fc` (B yazma görevleri), `d0fe4baf5bb807a29039adae043fa3e58b76d1f8` (soru netliği), `477f0ff684ac9cc52ef6622acd53e6e50c6a6a20` (sınav/rapor entegrasyonu), `690978488a6ae405fa382ff84b44d0618db1cca9` (çevrimdışı önbellek).
