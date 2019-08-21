$(document).ready(function() {

$('#profile').click(function(){
        $('html,body').animate({scrollTop:$('.profile').offset().top},800);
    });

$('#resume').click(function(){
        $('html,body').animate({scrollTop:$('.resume').offset().top},800);
    });
$('#skills').click(function(){
        $('html,body').animate({scrollTop:$('.skills').offset().top},800);
    });
$('#portfolio').click(function(){
        $('html,body').animate({scrollTop:$('.portfolio').offset().top},800);
    });
$('#contact').click(function(){
        $('html,body').animate({scrollTop:$('.contact').offset().top},800);
    });

$('#poster').click(function(){
        $('html,body').animate({scrollTop:$('.poster').offset().top},800);
    });
$('#logo').click(function(){
        $('html,body').animate({scrollTop:$('.logo').offset().top},800);
    });
$('#video').click(function(){
        $('html,body').animate({scrollTop:$('.video').offset().top},800);
    });


$(".toogler").click(function(){
  $(".navbar").toggle();
});










});