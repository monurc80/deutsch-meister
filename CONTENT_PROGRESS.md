# Deutsch Meister — İçerik İlerleme Kaydı

Son kontrol: 28 Kasım 2026

## Hedefler ve mevcut durum

| İçerik | Hedef | Mevcut | İlerleme | Kalan |
|---|---:|---:|---:|---:|
| Benzersiz kelime başlıkları | 5.200 | 1.814 | %34,9 | 3.386 |
| Benzersiz kalıp / ifade | 1.400 | 962 | %68,7 | 438 |

### Kelimeler — alt seviyelere göre

| Alt seviye | Erişilebilir kelime |
|---|---:|
| A1.1 | 378 |
| A1.2 | 264 |
| A2.1 | 213 |
| A2.2 | 220 |
| B1.1 | 180 |
| B1.2 | 169 |
| B2.1 | 185 |
| B2.2 | 205 |
| **Toplam** | **1.814** |

Kelime bankalarında 1.733 kaynak kaydı bulunur. KAPITEL5 listesindeki 105 kayıt da korunur; uygulamanın mevcut birleştirme ve tekrar ayıklama mantığıyla toplam erişilebilir kelime sayısı 1.814'tür.

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


## 25 Kasım A1–A2 içerik ve tekrar sistemi düzeltmeleri

- A1 kelime bankasında `aufhören` için Türkçe karşılık, fiilin bağlamdaki anlamını daha doğru verecek şekilde “bırakmak, sona ermek” olarak düzeltildi.
- A2.2 `Ich freue mich darauf, dich wiederzusehen.` kalıbının Türkçe karşılığı daha doğal ve işlevsel biçimde “Seni tekrar görmeyi dört gözle bekliyorum.” olarak güncellendi.
- Dil bilgisi alıştırmalarında doğru yanıtlar da aralıklı tekrar takvimine eklenir. Aynı sorunun doğru yanıtı art arda tıklanarak tekrar aralığının yanlışlıkla hızlandırılması engellendi; yeni soruya ve yeni seviyeye geçişte kontrol sıfırlanır.
- Dinleme alıştırmalarında doğru yanıtlar da tekrar takvimine eklenir; tekrar kartında seslendirilecek Almanca metin saklanır. Yanlış kaydedilmiş aynı soru daha sonra doğru yanıtlandığında hata defterindeki açık kayıt otomatik olarak pekiştirilenlere taşınır. Aynı çözümleme dil bilgisi alıştırmalarına da uygulandı.
- Dil bilgisi geri bildirimi sekme değişimi ve yeniden çizim sonrasında korunur; yeni soruya veya seviyeye geçildiğinde temizlenir.
- Kontroller: uygulamanın iki inline JavaScript bloğu ve değişen A2 kalıp dosyası sözdizimi kontrolünden geçti. Sentetik testlerde yanlış yanıtın aynı gün tekrar kuyruğuna alınması, doğru yanıtın ileri tarihe planlanması, başarılı yanıtın yinelenen tıklamayla çoğaltılmaması, önceki hatanın otomatik çözülmesi, dinleme ses metninin saklanması ve dil bilgisi geri bildiriminin yeniden çizimde korunması doğrulandı.
- Yerel kayıt anahtarı, Supabase veri modeli/senkronizasyonu, kelime-kalıp kimlikleri ve kullanıcı ilerlemesi şeması değiştirilmedi. Gerçek tarayıcı, mobil cihaz ve Supabase oturumuyla uçtan uca test bu çalışmada yapılmadı.
- Kod commit'leri: `065975ba75b1ccbd15708ec7ba14413cdfab2e5f` (A1 kelime karşılığı), `bcf137baf6eb8e305f785cd4d1e86bbefcc56cc2` (A2 kalıp çevirisi), `4a483e0420a481da1d2f79c4fccc541d4579b352` (dil bilgisi/dinleme tekrarları ve hata çözümleme), `3ceebb23a4b760dd4f71b805a901151a9b17b161` (dil bilgisi geri bildirimini koruma).
- Bu çalışmada B1–B2 içerik veya özelliklerine yeni ekleme yapılmadı.


