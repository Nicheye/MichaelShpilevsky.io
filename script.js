$(document).ready(function(){
    const slider = $("#slider").owlCarousel({
        loop:true,
        margin:10,
        dots:false,

      
        
        nav:true,
      
        autoplay:true,
      autoplayTimeout:3000,
      
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
});
$("#dark__mode").click(function(){
  $("*").toggleClass("dark");
});

