google.maps.event.addDomListener(window, 'load', () => {
  const styles = [
    { "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }] },
    { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] },
    { "elementType": "labels.text.fill", "stylers": [{ "color": "#616161" }] },
    { "elementType": "labels.text.stroke", "stylers": [{ "color": "#f5f5f5" }] },
    { "featureType": "administrative.land_parcel", "elementType": "labels.text.fill", "stylers": [{ "color": "#bdbdbd" }] },
    { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#eeeeee" }] },
    { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#757575" }] },
    { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#e5e5e5" }] },
    { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{ "color": "#9e9e9e" }] },
    { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }] },
    { "featureType": "road.arterial", "elementType": "labels.text.fill", "stylers": [{ "color": "#757575" }] },
    { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#dadada" }] },
    { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{ "color": "#616161" }] },
    { "featureType": "road.local", "elementType": "labels.text.fill", "stylers": [{ "color": "#9e9e9e" }] },
    { "featureType": "transit.line", "elementType": "geometry", "stylers": [{ "color": "#e5e5e5" }] },
    { "featureType": "transit.station", "elementType": "geometry", "stylers": [{ "color": "#eeeeee" }] },
    { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#c9c9c9" }] },
    { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#9e9e9e" }] }
  ]

  const map = new google.maps.Map(document.getElementById('map'))
  const service = new google.maps.places.PlacesService(map)

  service.getDetails({ placeId: venue.placeId }, (place, status) => {
    map.setOptions({
      styles,
      center: place.geometry.location,
      disableDefaultUI: false,
      disableDoubleClickZoom: true,
      draggable: true,
      zoom: 18,
      scrollwheel: false,
      rotateControl: true,
      mapTypeId: 'satellite'
    })

    if (status == google.maps.places.PlacesServiceStatus.OK) {
      let marker = new google.maps.Marker({
        map,
        position: place.geometry.location
      })

      var info = new google.maps.InfoWindow({
        content: `<div class="map-content">
          <p class="name">${venue.name}</p>
          <p>${place.adr_address}</p>
          <hr/>
          <a target="_blank" href="https://www.google.com/maps/dir/?api=1&destination_place_id=${place.id}">Directions</div>`
      })

      marker.addListener('click', () => info.open(map, marker))
    }
  })
})
