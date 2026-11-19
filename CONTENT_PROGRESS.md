# Deutsch Meister — İçerik İlerleme Kaydı

Son kontrol: 19 Kasım 2026

## Hedefler ve mevcut durum

| İçerik | Hedef | Mevcut | İlerleme | Kalan |
|---|---:|---:|---:|---:|
| Benzersiz kelime başlıkları | 5.200 | 1.799 | %34,6 | 3.401 |
| Benzersiz kalıp / ifade | 1.400 | 906 | %64,7 | 494 |

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
| A1.1 | 103 |
| A1.2 | 111 |
| A2.1 | 108 |
| A2.2 | 106 |
| B1.1 | 117 |
| B1.2 | 114 |
| B2.1 | 127 |
| B2.2 | 120 |
| **Toplam** | **906** |

Kalıp kaynaklarında 962 kayıt bulunur. Uygulamanın küçük harf, boşluk ve sondaki noktalama işaretlerini normalize eden kuralıyla 906 benzersiz kalıp kalır.

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