## 26 Kasım A1–A2 diyalog dil seviyesi düzeltmesi

- A1.1 isim heceleme diyaloğundaki pasif `wird ... geschrieben` yapısı başlangıç seviyesini aşıyordu; yanıt doğal ve etkin A1 düzeyindeki `Ich buchstabiere: M-A-R-I-A.` biçimine çevrildi.
- A1.2 kartla ödeme yanıtındaki isimleştirilmiş `Kartenzahlung ist möglich` ifadesi, seviyede öğretilen modal fiil yapısıyla `Ja, Sie können mit Karte bezahlen.` olarak sadeleştirildi.
- Veri kontrolü: dört alt seviyede 4'er diyalog (16 toplam), tüm soru/çeviri/yanıt alanları dolu; 20 ders, 24 dil bilgisi sorusu ve 8 okuma metni sayıları korundu. JavaScript ayrıştırma ve hedefli regresyon kontrolleri başarılı.
- Yerel ilerleme, kullanıcı kimlikleri, Supabase senkronizasyonu ve diğer modüller değiştirilmedi. Tarayıcı, mobil cihaz ve gerçek Supabase hesabıyla uçtan uca test yapılmadı.


## 26 Kasım A1.1 kalıp seviyesi ve tekrar temizliği

- A1.1'deki `Ist auch eine Zahlung mit Karte möglich?` ifadesi, aynı seviyede zaten bulunan `Kann ich mit Karte zahlen?` kalıbını anlamsal olarak tekrarlıyor ve isimleştirilmiş `Zahlung` yapısıyla gereksiz derecede ağır kalıyordu. Aynı kayıt kimliği korunarak `Wo ist die Kasse?` ile değiştirildi.
- `Die Heizung ist zu kalt eingestellt.` ifadesi A1.1 için `eingestellt` yapısı ve sözcük yükü bakımından ileri seviyedeydi. Aynı kayıt kimliği korunarak günlük A1.1 cümlesi `Es ist kalt im Zimmer.` yapıldı.
- Türkçe karşılıklar ve örnek cümleler yeni ifadelerle uyumlu hâle getirildi. Kayıt sayısı, `id`, seviye ve alt seviye indeksi değiştirilmedi.
- HTML script sürümü `v2`, Service Worker önbellek sürümü `deutsch-meister-shell-v3` yapıldı; çevrimdışı kurulumda güncel kalıp paketi önbelleğe alınır.
- Kontroller: A1–A2 kalıp paketlerinde 490 kayıt, alt seviye dağılımı (A1.1 110, A1.2 119, A2.1 127, A2.2 134) ve yinelenen ifade bulunmaması yeniden kontrol edildi. Güncellenen dosya, HTML içi JavaScript, Service Worker sözdizimi, 46 çevrimdışı kaynak ve sürüm referansları kontrol edildi.
- Yerel ilerleme anahtarı, kalıp kimlikleri, kullanıcı verisi, Supabase senkronizasyonu ve B1–B2 içerikleri değiştirilmedi. Gerçek tarayıcı/cihaz ve Supabase uçtan uca testi yapılmadı.


## 26 Kasım 2026 — Kelime yazma hatalarının akıllı tekrara bağlanması

