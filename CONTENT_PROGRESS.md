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
- Kod commit'i: `7746a0628763a53d9e151dcc92ebfc20afca3240`.
- Gerçek tarayıcı, mobil cihaz ve mikrofonla uçtan uca test henüz yapılmadı. Tarayıcı desteği bulunmayan ortamlarda metinle cevap verme seçeneği korunuyor.
