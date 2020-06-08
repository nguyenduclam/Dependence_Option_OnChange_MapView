/*---- Set up Map ----*/
var base = L.tileLayer('//{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png', {
    attribution: 'Map tiles by',
    subdomains: 'abcd',
    maxZoom: 20,
    minZoom: 0,
    label: 'Bản đồ đơn giản',
    iconURL: 'http://b.tile.stamen.com/toner-lite/7/101/60.png'
});

var map = L.map('map', {
        center: [9.80, 106.32],
        zoom: 11,
    }
);

base.addTo(map);

/*---- Process Onchange ----*/
url_call_station = 'services/data_station.php?loaitram=1=1&quanhuyen=1=1'
view_data_quantrac = new L.GeoJSON.AJAX(url_call_station, {
    pointToLayer: function (feat, latlng) {
        return L.marker(latlng);
    },
})
view_data_quantrac.addTo(map);