- Kelime kartlarının yazma modunda oluşan `Yazma` hataları artık ilgili kelimenin kanonik kimliğiyle saklanıyor. Hata defterinden doğru tekrar yapıldığında aynı kelimenin `seen/known/missed` ilerlemesi ve kelime tekrar takvimi güncelleniyor; yanlış tekrar kelimeyi bugünkü kuyruğa döndürüyor.
- Önceden kaydedilmiş `Yazma` hataları için geriye dönük uyumlu çıkarım eklendi: yalnızca soru ve beklenen yanıt aynı kelime olduğunda kelime kartına bağlanır. Serbest cümle yazma görevleri mevcut alıştırma tekrar sistemini kullanmaya devam eder.
- Hata kaydına isteğe bağlı `wordId` alanı eklendi; mevcut kayıtların alanları, kullanıcı ilerleme anahtarları ve Supabase tablo yapısı değiştirilmedi.
- Çevrimdışı kabuk önbelleği `v4` sürümüne yükseltildi; yeni tekrar düzeltmesi güncel Service Worker kurulumu sırasında çevrimdışı ana sayfaya da alınır.
- Doğrulama: ana HTML içi JavaScript ve Service Worker sözdizimi kontrol edildi; yeni kayıt kimliği, eski kayıttan güvenli çıkarım, doğru/yanlış tekrar ve genel cümle yazma gerileme testleri başarılı. Gerçek tarayıcı ve Supabase hesabıyla uçtan uca test yapılmadı.


## 26 Kasım A1–A2 kelime örnek cümlelerinin doğallık denetimi

- A1–A2 kelime bankasındaki 12 örnek cümle, hedef kelimeyi koruyarak daha doğal ve seviyeye daha uygun Almancayla yenilendi. Özellikle maaşın ödenmesi, düzen, kalite, kamuya açık konuşma, katılım koşulu, bağımsızlık, memnuniyetsizlik, algı ve takdir ifadeleri sadeleştirildi.
- Kelime başlıkları, Türkçe karşılıklar, seviye atamaları, kayıt sırası ve toplam 110 kayıt değiştirilmedi; dolayısıyla mevcut kelime kimlikleri ve kullanıcı ilerleme anahtarları korunur.
- Ana HTML ve Service Worker'da yalnızca bu veri paketinin sürüm referansı v1 → v2, önbellek kabuğu v4 → v5 yapıldı; çevrimdışı kurulum aynı güncel dosyayı alır.
- Doğrulama: veri paketi JavaScript ayrıştırması, 110 kayıt ve zorunlu alan kontrolü, örnek cümle-hedef kelime eşleşmesi, alt seviye dağılımı, HTML/Service Worker sürüm eşleşmesi ve tüm yerel script kaynaklarının önbellek listesinde bulunması başarılı. Uygulama tarayıcısı ve gerçek Supabase oturumuyla uçtan uca test bu çalışmada yapılmadı.


## 26 Kasım A1–A2 kelime kartı örnek cümleleri

- `vocabulary-expansion.js` içindeki 103 A1.1–A2.2 kelime kaydına kısa, doğal ve seviyeye uygun Almanca örnek cümle eklendi. Örnekler ev, ulaşım, alışveriş, sağlık, iş, seyahat ve günlük iletişim bağlamlarını kapsar.
- Kelime başlıkları, Türkçe karşılıklar, seviye dağılımı, kayıt sırası ve toplam 192 kaynak kaydı aynen korundu. B1–B2 kayıtları değiştirilmedi; mevcut kelime kimlikleri ve kullanıcı ilerleme eşlemesi etkilenmez.
- Ana HTML veri paketi sürümü v1 → v2, Service Worker kabuk önbelleği v5 → v6 yapıldı; çevrimdışı kaynak listesi güncellendi.
- Doğrulama: 103/103 yeni örnek cümle hedef kelimeyi içeriyor; kelime/çeviri/seviye/sıra karşılaştırması, B1–B2 değişmezliği, veri JavaScript sözdizimi, Service Worker ve ana HTML inline script sözdizimi kontrolleri başarılı. Tarayıcı, mobil cihaz ve gerçek Supabase uçtan uca testi yapılmadı.
- Kod commit'leri: `94b299b9befdff7ec55d3986b389945a110acad7`, `376412a07c97709463c6137d3cfbd2c7ef95b21d`, `1bb37f0a93c0150f36a418f7cd9ce333242d7f3b`.


