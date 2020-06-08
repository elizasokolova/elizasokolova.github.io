$(function() {
    
    /* Fixed Header */
    
        let header = $("#header");
        let intro = $("#intro");
        let introH = intro.height();
        let scrollPos = $(window).scrollTop();

        $(window).on("scroll load", function() {
            scrollPos = $(this).scrollTop();

            if ( scrollPos > 990 ) {
                header.addClass("fixed");
            } else {
                header.removeClass("fixed");
            }
        
        });
    });