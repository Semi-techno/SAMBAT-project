# 1. Penjelasan Konsep

# Cara Kerja React Native

React Native adalah framework yang disitu kita bisa menulis aplikasi mobile pakai TypeScript dan React, yang hasilnya adalah komponen UI native (bukan versi WebView). Kode React yang sudah ditulis dijalankan oleh sebuah JavaScript engine dan EXPO. Logika jalannya aplikasi menggunakan JavaScript, lalu JSI menjembataninya ke native UI widgets milik OS sementara tampilan dirender oleh widget asli platform di IOS dan android. 

# Minimal 3 Keunggulan untuk Aplikasi Hybrid

1. Satu kode bisa di dua platform: Kode yang sama bisa berjalan di Android dan iOS
2. Performa mendekati native: Karena merender komponen asli lewat Javascipt Interface, hasilnya jadi mulus dibanding aplikasi berbasis WebView yang murni
3. Fast Refresh : Jika melakukan Perubahan kode langsung terlihat tanpa perlu rebuild penuh

# Komponen, Props, State, dan Navigasi

1. Komponen dan Props
Komponen adalah bagian dari tampilan aplikasi yang nantinya bisa digunakan secara reuseable. Props adalah data yang dikirim dari komponen utama ke komponen turunan agar dinamis

Contoh pada proyek SAMBAT (`src/components/primaryButton.tsx`):
```tsx
interface PrimaryButtonProps {
  title: string;
  onPress?: () => void;
}
export default function PrimaryButton({ title, onPress }: PrimaryButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} className="bg-[#b33928] py-3.5 rounded-xl items-center">
      <Text className="text-white text-sm font-semibold">{title}</Text>
    </TouchableOpacity>
  );
}
```

2. State adalah data yang disimpan di komponen yang bisa berubah sesuai data yang dimasukkan oleh user

Contoh pada proyek SAMBAT (`src/screens/SearchStops.tsx`):
```tsx
const [search, setSearch] = useState('');
const [selectedStop, setSelectedStop] = useState<Stop | null>(null);
const [showMap, setShowMap] = useState(false);
```

3. Navigasi adalah perpindahan antar halaman. 

Contoh pada proyek SAMBAT:
```tsx
<Tab.Navigator
  screenOptions={{
    tabBarActiveTintColor: '#b33928',
    tabBarInactiveTintColor: '#6c6c6c',
    tabBarStyle: { backgroundColor: '#ffffff', height: 70 },
    tabBarShowLabel: false,
  }}
>
  <Tab.Screen
    name="Beranda"
    component={HomeScreen}
    options={{
      headerShown: false,
      tabBarIcon: ({ focused }) => (
        <View className="flex-col items-center">
          <Ionicons name="home" size={24} color={focused ? '#b33928' : '#6c6c6c'} />
          {focused && <Text className="text-xs text-[#b33928]">Beranda</Text>}
        </View>
      ),
    }}
  />
</Tab.Navigator>
```


# SAMBAT — Aplikasi Transportasi BRT Semarang

SAMBAT adalah aplikasi mobile hybrid untuk membantu pengguna Bus Rapid Transit (BRT) Trans Semarang: 
1.mencari halte terdekat
2.melihat peta real-time
3.mengecek rute/koridor
4.mengelola saldo pembayaran (SambatPay)
5.melihat riwayat perjalanan

# 2. Analisis Kebutuhan

# Masalah

Pengguna BRT Trans Semarang terkadang mengalami kesulitan:
1.mengetahui dimana halte terdekat dari lokasi
2.tidak mengetahui posisi halte di peta
3.estimasi kedatangannya berapa lama
4.rute/koridor yang tersedia dan titik transit yang tepat 

# Target Pengguna

1.Mahasiswa & Siswa : Anak kos yang merantau dan bersekolah atauberkuliah di semarang butuh BRT sebagai transportnya dan harga yang murah
2.Wisatawan: Panduan transportasi umum ketika mau ke tempat wisata di semarang
3.Penduduk dan pekerja komuter: Pegawai dan penduduk yang bekerja dan bepergian di area semarang 

# Kebutuhan Pengguna

1. Masuk/daftar akun dengan nama dan email untuk personalisasi akun
2. Melihat daftar halte terdekat beserta jarak dan estimasi waktu
3. Melihat lokasi halte pada peta real-time yang akurat
4. Menyimpan tempat favorit (Rumah, Kampus, Mall) untuk akses cepat
5. Mengelola saldo pembayaran (SambatPay) dan melihat profil
6. Melihat informasi koridor/rute dan riwayat transaksi 

# Pemetaan Kebutuhan ke Layar dan Komponen

[Tabel Pemetaan Kebutuhan Layar Komponen](./assets/docs/tabel_KebutuhanLayarKomponen.png.png)

# Alasan Keputusan Desain

- Palet Warna Identitas BRT (`#b33928`): Warna merah bata gelap terinspirasi langsung dari warna bus Trans Semarang sehingga mudah dikenali oleh warga kota semarang.
- Latar Belakang (Warm Background `#fdf6f3`): Menggantikan latar putih murni agar lebih berwarna ketika digunakan baik tempat terang maupun gelap. bus.
- Pop-up Bottom-Sheet untuk Pemilihan Halte: Memunculkan daftar halte dari bawah membuat lebih mudah dijangkau saat berdiri atau berjalan menuju halte.


# Rencana Pengembangan

- Lokasi GPS real-time, fungsi Top Up SambatPay, dan isi detail layar Riwayat/Informasi.
- Data halte & estimasi dari API resmi BRT, pencarian rute titik-ke-titik, serta notifikasi kedatangan bus.
- Bisa melakukan pembayaran menggunakan QR.