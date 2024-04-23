$(window).on('load', function() {  
    $('#status').fadeOut(); 
    $('#preloader').delay(700).fadeOut('slow');  
    $('body').delay(700).css({'overflow':'visible'});
  })

$(document).ready(function(){
    $('.q').click(function(){
        $(this).next('.a').slideToggle();
        $(".a").not($(this).next('.a')).slideUp();
        $(this).children().eq(1).toggleClass('rotate');
        $(".rotate").not($(this).children().eq(1)).toggleClass('rotate');
    });
});
