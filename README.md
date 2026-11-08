# 1. Penjelasan Konsep

# Cara Kerja React Native

React Native adalah framework yang disitu kita bisa menulis aplikasi mobile pakai TypeScript dan React, yang hasilnya adalah komponen UI native (bukan versi WebView). Kode React yang sudah ditulis dijalankan oleh sebuah JavaScript engine dan EXPO. Logika jalannya aplikasi menggunakan JavaScript, sementara tampilan dirender oleh widget asli platform di IOS dan android.

# Minimal 3 Keunggulan untuk Aplikasi Hybrid

1. Satu kode bisa di dua platform: Kode yang sama bisa berjalan di Android dan iOS
2. Performa mendekati native: Karena merender komponen asli lewat Javascipt Interface, hasilnya jadi mulus dibanding aplikasi berbasis WebView yang murni
3. Fast Refresh : Jika melakukan Perubahan kode langsung terlihat tanpa perlu rebuild penuh

# Komponen, Props, State, dan Navigasi

# SAMBAT — Aplikasi Transportasi BRT Semarang

SAMBAT adalah aplikasi mobile hybrid untuk membantu pengguna Bus Rapid Transit (BRT) Trans Semarang: 
1.mencari halte terdekat
2.melihat peta real-time
3.mengecek rute/koridor
4.mengelola saldo pembayaran (SambatPay)
5.melihat riwayat perjalanan

# 2. Analisis Kebutuhan

# Masalah

Pengguna BRT Trans Semarang terkadang mengalami kesulitan untuk mengetahui dimana halte terdekat, posisi halte di peta, estimasi kedatangannya berapa lama, serta rute/koridor yang tersedia. 

# Target Pengguna

Mahasiswa, Wisatawan, Penduduk dan pekerja komuter di Kota Semarang

# Kebutuhan Pengguna

1. Masuk/daftar akun dengan nama dan email untuk personalisasi akun
2. Melihat daftar halte terdekat beserta jarak dan estimasi waktu
3. Melihat lokasi halte pada peta real-time yang akurat
4. Menyimpan tempat favorit (Rumah, Kampus, Mall) untuk akses cepat
5. Mengelola saldo pembayaran (SambatPay) dan melihat profil
6. Melihat informasi koridor/rute dan riwayat transaksi 

# Pemetaan Kebutuhan ke Layar dan Komponen

# Alasan Keputusan Desain

# Rencana Pengembangan

- Lokasi GPS real-time, fungsi Top Up SambatPay, dan isi detail layar Riwayat/Informasi.
- Data halte & estimasi dari API resmi BRT, pencarian rute titik-ke-titik, serta notifikasi kedatangan bus.
- Bisa melakukan pembayaran menggunakan QR.