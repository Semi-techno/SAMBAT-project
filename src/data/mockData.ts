export interface Stop {
  id: number;
  name: string;
  distance: number;
  eta: string;
  lat: number;
  lng: number;
}

export interface FavoritePlace {
  id: string;
  label: string;
  icon: 'home' | 'campus' | 'mall';
  color: string;
  lat: number;
  lng: number;
}

export interface Corridor {
  id: number;
  color: string;
  from: string;
  to: string;
  stops: number;
}

export interface FareTransaction {
  id: string;
  type: 'fare';
  corridor: string;
  datetime: string;
  amount: number;
  from: string;
  to: string;
}

export interface TopUpTransaction {
  id: string;
  type: 'topup';
  datetime: string;
  amount: number;
  method: string;
  status: string;
}

export type Transaction = FareTransaction | TopUpTransaction;

export interface TransactionGroup {
  date: string;
  items: Transaction[];
}

export interface AccountMenuItem {
  id: string;
  label: string;
  desc: string;
}

export const currentUser = {
  name: 'Pedro Santoso',
  email: 'pedro.santoso@email.com',
  verified: true,
  balance: 46500,
  avatar: 'https://i.pravatar.cc/150?img=12',
};

export const userLocation = { lat: -6.98444, lng: 110.42083 };

export const nearbyStops: Stop[] = [
  { id: 1, name: 'Halte Tentrem Gajahmada', distance: 180, eta: '5 mins left', lat: -6.98361, lng: 110.42139 },
  { id: 2, name: 'Halte Simpang Lima', distance: 200, eta: '10 mins left', lat: -6.98972, lng: 110.42306 },
  { id: 3, name: 'Halte Gramedia Pandanaran 1', distance: 400, eta: '8 mins left', lat: -6.98778, lng: 110.41722 },
  { id: 4, name: 'Halte Gramedia Pandanaran 2', distance: 450, eta: '4 mins left', lat: -6.98694, lng: 110.41583 },
  { id: 5, name: 'Halte Pandanaran', distance: 650, eta: '12 mins left', lat: -6.98556, lng: 110.41389 },
  { id: 6, name: 'Halte Tugu Muda', distance: 800, eta: '9 mins left', lat: -6.98389, lng: 110.40861 },
  { id: 7, name: 'Halte Theresiana', distance: 900, eta: '15 mins left', lat: -6.99111, lng: 110.41944 },
];

export const favoritePlaces: FavoritePlace[] = [
  { id: 'home', label: 'Rumah', icon: 'home', color: '#b33928', lat: -6.98444, lng: 110.42083 },
  { id: 'campus', label: 'Kampus', icon: 'campus', color: '#b33928', lat: -6.97611, lng: 110.41528 },
  { id: 'mall', label: 'Mall', icon: 'mall', color: '#b33928', lat: -6.98361, lng: 110.42250 },
];

export const corridors: Corridor[] = [
  { id: 1, color: '#e0392b', from: 'Mangkang', to: 'Penggaron', stops: 18 },
  { id: 2, color: '#f28c1b', from: 'Terboyo', to: 'Sisemut', stops: 20 },
  { id: 3, color: '#f2c400', from: 'Pelabuhan Tj. Emas', to: 'Cangkiran', stops: 37 },
  { id: 4, color: '#2faa4a', from: 'Terminal Cangkiran', to: 'Penggaron', stops: 18 },
  { id: 5, color: '#7a3fb5', from: 'Meteseh', to: 'PRPP', stops: 12 },
  { id: 6, color: '#2f7fd1', from: 'Unnes', to: 'Cangkiran', stops: 16 },
  { id: 7, color: '#d94f91', from: 'Terboyo', to: 'Pudakpayung', stops: 22 },
  { id: 8, color: '#1fa7a0', from: 'Ngaliyan', to: 'Bandara A. Yani', stops: 14 },
];