## 27 Kasım A1–A2 kelime seviye yerleşimi

- `der Bahnhofsvorplatz` ve `die Notaufnahme` A1.1'den A2.2'ye; `der Kassenzettel`, `der Hausarzt` ve `die Lebensmittel` A1.1'den A1.2'ye taşındı.
- 110 kelimelik bankanın kayıt sayısı ve sırası değişmedi. Uygulama kimlikleri kayıt sırasından üretildiği için kelime kimlikleri ve mevcut ilerleme anahtarları korundu.
- Erişilebilir seviye toplamları A1.1: 373, A1.2: 256, A2.1: 211, A2.2: 220 olarak güncellendi. Genel toplam 1.799 olarak kaldı.
- Bu yerleşimler pedagojik düzey tahminidir; resmî CEFR/Goethe sertifikasyonu iddiası değildir.


## 27 Kasım — Hata defterinden manuel pekiştirmenin tekrar takvimine bağlanması

- Açık hata kaydındaki “Pekiştirdim” eylemi artık yalnızca hatayı kapatmaz; ilgili kelime, kalıp veya alıştırmayı doğru tekrar olarak mevcut aralıklı tekrar sistemine de işler.
- Kelime ve kalıplarda mevcut seen / known ilerlemesi güncellenir ve 1–3–7–14–30–60 günlük tekrar takviminin ilk uygun aralığı başlatılır. Alıştırma türlerinde mevcut exercise:* kaydı ve eşleşebilen modül ilerlemesi kullanılır.
- wordId taşıyan veya eski kayıtlardan güvenle eşleştirilebilen kelime yazma hataları, serbest yazma alıştırması gibi değil ilgili kanonik kelime kartı üzerinden ilerletilir.
- Aynı hata için yinelenen tıklama tekrar sayısını artırmaz. Eşleşmeyen eski/özel hata kayıtları silinmez; mevcut hata defteri davranışıyla kapatılabilir.
- Yerel ilerleme anahtarları, data.errors / data.review yapısı, Supabase şeması ve mevcut kimlikler değiştirilmedi; zorunlu veri migrasyonu yoktur. Service Worker kabuk önbelleği v14 → v15 yapıldı.
- Sentetik regresyon kontrolleri: kelime, kalıp, dil bilgisi alıştırması, kelimeye bağlı yazma hatası, yinelenen tıklama ve eşleşmeyen eski kayıt senaryoları başarılı. Ana HTML inline JavaScript blokları ve Service Worker JavaScript sözdizimi kontrol edildi. Gerçek tarayıcı, mobil cihaz ve Supabase oturumuyla uçtan uca test yapılmadı.

## 27 Kasım — A1–A2 cümle kurma ve günlük yazma pratiği

