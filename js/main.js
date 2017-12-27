var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    autoHeight:false
});
$(document).ready(function(){
    $(".timeline-event").mouseenter(function(){
        $(this).siblings(".timeline-point").css({"background-color":"white", "color": "#e5cf9a",
    " border-radius": "2px",
    "transition": "background 0.5s ease-in-out, border 0.3s ease-in-out, border 0.5s ease-in-out"});
    });
    $(".timeline-event").mouseleave(function(){
       $(this).siblings(".timeline-point").css({"background-color":"#e5cf9a", "color": "#e5cf9a",
    " border-radius": "0px",
    "transition": "background 0.5s ease-in-out, border 0.3s ease-in-out, border 0.5s ease-in-out"});
    });
    
});
/*video carousal starts*/

/*video carousal ends*/
/* Demo purposes only */
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);


