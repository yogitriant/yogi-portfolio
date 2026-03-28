# Panduan Hosting Gratis (Vercel)

Cara termudah dan terbaik untuk hosting proyek Next.js Anda secara gratis adalah menggunakan **Vercel**. Pastikan Anda sudah memiliki akun [GitHub](https://github.com).

## Langkah 1: Persiapan Git
Pastikan file `.gitignore` sudah ada di folder proyek Anda (sudah saya buatkan). Kemudian:
1.  Inisialisasi git: `git init`
2.  Tambah semua file: `git add .`
3.  Commit: `git commit -m "Initial commit"`

## Langkah 2: Upload ke GitHub
1.  Buat repository baru di [GitHub](https://github.com/new). Beri nama (misal: `yogi-portfolio`).
2.  Ikuti instruksi GitHub untuk menghubungkan folder lokal ke repository tersebut:
    ```bash
    git remote add origin https://github.com/USERNAME/yogi-portfolio.git
    git branch -M main
    git push -u origin main
    ```

## Langkah 3: Deploy ke Vercel
1.  Buka [vercel.com](https://vercel.com) dan login dengan akun GitHub Anda.
2.  Klik **"Add New"** > **"Project"**.
3.  Pilih repository `yogi-portfolio` yang baru saja Anda buat.
4.  Klik **"Deploy"**.

## Langkah 4: Custom Domain (Opsional)
Ya, di Vercel Anda bisa memasukkan domain Anda sendiri (misal: `yogitrianto.com`) secara gratis:
1.  Buka proyek Anda di dashboard Vercel.
2.  Pergi ke tab **"Settings"** > **"Domains"**.
3.  Masukkan nama domain Anda dan klik **"Add"**.
4.  Vercel akan memberikan konfigurasi DNS (A record atau CNAME) yang perlu Anda masukkan di panel penyedia domain Anda.

**Selesai!** Vercel akan otomatis mengurus sertifikat SSL (HTTPS) untuk domain Anda.