- A1.1, A1.2, A2.1 ve A2.2 yazma bankalarının her birine iki yeni günlük senaryo eklendi. Her seviyede 5 olan senaryo sayısı 7'ye çıktı; toplam 8 yeni görev telefon numarası sorma, aileyi tanıtma, market alışverişi, iş günü, doktora şikâyet anlatma, ev arama, gecikmeyi açıklama ve sinemaya davet konularını kapsıyor.
- A1–A2 cümle kurma ekranına çevrimdışı çalışan kelime sıralama adımı eklendi. Öğrenci örnek cümlenin parçalarını dokunarak dizer, yanlış seçtiği parçayı geri alabilir, sıralamayı kontrol edip yeniden karıştırabilir; doğru sıralamadan sonra aynı cümleyi serbest metin alanında kendisi yazar.
- Serbest yazma hâlâ öz değerlendirmeye dayanır; otomatik dil doğruluğu veya CEFR puanı üretilmez. Tamamlandı/tekrar kayıtları mevcut `moduleProgress.writing`, `data.errors` ve egzersiz tekrar takvimini kullanır.
- Eski ilk 5 senaryonun sırası ve indeksleri değişmedi; yeni kayıtlar her A1–A2 seviyesinin sonuna eklendi. Bu nedenle mevcut yazma ilerleme anahtarları korunur. B1–B2 yazma bankası aynen bırakıldı; yeni kelime/kalıp kimliği, Supabase alanı veya veri migrasyonu eklenmedi.
- `sentence-writing.js` varlık referansı v3 → v4, Service Worker kabuk önbelleği v20 → v21 yapıldı.
- Doğrulama: A1–A2 seviyelerinin her birinde 7, B1–B2 seviyelerinin her birinde 5 senaryo olduğu; B1–B2 verisinin değişmediği; zorunlu alanlar ve senaryo benzersizliği; ana HTML inline JavaScript blokları ve Service Worker sözdizimi kontrol edildi. Kelime sıralama için eksik seçim, doğru sıra, yanlış sıra, kelimeyi geri alma ve benzersiz parça havuzu sentetik testleri başarılı. Gerçek tarayıcı, iPhone ve Supabase oturumuyla uçtan uca test yapılmadı.


## 27 Kasım A1–A2 karşılıklı konuşma senaryoları

- Dalın güncel HTML dosyası `conversation-expansion.js?v=1` dosyasını yüklüyordu; ancak dosya depoda bulunmadığından rol yapma senaryoları boş dönüyor ve konuşma ekranı kısa soru moduna düşüyordu.
- Eksik varlık yeniden oluşturuldu: A1.1, A1.2, A2.1 ve A2.2 seviyelerinin her birinde iki günlük senaryo ve üçer öğrenci repliği bulunur; toplam 8 senaryo ve 24 replik.
- Her replikte Almanca soru, Türkçe anlam, en az iki kabul edilebilir örnek yanıt ve karşı tarafın devam cümlesi bulunur.
- Eski kısa konuşma bankasının ilerleme indeksleri korunur; yeni rol yapma replikleri mevcut diyalog ilerleme anahtarlarının sonuna eklenir. Kullanıcı ilerlemesi veya Supabase veri şeması değiştirilmedi.
- HTML varlık sürümü `v2`, Service Worker önbelleği `v22` yapıldı ve yeni dosya çevrimdışı varlık listesine eklendi.
- JavaScript sözdizimi, 8 senaryo/24 replik veri yapısı, alternatif yanıtlar, seviye kapsamı, eski ilerleme indekslerinin korunması ve çevrimdışı dosya referansları doğrulandı.
- Gerçek tarayıcı, mikrofon ve Supabase oturumuyla uçtan uca test henüz yapılmadı.


## 27 Kasım — A1–A2 CEFR sınavına konuşma becerisinin eklenmesi

