$(document).ready(function(){
  // Start Show-Hide-Toggole
  $('.hide').click(function(){
    $('h2').hide('slow');
  });


  $('.show').click(function(){
    $('h2').show(2000);
  });



  $('.toggle').click(function(){
    $('h2').toggle('slow');
  });
  // End Show-Hide-Toggole

 // Start Slide
  $('.btn').click(function(){
    $('.lorem').slideDown();
  });


  $('.btn2').click(function(){
    $('.lorem2').slideUp();
  });


  $('.btn3').click(function(){
    $('.lorem3').slideToggle(1000);
  });
  // End Slide

  // Start Animation
  $('.ani').click(function(){
    var hasan = $('.animate');

    hasan.animate({height: "420px",opacity: "0.3"}, 3000);
    hasan.animate({width: "1060px",opacity: "0.7"}, 3000);
    hasan.animate({height: "100px", width: "100px"}, 3000);

  });
  // End Animation

  // Start Use Css In Jquery
  $(".css").click(function(){
    $(".p").css({
      "background-color" : "black",
      "color"            : "White",
      "font-size"        : "50px",
      "font-style"       : "italic"
    });
  });
  // End Use Css In Jquery


//use on Method For Apply Event.
$("p").on({
  click: function(){
    $(this).css("background-color","red");
  },

  mouseenter: function(){
    $(this).css("background-color","black");
    $(this).css("color","white");
  },

});

//$("Button").click(function(){
    //$("p").append("By RK hasan");
  //});



  //$("Button").click(function(){
    //$("p").prepend("By RK hasan.");
  //});


  //$("Button").click(function(){
    //$("p").before("By RK hasan.");
  //});


  $("Button").click(function(){
    $("p").after("By RK hasan.");
  });

  // Add Remove Class 

  //$("button").click(function(){
    //$("p").addClass("show");
  //});


  $(".cencel").click(function(){
    $("p").removeClass("hide");
  });

  // Remove Function
  $("button").click(function(){
    $("h2").remove();
  });

  // Stop Function
  $('button').click(function(){
    $('.text').stop();
  });

  //Set Text Function

  $(".btn").click(function(){
    $(".text").text("Thank you");
  });

  //Set Html Function

  $(".btn1").click(function(){
    $(".text1").html("<h1>Bangladeh Is Beutifull Cuntry.RK Hasan</h1>");
  });

  //Set Value Function
  $(".btn2").click(function(){
    $(".text2").val("thanks");
  });

  // Set Attribute Function

  $(".btn3").click(function(){
    $(".text3").attr("href","bangladesh.com");
  });


  //for any box show in Your Display Apply FadeIn
  
  $('.hide').click(function(){
    $('.box1').fadeIn(1000);
    $('.box2').fadeIn(2000);
    $('.box3').fadeIn(3000);
  });

//for any box show in Your Display Apply FadeIn
  
  $('.show').click(function(){
    $('.box4').fadeOut(1000);
    $('.box5').fadeOut(2000);
    $('.box6').fadeOut(3000);
  });

//for any box show And Hide in Your Display Apply FadeToggle

  $('.toggle').click(function(){
    $('.box7').fadeToggle(1000);
    $('.box8').fadeToggle(2000);
    $('.box9').fadeToggle(3000);
  });

//for any box opacity in Your Display Apply fadeTo
   
   $('.fadeto').click(function(){
    $('.box10').fadeTo(1000, 0.5);
    $('.box11').fadeTo(2000, 0.5);
    $('.box12').fadeTo(3000, 0.5);
  });


});