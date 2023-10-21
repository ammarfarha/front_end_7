var cord = [33.508244735495516, 36.2858879995269]
var map = L.map('scsmap').setView(cord, 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker(cord).addTo(map);

var circle = L.circle(cord, {
    color: 'blue',
    fillColor: '#f03',
    fillOpacity: 0.2,
    radius: 8
}).addTo(map);

var polygon = L.polygon([
    [33.508140362769005, 36.2860302451387],
    [33.50811347886451, 36.28574196069878],
    [33.50844715496992, 36.28567178619696],
    [33.50849775976453, 36.2861724907505]
]).addTo(map);

marker.bindPopup("<b>Welcome To SCS</b><br>I am a popup.");
circle.bindPopup("I am a circle.").openPopup();
polygon.bindPopup("I am a polygon.");