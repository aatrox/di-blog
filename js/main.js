$(document).ready(function(){
 


})

$(function(){
  $('.navbar a.dropdown-toggle').on('click', function(e) {
    if (!$(this).parent().parent().hasClass('nav')) {
      $(this).parent().siblings().removeClass('open');
      var item = $(this).parent();
      var heightParent = item.index()*26;
      var widthParent = parseInt($(this).parent().parent().css('width')) - 10;
      $(this).parent().addClass('open');
      $(this).next().css('top', heightParent + 'px');
      $(this).next().css('left', widthParent + 'px');
      return false;
    }
  });
});


L.mapbox.accessToken = 'pk.eyJ1IjoiZGlkaW1hcCIsImEiOiJ1OWN4RGhBIn0.FghvEANjBxfq4PYBzb74cg';
var map = L.mapbox.map('map', 'examples.map-i86nkdio')
    .setView([29.7, -95.55], 11);

L.mapbox.featureLayer({
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [
      -95.551,
      29.705  
    ]
  },
  properties: {
    title:'Grace Computer',
    description:'6918 Corporate Dr. A16 Houston, TX 77036',
    'marker-size': 'medium',
    'marker-color': '#ff8888',
    'marker-symbol': 'star'
  }
}).addTo(map);