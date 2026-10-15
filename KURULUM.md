# Kurulum ve kullanım

GitHub bağlantısı 15 Ekim 2026 tarihinde mevcut Blogger temasına kuruldu.

## Bundan sonra

- Tasarım değişiklikleri bu depodaki `styles/`, `templates/` ve `scripts/` dosyalarından yapılır.
- Değişiklik `main` dalına kaydedilince **Tasarımı yayımla** otomatik çalışır.
- Başarılı yayından sonra blog yenilenir. Her düzeltmede Blogger'a XML yüklemek gerekmez.
- Film yazıları Blogger **Yayınlar**, Biz Kimiz ve İletişim metinleri **Sayfalar** bölümünden düzenlenir.
- Blogger'ın XML/gadget yapısı değiştirilecekse tema ayrıca güncellenir.

## Kontrol edilenler

Ana sayfa, film arşivi, Korku, Önerilerimiz, Speak No Evil araması, Speak No Evil incelemesi, Biz Kimiz ve İletişim canlı adreste GitHub sürümüyle açıldı. Görünen metinler kurulum öncesiyle eşleşti. Yerel 320 ve 768 piksel kontrollerinde yatay taşma görülmedi. Temanın 68 mevcut Blogger bileşeni korundu.

GitHub dosyası yüklenemezse tema içinde kalan çalışan v8 kodu devreye girer. Bu yedek yol yerel kontrolde denendi. İletişim formundan gerçek mesaj gönderimi ve okuyucu yorumu gönderimi bu kurulumun testine dahil değildir.

## Yayını doğrulama ve geri alma

[Yayın durumu](https://emregundogan.github.io/iki-bakis-bir-film/) son yayımlanan commit'i gösterir. Blogger sayfasındaki `#ibf-home` öğesinde `data-ibf-source="github"` ve `data-ibf-release` aynı yayını belirtir.

Bir değişiklik sorun çıkarırsa ilgili GitHub commit'i geri çevrilip yeni dağıtım beklenir. Bağlantı tamamen kaldırılacaksa kurulumdan önce indirilen Blogger tema yedeği geri yüklenir. Tema yedeği bu herkese açık depoda tutulmaz.
