import { Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import { nearbyStops, userLocation, type Stop } from '../data/mockData';

// Membangun halaman HTML Leaflet + OpenStreetMap yang menampilkan
// halte-halte BRT Trans Semarang sesuai koordinat aslinya.
function buildMapHtml(stops: Stop[]): string {
  const markers = stops
    .map(
      (s) => `L.marker([${s.lat}, ${s.lng}])
        .addTo(map)
        .bindPopup(${JSON.stringify(`<b>${s.name}</b><br/>${s.distance} m • ${s.eta}`)});`
    )
    .join('\n');

  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
    />
    <style>
      html, body, #map { height: 100%; margin: 0; padding: 0; }
      .user-dot {
        width: 16px; height: 16px; background: #2563eb;
        border: 3px solid #fff; border-radius: 50%;
        box-shadow: 0 0 0 4px rgba(37,99,235,0.25);
      }
      .leaflet-container { background: #eef2f0; }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
    <script>
      var map = L.map('map', { zoomControl: false, attributionControl: false })
        .setView([${userLocation.lat}, ${userLocation.lng}], 15);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
      }).addTo(map);

      // Marker lokasi pengguna
      var userIcon = L.divIcon({ className: '', html: '<div class="user-dot"></div>', iconSize: [16, 16], iconAnchor: [8, 8] });
      L.marker([${userLocation.lat}, ${userLocation.lng}], { icon: userIcon })
        .addTo(map)
        .bindPopup('<b>Lokasi kamu</b>');

      // Marker halte
      ${markers}

      // Pastikan semua halte masuk ke dalam tampilan
      var group = L.featureGroup([
        L.marker([${userLocation.lat}, ${userLocation.lng}]),
        ${stops.map((s) => `L.marker([${s.lat}, ${s.lng}])`).join(',\n        ')}
      ]);
      map.fitBounds(group.getBounds().pad(0.2));
    </script>
  </body>
</html>`;
}

export default function MapPreview() {
  const html = buildMapHtml(nearbyStops);

  if (Platform.OS === 'web') {
    // react-native-webview tidak didukung di web; gunakan iframe sebagai gantinya.
    return (
      <iframe
        srcDoc={html}
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Peta Halte"
      />
    );
  }

  return (
    <WebView
      originWhitelist={['*']}
      source={{ html }}
      style={{ flex: 1, backgroundColor: '#eef2f0' }}
      scrollEnabled={false}
      javaScriptEnabled
      domStorageEnabled
    />
  );
}
