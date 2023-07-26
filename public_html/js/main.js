$(document).ready(function () {

    function animation() {

        let  windowHeight = $(window).height();
        let scroll = $(window).scrollTop();

        $('.animation').each(function () {

            let position = $(this).offset().top;
            let animationName = $(this).attr('data-animation');
            let delay = $(this).attr('data-delay');


            if (position < windowHeight + scroll - 100) {

                $(this).addClass(animationName);
                $(this).css('animation-delay', delay);

            }

        });


    }


    $(window).scroll(function () {
        animation();
    });


    animation();


    if ($('.counter').length > 0) {
        $('.counter').counterUp({
            time: 2000
        });
    }

    if ($('.product-slider').length > 0) {
        $('.product-slider').owlCarousel({
            responsive: {
                0:{
                    items:1
                },
                400:{
                    items:2,
                    margin:30
                },
                768:{
                     items:3,
                    margin:30 
                },
                992:{
                     items:4,
                    margin:40 
                }
                
            }
            
            
            
        });
    
    
    
    }
        
       
    

});



