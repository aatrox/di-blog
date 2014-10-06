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