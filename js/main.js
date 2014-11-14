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
})


