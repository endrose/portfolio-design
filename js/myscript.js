$(document).ready(function(){
//    $('body').on('contextmenu', function(){
//         return false;
//     });


jQuery(document).ready(function($) {
        // NAVBAR ON SCROLL
        $(window).on('scroll', function(){
            if ($(this).scrollTop() > 100) {
                $('.navbar').addClass('nav-custom');
            }else{
                $('.navbar').removeClass('nav-custom');
        
            }
        });
        // NAVBAR ON CLICK
        $('.nav-link').on('click', function(){
            $('.nav-link').removeClass('active');
            $(this).addClass('active');
        })
        // NAVLINK PAGE SCROLL
        $('.page-scroll').on('click', function(e){
           let attributeHref = $(this).attr('href');
           let href = $(attributeHref);

           $('html,body').animate({
            scrollTop: href.offset().top - 100
           }, 1250, 'easeInOutExpo');

            e.preventDefault();
        })
        // SCROLL TO TOP
        $('#back-up').on('click', function(){
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        })
        // OWL-CAROUSEL
        $('.owl-carousel').owlCarousel({
            autoplay: true,
        });
        // LIGHTBOX
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true
          });
        // WOW
        wow = new WOW({

        })
        wow.init();
        // SLACK
        // $('.alert-message').hide();

        // $('#btnSent').on('click', function(e){
        //     const webHook = "https://hooks.slack.com/services/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";
        //     const textMessage = $('.message').val();
        //     const textEmail = $('.email').val();

        //     var ajaxRequest;
        //     ajaxRequest=  $.ajax({
        //         url: webHook,
        //         type: "POST",
        //         data: 'payload=' + JSON.stringify({
        //             "text" : 'From : ' + textEmail + ' Message : ' + textMessage
        //         }),
        //         dataType: 'json'
        //     });

        //     if(ajaxRequest === ''){
        //         $('.message-info').html('Data tidak boleh kosong');
        //     }

        //     $('.email').val('');
        //     $('.message').val('');
        //     $('.alert-message').show();

        //     e.preventDefault();
        // }); 
        // 
        // $('body').off('click');
        
    }, "use strict");
    
});
// VANILLA JS