- A1.1, A1.2, A2.1 ve A2.2 için seviyeye uygun birer sözlü anlatım görevi eklendi: kendini tanıtma, günlük rutin, geçmiş hafta sonu ve bir gecikmeyi açıklama. B1–B2 için yeni içerik eklenmedi; bu seviyelerdeki mevcut beş becerili sınav akışı korundu.
- A1–A2 CEFR sınavı artık kelime, dil bilgisi, okuma, dinleme, konuşma ve yazma olmak üzere altı alanı ayrı ayrı gösterir. Her beceri 20 üzerinden raporlanır; genel sonuç altı alanın ortalaması alınarak 100 puana normalize edilir. Geçme koşulu tüm alanlarda en az 10/20 ve genel sonuçta en az 70/100 olarak korunur.
- Konuşma görevi sözlü yanıt ve 0–4 öz değerlendirme gerektirir. Tarayıcı SpeechRecognition destekliyorsa isteğe bağlı transkript alınır; desteklemiyorsa öğrenci yanıtı cihazına sesli verip tamamlandı olarak işaretleyebilir. Transkript uzunluğu dışında ses veya transkript metni ilerleme kaydına yazılmaz. Bu mekanizma fonetik telaffuz veya otomatik dil doğruluğu puanı iddiasında bulunmaz.
- Düşük konuşma öz değerlendirmesi mevcut hata defterine “Konuşma” türünde eklenir ve mevcut egzersiz tekrar takvimine bağlanır. Başarılı konuşma öz değerlendirmesi de tekrar planına kaydedilir.
- Eski `data.cefrAssessments` sonuçları silinmedi veya dönüştürülmedi. Yeni A1–A2 sonuçları `assessmentVersion: 2` etiketi taşır. Önceki sonuçlarda bulunmayan konuşma becerisi “Bu sınav modelinde ölçülmedi” olarak gösterilir ve eski raporların zayıf alan önerisini yanlışlıkla sıfır konuşma puanına yönlendirmesi engellenir.
- B1–B2 sınavlarında önceki beş becerili puanlama korunur; konuşma alanı henüz puanlanmaz. Beş becerili modelde genel puan hesabı önceki formülle matematiksel olarak aynı kalır.
- Yerel kayıt anahtarı, mevcut `data.cefrAssessments` dizisi, `moduleProgress`, hata/tekrar kayıtları ve Supabase şeması değişmedi; veritabanı migrasyonu gerekmez. Çevrimdışı kabuk önbelleği v22 → v23 yükseltildi; yeni A1–A2 konuşma sınavı paketi önbelleğe eklendi ve eski kullanılmayan konuşma varlığı referansı kaldırıldı.
- Kontroller: sekiz seviyenin mevcut 16 çoktan seçmeli soruları ve yazma görevleri; dört A1–A2 sözlü görevin alanları/seviye sırası; doğru yanıt indeksleri ve seçenek benzersizliği; altı becerili 100 puan, düşük konuşma puanında geçememe; B1–B2 eski beş becerili puanının aynı kalması; eski sonuç uyumluluğu; script/çevrimdışı varlık eşleşmesi; ana HTML inline JavaScript ve Service Worker sözdizimi doğrulandı. Sentetik puanlama regresyonları başarılı.
- Gerçek tarayıcı, mikrofon, iPhone/Android ve Supabase oturumuyla uçtan uca test henüz yapılmadı.

## 27 Kasım — A1.1–A1.2 kelime kartlarında örnek cümle tamamlama

- `vocabulary-expansion-2.js` içindeki 41, `vocabulary-expansion-3.js` içindeki 24 ve `vocabulary-expansion-4.js` içindeki 18 A1.1–A1.2 kelime kaydına toplam **83** kısa, doğal Almanca örnek cümle eklendi (A1.1: 29; A1.2: 54).
- Kelime başlıkları, Türkçe karşılıklar, seviyeler, kayıt sayıları ve sıraları değiştirilmedi; mevcut kayıt indeksleri ve kullanıcı ilerleme anahtarları korundu. Yeni kelime veya kalıp eklenmedi.
- HTML veri sürümleri sırasıyla v3, v3 ve v2 yapıldı; Service Worker çevrimdışı kabuğu v26'ya yükseltildi ve aynı sürümler önbellek listesine işlendi.
- Doğrulama: üç bankanın JSON veri yapısı yeniden ayrıştırıldı; 83 hedef kaydın tamamında örnek cümle bulundu, A1.1/A1.2 kayıt sayıları ve sıraları korundu; HTML/Service Worker sürüm referansları ve çevrimdışı önbellek eşleşmesi doğrulandı. Gerçek tarayıcı, mobil cihaz ve Supabase oturumuyla uçtan uca test yapılmadı.
- Kod commit'leri: `b8677abcd352ab7e82522650e91f86617bc10810`, `e551b41a141bb27a41b95a940167ca397feb0510`, `3ec1ab7854ed77d289e418b45a51822ac6d92613`, `2450fb9de4d7fa2e0124a0d61f883508f3d6ca40`, `45e2187a6b35a90b01ba676598dd56608d57b07a`.


