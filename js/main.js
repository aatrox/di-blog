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


  // this is the js object, it's ok to just put it here
  // but when it grows to dozens, its better to put it aside to a json file
  var myArticles = [
    {
      title: "Halloween",
      date: "By Di Wu <i class='fa fa-clock-o'></i> 10/31/2014",
      image: "<img id='atcimg' src='images/halloween.jpeg'>",
      content:  [   
        {
          ptitle: "Parking",
          paragraph: "I went to china town. today is holloween. everyone wears iteresting costumes. restaurants are crowded with people. parking lot is full of cars. it will take quite a long time for you to find a parking space. I choose to wait for the leaving car. after 15 mins i manage to park my car. there are 2 nightclubs here. i go to the one with more chinese people."
        },
        {
          ptitle: "Entering the club", 
          paragraph: "i enter in to the club. the club is full of smorke and people with costumes. some people are dancing in front of the stage. there are 2 girls with cat costums at bar. they are so cute. but i cannot have a clear view of their face. their face are covered with ink. they were companied by 2 men. So i decided not to talk with them."
        },
        {
          ptitle: "Atmosphere",
          paragraph: "I took a tour inside this club. The atmosphere is very good. Band on the stage were playing exciting music. People with costumes were dancing wildly. I saw super man, witch, maid, nurse, vampire, cow boy. Anything you can imagine, people cosplay it." 
        },
        {
          ptitle: "Restroom",
          paragraph: "After a few glasses of bear. I went into the restroom. The restrooms are separated individual room, not like the common men's and women's rooms. The moment I got out if the restroom. I saw the cute cat girls were washing their hands at the sink. I figured it might be a good chance to talk. But all of a sudden, the guy who was with them showed up and whispered to one of the girls. As the result, they all left together. Well, i guess our lines of fate do not have intersections."
        }
      ]
    },
    {
      title: "ChicagoTour",
      date: "By Di Wu <i class='fa fa-clock-o'></i> 11/15/2014",
      image: "<img id='atcimg' src='images/bb.jpg'>",
      content:  [   
        {
          ptitle: "Surprise",
          paragraph: "i got a phone call form my high school friend."
        },
        {
          ptitle: "Meet", 
          paragraph: "we met at the big bean."
        },
        {
          ptitle: "Hang out",
          paragraph: "we hang out together for a whole day." 
        },
        {
          ptitle: "Goodbye",
          paragraph: "we had a big hug and said goodbye "
        }
      ]
    },
    {
      title: "rtheytutu",
      content: "Today I went to club"
    }

  ]
  
  if ($(location).attr('search') != null ){
    var atcv = $(location).attr('search');
    var t = atcv.split('=');
    var at = t[1];
    $.each(myArticles, function(index, value){
      if (at == value.title){
        $('head title').append(at);
        $('#atch1').append(at);
        $('#atchp').append(value.date);
        $('#atcmain').append(value.image);
        var b = '';
        $.each(value.content, function(index, value1){
          b= b + '<h3>' + value1.ptitle + '</h3>' + '<p>' + value1.paragraph + '</p>'
        })
        console.log(b);
        $('#atcmain').append(b);
        $('#atcmain').append('<br>');
        $('#atcmain').append('<p>Article: Di Wu</p>');
        $('#atcmain').append('<p>Editor: Di Wu</p>');
              
      }
    })
  }

  $.each(myArticles, function(articel){
    // insert title to the index, with id or link
  })

  // Some if statement to determine, if I am at the detail blog page
  // if yes, check the params or url, find the article title or id
  // using that id or title, find the corrospondind content
  // insert content into the main content section


  
  
})


