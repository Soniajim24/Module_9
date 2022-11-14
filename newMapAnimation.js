// This array contains the coordinates for all bus stops between home and school
const busStops = [
    [2.1329552116463524, 41.36965891867919],
    [2.128480415341459, 41.38235252528101],
    [2.1275392822804515, 41.385292307361176],
    [2.128141459089243, 41.38812609611691],
    [2.128030793028384, 41.38947807638776],
    [2.1292311678486566, 41.39179406018575],
  ];
  
  // TODO: add your own access token
  mapboxgl.accessToken =
    'pk.eyJ1IjoidGVzdHVzZXIxMDAwIiwiYSI6ImNraDkzZ2pkMzAzMHoycnBmMXpvZ3UwZnMifQ.jAE4YsPeAJv50VK92NSpOQ';
  
  // TODO: create the map object using mapboxgl.map() function
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [2.1275392822804515, 41.385292307361176],
    zoom: 13,
  });
  
  // TODO: add a marker to the map
  let marker = new mapboxgl.Marker().setLngLat([2.1329552116463524, 41.36965891867919]).addTo(map);

  // TODO: add school to map

  let markerTwo = new mapboxgl.Marker().setLngLat([2.1279216267015126, 41.3951217112486]).addTo(map)

  // counter here represents the index of the current bus stop
  let counter = 0;
  function move() {
    // TODO: move the marker on the map every 1500ms. Use the function marker.setLngLat() to update the marker coordinates
    // Use counter to access bus stops in the array busStops
  
    setTimeout(() => {
      if (counter >= busStops.length) return;
      marker.setLngLat(busStops[counter]);
      counter++;
      move();
    }, 1500);
  }
  
  // Do not edit code past this point
  if (typeof module !== 'undefined') {
    module.exports = { move, counter, marker, busStops, markerTwo, markerThree, };
  }
  