## 27 Kasım — A1–A2 telaffuz atölyesi

- A1.1, A1.2, A2.1 ve A2.2 seviyelerine beşer ses ayrımı çalışması eklendi; toplam 20 çalışma ve 40 farklı Almanca hedef kelime bulunur. Kısa/uzun ünlüler, umlautlar ve başlangıç ünsüzleri gibi temel ayrımlar çalışılır.
- Yeni Telaffuz sekmesi, cihazın Almanca metin-seslendirme özelliğiyle her turda iki kelimeden birini rastgele okur. Öğrenci duyduğu kelimeyi seçer; doğru yanıtta örnek cümleleri dinleyebilir.
- Yanlış seçimler mevcut hata defterine Dinleme türünde, hedef ses metniyle kaydedilir ve mevcut aralıklı tekrar kuyruğuna eklenir. Hata defterinden veya tekrar kuyruğundan doğru pekiştirme, ilgili telaffuz çalışmasının ilerlemesini de tamamlar.
- Hata defteri ve tekrar istemlerinde kelime metnini doğrudan birleştirmek yerine sabit çalışma kimliği kullanılır; böylece Kamm/kam gibi bir kelimenin diğerinin içinde geçmesi yanlış boşluk oluşturmaz.
- Çalışma yalnızca A1–A2 içindir. Fonetik doğruluk puanı iddia edilmez; tarayıcı SpeechRecognition veya yapay zekâ gerekmez. Seslendirme cihazın Almanca TTS sesine bağlıdır.
- Yeni veri dosyası pronunciation-drills.js eklendi; index.html ve Service Worker güncellendi. Çevrimdışı kabuk önbelleği v26 → v27 oldu.
- Veri kontrolleri: 4 seviye × 5 çalışma, 20 benzersiz çalışma kimliği, 40 benzersiz kelime, her seçenek için Türkçe anlam ve hedef kelimeyi içeren Almanca örnek cümle doğrulandı. Yeni veri dosyası, ana HTML içindeki iki inline JavaScript bloğu ve Service Worker sözdizimi kontrol edildi; HTML script referansı ve çevrimdışı önbellek girdisi eşleşti.
- Mevcut moduleProgress, review ve errors alanları kullanıldı; Supabase tablo şeması, eski ilerleme anahtarları ve B1–B2 içerikleri değiştirilmedi. Gerçek tarayıcı, cihaz TTS sesi ve Supabase oturumuyla uçtan uca test henüz yapılmadı.
- Kod commit'leri: dba14ddab963fea8d6b234f74bff298ed1d74469, 70a7c868d416761ebecada0debc85352f1928695, 23f49eb5fe282aec3e7d6ecbd4f6f6d72df7150f, b9155c1b3be8a7c756be915acd2713c3f95f17cc.


## 28 Kasım — A1–A2 kelime örnek cümlesi tamamlama denetimi

- A1–A2 kapsamındaki ilk sekiz kelime genişletme bankasında 431 kayıt kontrol edildi; aynı alt seviyede yinelenen başlık bulunmadı.
- `vocabulary-expansion-3.js` ve `vocabulary-expansion-4.js` dosyalarında örnek cümlesi eksik 34 A1–A2 kaydı tamamlandı (13 + 21). Bu iki dosyadaki toplam 76 A1–A2 kaydının tamamında artık Almanca örnek cümle bulunuyor.
- Kelime başlıkları, Türkçe karşılıklar, seviyeler, kayıt sayısı ve sıra korunmuştur; yalnızca eksik `example` alanları eklendi. Yeni kelime veya ilerleme kimliği oluşturulmadı.
- HTML ve Service Worker varlık referansları sırasıyla v4/v3 olarak güncellendi; çevrimdışı kabuk önbelleği v28 → v29 yükseltildi.
- Kontroller: iki veri dizisi yeniden ayrıştırıldı; 34 hedef kaydın tamamı bulundu; diğer alanların ve kayıt sırasının değişmediği; iki dosyada A1–A2 örnek cümlesi eksiği kalmadığı; HTML/Service Worker sürüm referanslarının eşleştiği doğrulandı. Gerçek tarayıcı, mobil cihaz ve Supabase oturumuyla uçtan uca test yapılmadı.


