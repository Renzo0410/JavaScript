

// Mapa dinámico

navigator.geolocation.getCurrentPosition(function(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    let map = L.map('map_dinamico').setView([latitude, longitude], 17);

    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var marker = L.marker([40.4464363, -3.6569745]).bindTooltip('<a href="https://www.laliga.com/laliga-easports" target="_blank">Oficinas de LaLiga Santander</a>').openTooltip().addTo(map);

    let control = L.Routing.control ({
        waypoints: [
            L.latLng(latitude, longitude),
            L.latLng(40.4464363, -3.6569745),
        ],
        language: 'es',
        show: true
    }).addTo(map);

});
