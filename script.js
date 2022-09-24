const apiKey = 'pk.eyJ1IjoiamltbXlkZXYiLCJhIjoiY2w4ZTd4ZzdxMDNkbDNvbDgxMXFwZ2ZreCJ9.G_1A1hhq9qUgepvJ7ltbvQ';

const destination = ([-37.21255068945561, 142.39814979780982])



const map = L.map('map').setView(destination, 10);

L.tileLayer('https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=7700dcb74dc54207b756a25da4729817', {
    maxZoom: 19,
    attribution: '© Thunderforest',
    

}).addTo(map);

var marker = L.marker(destination).addTo(map);

var latlngs = [
    [-37.21255068945561, 142.39814979780982],
    [-37.227705423132925, 142.40411562055428],
    [-37.24834176475045, 142.43226808595017],
    [-37.2354583722141, 142.44979069658905],
    [-37.20757270772265, 142.4291913317434],
    [-37.21255068945561, 142.39814979780982],
];

var polyline = L.polyline(latlngs, {color: 'blue'}).addTo(map);

// zoom the map to the polyline
//map.fitBounds(polyline.getBounds());

marker.bindPopup("<b>Hike destination</b>").openPopup();
 