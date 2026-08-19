# Pamukkale Global

Kurumsal, çok dilli tekstil sourcing sitesi — Denizli, Türkiye.

Diller: İngilizce · İspanyolca · Almanca · Rusça

## Geliştirme

```bash
npm install
npm run dev
```

Site `http://localhost:3000` adresinde açılır ve `/en` diline yönlendirilir.

## WhatsApp numarası

Gerçek WhatsApp numaranızı eklemek için `.env.local` dosyası oluşturun:

```
NEXT_PUBLIC_WHATSAPP_NUMBER=905551112233
NEXT_PUBLIC_WHATSAPP_DISPLAY=+90 555 111 22 33
```

Numara uluslararası formatta, `+` ve boşluk olmadan yazılmalıdır.

## Logo

Logoyu değiştirmek için `public/logo.svg` dosyasını ve `src/components/logo.tsx` içindeki markayı güncelleyin.

## Vercel’e yayınlama

1. [vercel.com/new](https://vercel.com/new) adresinden GitHub reposunu import edin: `iloyanaturel/pamukkaleglobal`
2. Framework olarak Next.js seçilir; ekstra ayar gerekmez.
3. Production branch olarak `main` kullanın (PR merge edildikten sonra).
4. WhatsApp için Project Settings → Environment Variables:

```
NEXT_PUBLIC_WHATSAPP_NUMBER=90XXXXXXXXXX
NEXT_PUBLIC_WHATSAPP_DISPLAY=+90 XXX XXX XX XX
```

Kendi domaininizi Settings → Domains üzerinden bağlayabilirsiniz.

## İletişim

Teklif formu WhatsApp ve e-posta (`globalpamukkale@gmail.com`) üzerinden çalışır.
