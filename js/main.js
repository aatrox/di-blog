$(document).ready(function(){
  $('#cssmenu ul ul li').on('mouseover', function(){
  	$(this).find('i').show();
  })
  $('#cssmenu ul ul li').on('mouseout', function(){
  	$(this).find('i').hide();
  })

  $('#cssmenu ul ul li').on('click', function(){
  	$(this).siblings().removeClass('clickactive');
  	$(this).addClass('clickactive');
  	$(this).closest('ul').closest('li').siblings().removeClass('active');
    $(this).closest('ul').closest('li').siblings().find('ul').find('li').removeClass('clickactive');
  	$(this).closest('ul').closest('li').addClass('active');
  })

  $('#midbtndiv').on('click', function(){
  	$('.mid2nd').show();
  	$(this).hide();
  })

  $('#lastbtn').on('click', function(){
  	$(this).hide();
  	$('#lastp').show();
  })

  $('#middle p').each(function(){
    var str = $(this).html();
    var n = str.length;
    if (n>130){
      var newp = str.substring(0, 130) + '...';
      $(this).html(newp);
    }
  })

  $('#left-menu').sidr({
    name: 'left-sidr'
  });

  $('#right-menu').sidr({
    name: 'right-sidr',
    side: 'right'
  });

  // jcarousel
  $('.jcarousel')
    .on('jcarousel:create jcarousel:reload', function() {
        var element = $(this),
            width = element.innerWidth();
        if (width > 900) {
            width = width / 3;
        } else if (width > 600) {
            width = width / 2;
        }
        // This shows 1 item at a time.
        // Divide `width` to the number of items you want to display,
        // eg. `width = width / 3` to display 3 items at a time.
        element.jcarousel('items').css('width', width + 'px');
    })
    .jcarousel({
        // Your configurations options
    });
})


