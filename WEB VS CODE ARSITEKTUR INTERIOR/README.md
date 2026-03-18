# Arsitek Interior — Template

Template website sederhana untuk arsitek interior.

## Struktur
- `index.html` — markup
- `styles.css` — stylesheet
- `script.js` — interaksi (hamburger, form handling)
- `images/*` — placeholder images (SVG)

## Cara pakai
1. Buka `index.html` di browser (double-click) atau serve dengan HTTP server untuk terbaiknya (mis. `npx http-server`).
2. Ganti teks, gambar, dan alamat email sesuai kebutuhan.
3. Untuk menghubungkan backend, ganti bagian `contactForm` handler di `script.js` agar `fetch` ke endpoint server.

## Catatan aksesibilitas
- Tombol hamburger memakai `aria-expanded`.
- Ada skip-link untuk keyboard users.
- Form menggunakan `aria-live` untuk status pengiriman.

Jika ingin, saya bisa: menambahkan template email handling (Netlify/Forms), menambahkan gallery lightbox, atau membuat versi bahasa Inggris.
