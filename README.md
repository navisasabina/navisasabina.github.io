# Portfolio Sasha — cara online & cara edit

Website ini cuma HTML + CSS + JavaScript biasa. Nggak perlu install apa-apa, nggak perlu `npm`.

## Isi folder

| File | Isinya |
|---|---|
| `index.html` | Halaman utama (About, Logbook, Work, Certificates, Contact) |
| `abita.html`, `ab-portal.html`, `pharmatrack.html`, `forecasting.html`, `planet-zeta.html` | Halaman detail tiap project |
| `js/home.js` | **Kontak, link CV, dan jawaban Sasha's Bot** (paling sering diedit) |
| `js/site.js` | Tombol light/dark + zoom gambar |
| `assets/` | Semua gambar (foto, screenshot, sertifikat) |

## Lihat di laptop dulu

Klik dua kali `index.html`, langsung kebuka di browser.

## Online pakai GitHub Pages (gratis)

1. Buka github.com → **New repository** → kasih nama, misalnya `portfolio` → **Public** → Create.
2. Di repo baru, klik **uploading an existing file**.
3. Drag **isi** folder ini (bukan foldernya) ke situ: `index.html`, semua file `.html`, folder `js`, folder `assets`, `favicon.svg`.
4. Klik **Commit changes**.
5. Masuk **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main`, folder `/ (root)` → **Save**.
6. Tunggu 1–2 menit. Link-nya muncul di atas halaman itu, bentuknya `https://navisasabina.github.io/portfolio/`.

Mau link-nya jadi `https://navisasabina.github.io/` aja? Namain repo-nya persis `navisasabina.github.io`.

## Alternatif: Vercel / Netlify

- **Netlify**: buka app.netlify.com/drop → drag folder ini → langsung online.
- **Vercel**: hubungkan repo GitHub tadi → Framework: **Other** → Deploy.

## Cara edit

- **Ganti nomor WA / email / link CV** → buka `js/home.js`, ubah 3 baris paling atas (`WHATSAPP`, `EMAIL`, `CV_URL`). Nomor WA ditulis tanpa `+` dan spasi, contoh `6281374474451`.
- **Ganti jawaban bot** → masih di `js/home.js`, bagian `REPLIES`.
- **Ganti teks lain** (bio, logbook, deskripsi project) → buka file `.html`-nya pakai editor (VS Code / Notepad), cari pakai Ctrl+F / Cmd+F, ganti teksnya, simpan.
  Link email/WA/CV juga muncul di `index.html` (tombol Download CV dan daftar kontak), jadi kalau ganti, cari di situ juga.
- **Ganti gambar** → taruh file baru di `assets/` dengan nama yang **sama persis**, atau ubah `src="assets/..."` di HTML-nya.
- Setelah edit di laptop, upload ulang file yang berubah ke GitHub (Add file → Upload files). Website ke-update sendiri dalam 1–2 menit.

## Catatan

- Pastikan screenshot RS Awal Bros yang dipakai cuma data contoh / sudah dapat izin.
- Mode gelap diingat per browser (pakai localStorage).
