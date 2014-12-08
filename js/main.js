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

  $('#memiddle #container.js-masonry .item').on('click', function(){
    var i = $('.item').index(this);
    $('.carousel').carousel(i);
  })
  
})


