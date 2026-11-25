# Deutsch Meister — İçerik İlerleme Kaydı

Son kontrol: 24 Kasım 2026

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
