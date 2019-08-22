$(document).ready(function() {

    $('#profile').click(function() {
        $('html,body').animate({ scrollTop: $('.profile').offset().top }, 800);
    });

    $('#resume').click(function() {
        $('html,body').animate({ scrollTop: $('.resume').offset().top }, 800);
    });
    $('#skills').click(function() {
        $('html,body').animate({ scrollTop: $('.skills').offset().top }, 800);
    });
    $('#portfolio').click(function() {
        $('html,body').animate({ scrollTop: $('.portfolio').offset().top }, 800);
    });
    $('#contact').click(function() {
        $('html,body').animate({ scrollTop: $('.contact').offset().top }, 800);
    });

    $('#poster').click(function() {
        $('html,body').animate({ scrollTop: $('.poster').offset().top }, 800);
    });
    $('#logo').click(function() {
        $('html,body').animate({ scrollTop: $('.logo').offset().top }, 800);
    });
    $('#video').click(function() {
        $('html,body').animate({ scrollTop: $('.video').offset().top }, 800);
    });


    window.onload = function() {
        var box = document.getElementsByClassName("posterbox");
        for (var i = 0; i < box.length; i++) {

            box[i].addEventListener("mouseover", function() {
                this.style.boxShadow = "0px 20px 20px -20px #4A4A4A";
                this.style.transform = "translate(0px,-5px)";
            });
            box[i].addEventListener("mouseout", function() {
                this.style.boxShadow = "none";
                this.style.transform = "none";
            });
        }
    };


    $(window).scroll(function() {

        if ($(window).scrollTop() >= $('.resume').offset().top) {
            $('.resumemenu').slideDown(1000);
            $('.resumetext').slideDown(1500);
            
        }
    });




});