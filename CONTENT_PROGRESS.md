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
- Geniş taramada A1–A2 kelime kaynaklarında 18 yinelenen başlık bulundu. `index.html` içindeki kelime kimlikleri kayıt sırasına göre `w0`, `w1`… üretildiği için bu turda kayıt silinmedi veya sıralanmadı; aksi işlem mevcut kullanıcı ilerlemesini başka kelimelere bağlayabilir. Yinelenenleri güvenli biçimde birleştirmek için kimlik eşlemesi/migrasyonu ayrıca tasarlanmalı.
- Kelime başlığı toplamı değişmedi; bu geliştirme yeni kelime değil, mevcut kartların örnek ve anlam kalitesini artırır.


## 25 Kasım A1–A2 soru netliği denetimi

- Tek yanıt alanında birebir cevap kontrolü yapılan ders ve dil bilgisi soruları, birden fazla makul cevaba açık olmaması için yeniden düzenlendi.
- Olumsuzluk sorularına `sondern` karşıtlığı, artikel/iyelik sorularına temel biçim ipucu, modal fiil sorusuna `dürfen` fiil ipucu eklendi.
- Dativ ve yer bildiren edat sorularında hedeflenen belirli artikelin cinsiyeti belirtildi; zaman ve sıfat sorularında hedeflenen fiil/temel sıfat açıkça verildi.
- `a1-a2-completion.js` yeniden ayrıştırıldı: A1.1–A2.2 için 20 ders, 24 dil bilgisi sorusu, 16 diyalog ve 8 okuma metni korundu. 44 ders/dil bilgisi sorusunun her birinde tek boşluk ve boş olmayan cevap doğrulandı.
- JavaScript sözdizimi ve veri grubu kontrolleri başarılı. Tarayıcıda, mobilde ve gerçek Supabase hesabıyla uçtan uca test yapılmadı.
- Kod commit'i: `65ffac8aa07aacafda009fe978186c83e3452883`.
