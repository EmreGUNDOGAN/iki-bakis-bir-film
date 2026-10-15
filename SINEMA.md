# Sinema salonu tasarımı

Onaylanan bordo kadife perde, sıcak salon ışıkları, krem kâğıt bilet ve açık okuma alanları uygulanır. Open Sans normal (400) korunur. Ezgi ve Emre için portre kullanılmaz; isimler ve gerçek puanlar gösterilir.

Ana sayfada Palm Springs, akşamın bileti, filtrelenebilir arşiv, dokuz tür rafı, film geceleri notu, The Shining görseliyle Biz Kimiz bağlantısı ve ortak alt bölüm bulunur. Tür rafları: Gerilim, Komedi, Korku, Dram, Gizem, Aksiyon, Fantastik, Suç ve Avrupa. Filmi az olan raflarda gerçek film sayısını belirten kısa arşiv notu kullanılır.

Yazılar, arşiv sonuçları, yorumlar ve iletişim formu Blogger'dan gelir. İç sayfalarda ortak renk ve menü kimliği uygulanır; içerik yönetimi Blogger'da sürer. Yeni tema XML'i yüklemek gerekmez; kurulu GitHub bağlantısı yeni runtime dosyasını alır.

## Kaynaklar ve görsel üretimi

- `assets/poster-01.jpg`–`poster-19.jpg`: mevcut sitenin gerçek film afişlerinin yerel kopyaları. Kartlardaki yeni yayınlar Blogger beslemesiyle güncellenir.
- Palm Springs, Grand Budapest Hotel ve The Shining: önceki onaylı tasarımın mevcut görselleri.
- `assets/cinema-curtains-v1.png`: yerleşik imagegen aracıyla, onaylı tasarım referans alınarak üretilen dekoratif arka plan. Mod: referans görselle yeni arka plan üretimi; çıktı PNG. Sonradan görüntü işleme uygulanmadı.

Üretim brief'i: zengin bordo kadife tiyatro perdeleri yalnızca kenarlarda, kenarlarda küçük sıcak kehribar salon lambaları, alt yaklaşık yüzde yedilik alanda koyu bordo sinema koltuklarının sırtları. Ortada web içeriğine yer bırakacak koyu bordo boş doku. Gerçekçi malzeme ve yumuşak sinema salonu ışığı. Yazı, logo, kişi, portre, film karesi, perde üstüne çizilmiş ekran veya arayüz yok. Onaylı ana sayfanın atmosferi ve renkleri korunacak.

## Kartlar ve iç sayfalar

Ana sayfadaki raflar beş filmle sınırlandırılmaz. Taşan listelerde sağ/sol okları, yatay kaydırma ve konum göstergesi bulunur. Klavyede odaklanan raf üzerinde yön tuşları, Home ve End kullanılabilir. Hareket azaltma tercihi korunur. Mobilde iki kart görünür; kısa listelerde gereksiz oklar gizlenir. Başlık, yıl/tür, puan ve okuma bağlantısı arasında sabit yüksekliğe bağlı büyük boşluk bırakılmaz.

Biz Kimiz sayfasında bordo giriş, krem bilet, iki ayrı yazar alanı ve The Shining bölümü; iletişimde mevcut Blogger formu ve krem öneri bileti; incelemelerde bordo başlık, afiş/konu/fragman/bilet ve eşit genişlikte iki okuma sütunu kullanılır. Dar ekranlarda sütunlar alt alta gelir. Form kimlikleri, yorumlar ve yazı metinleri Blogger yönetiminde kalır. `styles/refinements.css`, bu düzenlemeleri önceki stil katmanlarından sonra uygular.

## Derleme ve geri dönüş

`node build.mjs` söz dizimini, şablon köklerini ve kullanılan görsellerin varlığını doğrular; `public/` üretir. `main` değişikliği mevcut Pages workflow'unu çalıştırır. Geri dönüş için GitHub'da bu tasarım commit'i geri alınarak önceki sürüm yeniden yayımlanabilir; Blogger yayınları bundan etkilenmez.
