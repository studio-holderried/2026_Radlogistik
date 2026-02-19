<!-- import Mapbox GL JS and its CSS file -->
<script src='https://api.mapbox.com/mapbox-gl-js/v3.18.1/mapbox-gl.js'></script>
<link href='https://api.mapbox.com/mapbox-gl-js/v3.18.1/mapbox-gl.css' rel='stylesheet' />

<!-- add a container element for the map -->
<div id="map-container" style="position: absolute; height: 100%; width: 100%"></div>

<script>
  // your Mapbox access token
  mapboxgl.accessToken = 'pk.eyJ1Ijoic3R1ZGlvLWhvbGRlcnJpZWQiLCJhIjoiY21qY3hzaDNqMDBrZzNncXdtOWxmMGVhbiJ9.7RvlHGQXGBVyhdBZtGCnDw';

  // initialize the map
  const map = new mapboxgl.Map({
    container: 'map-container', // container ID
    style: 'mapbox://styles/studio-holderried/cmlse0dpq000101se9pr73dfi/draft', //'mapbox://styles/mapbox/standard', // style URL
    center: [10, 50], // starting position [lng, lat]
    zoom: 5, // starting zoom
    doubleClickZoom: true,
    config: {
      basemap: {
        //theme: 'monochrome', // use the monochrome basemap theme
        showPointOfInterestLabels: false // hide point of interest labels
      }
    }
  });

  // disable scroll zoom so the map won't zoom as the user scrolls down the page
    map.scrollZoom.disable();
    map.addControl(new mapboxgl.NavigationControl());   

</script>



<!-- map.on('load', () => {
  map.addSource('random_test_points_4326-1mxp8b', {
     type: 'vector',
     url: 'mapbox://studio-holderried.1b4gp9of'
      });
    map.addLayer({
    'id': 'test',
    'type': 'circle',
    'source': 'random_test_points_4326-1mxp8b',
    'source-layer': 'random_test_points_4326-1mxp8b'
});
} -->