export const transactionGroups: TransactionGroup[] = [
  {
    date: 'Jumat, 26 Juli 2026',
    items: [
      {
        id: 't1',
        type: 'fare',
        corridor: 'BRT Koridor 5',
        datetime: '24 Jul 2026 . 13.25',
        amount: -3500,
        from: 'Jl. Gajahmada No.II4, Pekunden',
        to: 'Binus University @POJ City',
      },
    ],
  },
  {
    date: 'Senin, 20 Juli 2026',
    items: [
      {
        id: 't2',
        type: 'fare',
        corridor: 'BRT Koridor 5',
        datetime: '20 Jul 2026 . 13.35',
        amount: -3500,
        from: 'Jl. Gajahmada No.II4, Pekunden',
        to: 'Queen City Mall',
      },
      {
        id: 't3',
        type: 'topup',
        datetime: '20 Jul 2026 . 09.10',
        amount: 50000,
        method: 'Virtual Account BCA',
        status: 'Berhasil',
      },
    ],
  },
  {
    date: 'Jumat, 19 Juni 2026',
    items: [
      {
        id: 't4',
        type: 'fare',
        corridor: 'BRT Koridor 5',
        datetime: '19 Jun 2026 . 08.13',
        amount: -3500,
        from: 'Halte PRPP',
        to: 'Halte Meteseh',
      },
    ],
  },
  {
    date: 'Sabtu, 13 Juni 2026',
    items: [
      {
        id: 't5',
        type: 'fare',
        corridor: 'BRT Koridor 5',
        datetime: '13 Jun 2026 . 11.15',
        amount: -3500,
        from: 'Halte Simpang Lima',
        to: 'Halte Tugu Muda',
      },
    ],
  },
];

export const accountMenu: AccountMenuItem[] = [
  { id: 'history', label: 'Riwayat Transaksi', desc: 'Lihat catatan transaksi Anda' },
  { id: 'favorites', label: 'Favorit', desc: 'Halte, rute, dan bus favorit Anda' },
  { id: 'notifications', label: 'Notifikasi Saya', desc: 'Kelola notifikasi dan pengingat' },
  { id: 'settings', label: 'Pengaturan', desc: 'Akun, aplikasi, dan preferensi' },
  { id: 'help', label: 'Bantuan & Dukungan', desc: 'FAQ, pusat bantuan, dan laporan masalah' },
];

export const formatRupiah = (value: number) => {
  const abs = Math.abs(value);
  const formatted = 'Rp' + abs.toLocaleString('id-ID');
  return value < 0 ? '-' + formatted : formatted;
};

export interface HalteChoice {
  id: string;
  name: string;
  address: string;
  corridors: string[];
}

export interface RecentSearchItem {
  id: string;
  title: string;
  subtitle: string;
  halteId: string;
}

export interface RouteHalteStep {
  id: string;
  name: string;
  role: 'naik' | 'transit' | 'turun';
  corridorBadge?: string;
  badgeLabel?: string;
}

export interface RouteOptionItem {
  id: string;
  title: string;
  price: number;
  duration: string;
  timeRange: string;
  busChanges: number;
  transitCount: number;
  steps: RouteHalteStep[];
}

export const destinationHalteOptions: HalteChoice[] = [
  {
    id: 'binus-poj',
    name: 'Binus University @POJ City',
    address: 'Jl. POJ City, Tawangsari, Semarang Barat',
    corridors: ['Koridor 5', 'Feeder PRPP'],
  },
  {
    id: 'halte-theresiana',
    name: 'Halte Theresiana',
    address: 'Jl. Mayjen Sutoyo, Pekunden, Semarang Tengah',
    corridors: ['Koridor 5', 'Koridor 3B'],
  },
  {
    id: 'halte-simpang-lima',
    name: 'Halte Simpang Lima',
    address: 'Kawasan Simpang Lima, Semarang Selatan',
    corridors: ['Koridor 1', 'Koridor 3A', 'Koridor 4', 'Koridor 5'],
  },
  {
    id: 'halte-prpp',
    name: 'Halte PRPP',
    address: 'Jl. Puri Anjasmoro, Tawang Mas, Semarang Barat',
    corridors: ['Koridor 5', 'Feeder POJ City'],
  },
  {
    id: 'halte-tentrem',
    name: 'Halte Tentrem Gajahmada',
    address: 'Jl. Gajahmada No. 123, Pekunden, Semarang Tengah',
    corridors: ['Koridor 3A', 'Koridor 3B'],
  },
  {
    id: 'halte-tugu-muda',
    name: 'Halte Tugu Muda',
    address: 'Bundaran Tugu Muda, Pendrikan Kidul, Semarang Tengah',
    corridors: ['Koridor 1', 'Koridor 2', 'Koridor 4', 'Koridor 5'],
  },
  {
    id: 'halte-pandanaran',
    name: 'Halte Pandanaran',
    address: 'Jl. Pandanaran, Mugassari, Semarang Selatan',
    corridors: ['Koridor 1', 'Koridor 8'],
  },
  {
    id: 'halte-gramedia',
    name: 'Halte Gramedia Pandanaran 1',
    address: 'Jl. Pandanaran No. 122, Pekunden',
    corridors: ['Koridor 1', 'Koridor 5'],
  },
];

