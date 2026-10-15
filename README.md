# İki Bakış Bir Film

[Blogger sitesi](https://ikibakisbirfilm.blogspot.com/) · [Tasarım yayın durumu](https://emregundogan.github.io/iki-bakis-bir-film/)

Bu depo, mevcut Blogger temasının tasarımını ve etkileşimlerini günceller. Yazılar, yorumlar ve sayfa içerikleri Blogger'da kalır.

## Güncelleme

1. İlgili kaynak dosyayı düzenleyin.
2. Değişikliği `main` dalına kaydedin (Commit changes).
3. **Actions → Tasarımı yayımla** işleminin yeşil olmasını bekleyin.
4. Blogu yenileyin. Yayının ve önbelleğin yenilenmesi birkaç dakika sürebilir.

| Değişiklik | Dosya |
| --- | --- |
| Ana sayfa yerleşimi | `templates/home.html` |
| Ortak menü ve alt bölüm | `templates/shell.html` ve ana sayfanın aynı bölümleri |
| Ana sayfa renkleri, fontları, boşlukları | `styles/home.css` |
| Sinema salonu teması, bordo/kehribar renkler ve mobil uyarlama | `styles/cinema.css` (önceki stillerin ardından uygulanır) |
| İç sayfaların ortak görünümü | `styles/inner.css` |
| Film inceleme görünümü | `styles/review.css` |
| Biz Kimiz ve İletişim görünümü | `styles/owned-pages.css` |
| Arama, türler ve film arşivi | `scripts/native.js`, `styles/archive.css` |
| Ana sayfa filtreleri ve film rafları | `scripts/home.js` |
| Sıkı kart aralıkları, kaydırma okları ve iç sayfaların sinema görünümü | `styles/refinements.css` (son stil katmanı) |

Yeni film yazmak için **Blogger → Yayınlar**, Biz Kimiz/İletişim metinleri için **Blogger → Sayfalar** kullanılır. Bu depoya yazı eklemek gerekmez. İncelemelerde mevcut iki yazar bölümü ve puan biçimi kullanılmaya devam edilir.

Sinema tasarımının kapsamı ve görsel kaynakları: [SINEMA.md](SINEMA.md).

## Yayınlama düzeni

`node build.mjs`, tek bir tutarlı `runtime.js` dosyası ve içerik karmasıyla adlandırılmış görsel/font dosyaları üretir. Bağımlılık kurulumu veya kişisel erişim anahtarı gerekmez. GitHub Actions yalnızca `public/` klasörünü GitHub Pages'e gönderir.

Blogger'daki küçük yükleyici bu dosyayı mevcut tema betiklerinin çalıştığı sırada yükler. Böylece Blogger'ın kendi form ve yorum bileşenlerinin başlangıç sırası korunur. Eski çalışan v8 tasarımı temanın içinde yedek olarak durur; GitHub dosyasına erişilemezse bu sürüm devreye girer.

Blogger XML'inin/gadget yapısının değiştirilmesi gerektiğinde tema ayrıca güncellenir. Mevcut XML yedeği ve hesap bilgileri bu depoya yüklenmez. GitHub deposu tasarımın ziyaretçilere açık olan kod ve varlıklarını içerir.

## Yerel kontrol

Node.js 24 ile `node build.mjs` çalıştırın. Üretilen `public/` klasörü yayına hazırdır. Blogger entegrasyonu ayrı yerel kurulum dosyasıyla yapılır; yalnızca bu depoyu oluşturmak Blogger temasını değiştirmez.

Yayın geri alınacaksa GitHub'da ilgili commit geri çevrilir ve başarılı yeni dağıtım beklenir. Blogger tarafındaki bağlantı kaldırılacaksa kurulumdan önce indirilen tema yedeği geri yüklenir.
