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

var polyline = L.polyline([]).addTo(map);
var waypoints = [[-95.3439463, 29.7481023], [-95.3439463, 29.7481023], [-95.3505676, 29.7462749 ], [-95.3505676, 29.7462749 ], [-95.3506688, 29.7462444 ], [-95.3506337, 29.7462595 ], [-95.3506657, 29.7462669 ], [-95.3507029, 29.7462172 ], [-95.3507029, 29.7462172 ], [-95.3506745, 29.7462262 ], [-95.3443197, 29.7478217 ], [-95.3505176, 29.7462748 ], [-95.4372412, 29.6923866 ], [-95.4372622, 29.6923139 ], [-95.4375307, 29.6913836 ], [-95.4415693, 29.686428 ]]
var wpAdded = 0;

add();

function add(){
	
  polyline.addLatLng(L.latLng(waypoints[wpAdded][0], waypoints[wpAdded][1]));
  map.setView([waypoints[wpAdded][0], waypoints[wpAdded][1]], 11);

	if (++wpAdded < waypoints.length) window.setTimeout(add, 100);

}