export const recentSearches: RecentSearchItem[] = [
  {
    id: 'recent-binus',
    title: 'Binus University @POJ City',
    subtitle: 'Jl. POJ City, Tawangsari, Semarang Barat, Kota Semarang, Jawa Tengah',
    halteId: 'binus-poj',
  },
];

export const getRouteOptionsForDestination = (destName: string): RouteOptionItem[] => {
  const isBinus = destName.toLowerCase().includes('binus') || destName.toLowerCase().includes('poj');

  if (isBinus) {
    return [
      {
        id: 'rute-1',
        title: 'Via Halte Theresiana',
        price: 3500,
        duration: '1 jam 12 menit',
        timeRange: '13.23 - 14.35',
        busChanges: 2,
        transitCount: 1,
        steps: [
          {
            id: 's1',
            name: 'Halte Theresiana',
            role: 'naik',
            corridorBadge: 'BRT Koridor 5 arah PRPP',
          },
          {
            id: 's2',
            name: 'Halte PRPP',
            role: 'transit',
            badgeLabel: 'Transit',
            corridorBadge: 'Feeder arah POJ City',
          },
          {
            id: 's3',
            name: 'Binus University @POJ City',
            role: 'turun',
            badgeLabel: 'Halte Tujuan',
          },
        ],
      },
      {
        id: 'rute-2',
        title: 'Via Halte Simpang Lima',
        price: 3500,
        duration: '1 jam 25 menit',
        timeRange: '13.23 - 14.48',
        busChanges: 2,
        transitCount: 1,
        steps: [
          {
            id: 's2-1',
            name: 'Halte Simpang Lima',
            role: 'naik',
            corridorBadge: 'BRT Koridor 5 arah PRPP',
          },
          {
            id: 's2-2',
            name: 'Halte PRPP',
            role: 'transit',
            badgeLabel: 'Transit',
            corridorBadge: 'Feeder arah POJ City',
          },
          {
            id: 's2-3',
            name: 'Binus University @POJ City',
            role: 'turun',
            badgeLabel: 'Halte Tujuan',
          },
        ],
      },
      {
        id: 'rute-3',
        title: 'Via Halte Tentrem & Tugu Muda',
        price: 3500,
        duration: '1 jam 35 menit',
        timeRange: '13.30 - 15.05',
        busChanges: 2,
        transitCount: 1,
        steps: [
          {
            id: 's3-1',
            name: 'Halte Tentrem Gajahmada',
            role: 'naik',
            corridorBadge: 'BRT Koridor 3A arah Pemuda',
          },
          {
            id: 's3-2',
            name: 'Halte Tugu Muda',
            role: 'transit',
            badgeLabel: 'Transit',
            corridorBadge: 'BRT Koridor 5 arah PRPP',
          },
          {
            id: 's3-3',
            name: 'Binus University @POJ City',
            role: 'turun',
            badgeLabel: 'Halte Tujuan',
          },
        ],
      },
    ];
  }

  return [
    {
      id: 'rute-direct',
      title: `Langsung ke ${destName}`,
      price: 3500,
      duration: '35 menit',
      timeRange: '13.20 - 13.55',
      busChanges: 1,
      transitCount: 0,
      steps: [
        {
          id: 'fb-1',
          name: 'Halte Tentrem Gajahmada',
          role: 'naik',
          corridorBadge: 'BRT Koridor 3A',
        },
        {
          id: 'fb-2',
          name: destName,
          role: 'turun',
          badgeLabel: 'Halte Tujuan',
        },
      ],
    },
    {
      id: 'rute-transit',
      title: `Via Transit Simpang Lima ke ${destName}`,
      price: 3500,
      duration: '48 menit',
      timeRange: '13.25 - 14.13',
      busChanges: 2,
      transitCount: 1,
      steps: [
        {
          id: 'fb-3',
          name: 'Halte Simpang Lima',
          role: 'naik',
          corridorBadge: 'BRT Koridor 1',
        },
        {
          id: 'fb-4',
          name: 'Halte Tugu Muda',
          role: 'transit',
          badgeLabel: 'Transit',
          corridorBadge: 'BRT Koridor 5',
        },
        {
          id: 'fb-5',
          name: destName,
          role: 'turun',
          badgeLabel: 'Halte Tujuan',
        },
      ],
    },
  ];
};
