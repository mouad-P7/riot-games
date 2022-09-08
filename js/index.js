//jquery code
$(document).ready(function(){
    $(window).bind('scroll', function(){
        let gap = 100;
        if($(window).scrollTop() > gap){
            $('.home-header').addClass('scroll-down');
        }else{
            $('.home-header').removeClass('scroll-down');
        }
    });

    $('.right-menu-tablet-container').click(function(){
        $('.mobile-nav-bar').addClass('visible-nav-bar');
        $('.home-body').css({'opacity':'0.7'});
    });
    
    $('.close-menu-tablet-container').click(function(){
        $('.mobile-nav-bar').removeClass('visible-nav-bar');
        $('.home-body').css({'opacity':'1'});
    });

    $('.dropdown-container').hover(function(){
        $(this).find('.dropdown').css({'opacity':'1', 'pointer-events':'auto'});
    }, function(){
        $(this).find('.dropdown').css({'opacity':'0', 'pointer-events':'none'});
    });
});
