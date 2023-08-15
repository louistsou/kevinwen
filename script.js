// script.js
function initMap() {
    const center = { lat: 33.8688, lng: 151.2093 }; // Set your preferred center coordinates
    const map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 12 // Set the initial zoom level
    });

    const marker = new google.maps.Marker({
        position: center,
        map: map,
        title: 'Marker Title' // Set the marker title
    });
}