## 28 Kasım — A1–A2 kelime bankasında yinelenen başlıkların güvenli temizliği

- 16 kelime genişletme bankasındaki 706 A1–A2 kaydı aynı alt seviye ve artikelden bağımsız başlık normalizasyonuyla denetlendi. 15 fazla kayıt oluşturan yinelenen başlık bulundu: A1.1'de 5, A1.2'de 8, A2.1'de 2. Bu kayıtlar aynı seviyeye uygun, bankada daha önce bulunmayan 15 günlük kelimeyle değiştirildi; A1–A2 genişletme bankalarında artık aynı alt seviyede yinelenen başlık kalmadı.
- Yeni kelimeler: A1.1 — der Kleiderbügel, die Türklingel, die Fernbedienung, die Zimmerpflanze, die Mülltonne; A1.2 — der Zebrastreifen, das Verkehrsschild, der Radweg, der Sicherheitsgurt, die Einbahnstraße, der Bahnübergang, die Fußgängerbrücke, der Gehweg; A2.1 — die Anfrage, die Wohnlage.
- Üç veri dosyasındaki kayıt sayısı, sıra ve seviye korundu. Yeni kelimelere sabit progressId verildi; böylece eski indeks tabanlı kimliklerin yeni kelimelere yanlışlıkla aktarılması önlendi.
- Eski yinelenen kayıt kimlikleri için 15 açık alias eklendi. Yerel kayıt, yedek ve Supabase'den yüklenen ilerlemede eski known, seen, missed ve tekrar kayıtları önceki kanonik kelimeye taşınır; eski favoriler ve kelimeye bağlı hata kayıtları da aynı kanonik kimliğe yönlendirilir. Yeni kelimeler temiz ilerlemeyle başlar. Supabase tablo/şeması ve kullanıcı veri nesnesinin mevcut alanları değiştirilmedi.
- A1.1 erişilebilir kelime sayısı 373 → 378, A1.2 256 → 264, A2.1 211 → 213 oldu; A1–A2 toplamı 1.060 → 1.075, genel erişilebilir toplam 1.799 → 1.814. Kalıp sayısı değişmedi.
- Ana uygulama dosyası yeni sabit kimlikleri ve eski kimlik alias'larını kullanacak şekilde güncellendi. Veri dosyası sürümleri ve Service Worker önbelleği v29 → v30 yükseltildi.
- Doğrulama: 706 A1–A2 genişletme kaydı, zorunlu alanlar ve örnek cümleler; aynı alt seviyede tekrar bulunmaması; yeni kimliklerin benzersizliği; 15 eski kimliğin kanonik eşlemesi; known/seen/missed/review/favorites/errors.wordId sentetik migrasyonu ve migrasyonun tekrar çalıştırıldığında değişiklik yapmaması; HTML/Service Worker varlık sürümleri kontrol edildi. Gerçek tarayıcı, mobil cihaz ve Supabase oturumuyla uçtan uca test henüz yapılmadı.
- Kod commit'leri: `5a7004157ce19ad63a03cc9de362a16588a8a695`, `ca1f0ea8a1424fd75c6d8ef1743e5cb628d560ce`, `294b3ce0c968eced9bc925565626a2ca1ab90723`, `8e3b2ca255bf022451b683e31d17050cbf244b55`, `f67ace0f053c311ba4d435a1f83fe101160a14b5`, `2dc612be07532255847d0559f6dc1817d7ba678c`, `1ef8d7414753840a70c758439fc7c706a2ed8b30`.
