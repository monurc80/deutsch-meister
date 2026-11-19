# Deutsch Meister — İçerik İlerleme Kaydı

Son kontrol: 19 Kasım 2026

## Hedefler ve mevcut durum

| İçerik | Hedef | Mevcut | İlerleme | Kalan |
|---|---:|---:|---:|---:|
| Benzersiz kelime başlıkları | 5.200 | 1.725 | %33,2 | 3.475 |
| Benzersiz kalıp / ifade | 1.400 | 866 | %61,9 | 534 |

### Kelimeler — alt seviyelere göre

| Alt seviye | Erişilebilir kelime |
|---|---:|
| A1.1 | 348 |
| A1.2 | 219 |
| A2.1 | 206 |
| A2.2 | 213 |
| B1.1 | 180 |
| B1.2 | 169 |
| B2.1 | 185 |
| B2.2 | 205 |
| **Toplam** | **1.725** |

Kelime bankalarında 1.659 kaynak kaydı bulunur. KAPITEL5 listesindeki 105 kayıt da korunur; uygulamanın mevcut birleştirme ve tekrar ayıklama mantığıyla toplam erişilebilir kelime sayısı 1.725'tir.

### Kalıplar — alt seviyelere göre

| Alt seviye | Benzersiz kalıp |
|---|---:|
| A1.1 | 98 |
| A1.2 | 106 |
| A2.1 | 103 |
| A2.2 | 101 |
| B1.1 | 112 |
| B1.2 | 109 |
| B2.1 | 122 |
| B2.2 | 115 |
| **Toplam** | **866** |

Kalıp kaynaklarında 922 kayıt bulunur. Uygulamanın küçük harf, boşluk ve sondaki noktalama işaretlerini normalize eden kuralıyla 866 benzersiz kalıp kalır.

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
- Bu kayıt hazırlanırken dal, `main` dalının 53 commit ilerisinde ve 1 commit gerisindeydi.
- PR açık; birleştirme ve GitHub Pages yayını yapılmadı.
