L.mapbox.accessToken = 'pk.eyJ1IjoiZGlkaW1hcCIsImEiOiJ1OWN4RGhBIn0.FghvEANjBxfq4PYBzb74cg';
var map = L.mapbox.map('map', 'examples.map-i86nkdio')
    .setView([29.7, -95.40], 11);

L.mapbox.featureLayer({
	type: 'Feature',
	geometry: {
		type: 'Point',
		coordinates: [
		  -95.350214,
		  29.746756	  
		]
	},
	properties: {
		title:'start houston',
		description:'1121 Delano St Houston, TX 77003',
		'marker-size': 'medium',
		'marker-color': '#ff8888',
		'marker-symbol': 'star'
	}
}).addTo(map);

L.mapbox.featureLayer({
	type: 'Feature',
	geometry: {
		type: 'Point',
		coordinates: [
		  -95.442788,
		  29.687798	  
		]
	},
	properties: {
		title:'home',
		description:'4045 linkwood Dr Houston, TX 770025',
		'marker-size': 'medium',
		'marker-color': '#ff8888',
		'marker-symbol': 'building'
	}
}).addTo(map);