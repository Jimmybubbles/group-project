const apiKey = 'pk.eyJ1IjoiamltbXlkZXYiLCJhIjoiY2w4ZTd4ZzdxMDNkbDNvbDgxMXFwZ2ZreCJ9.G_1A1hhq9qUgepvJ7ltbvQ';


const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'

}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);