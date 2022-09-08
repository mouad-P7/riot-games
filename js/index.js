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
        $('.mobile-nav-bar').css({'right':'0'});
        $('.home-header').css({'opacity':'0.98'});
        $('.home-main > *').css({'opacity':'0.4'});
    });
    
    $('.close-menu-tablet-container').click(function(){
        $('.mobile-nav-bar').css({'right':'-47rem'});
        $('.home-header').css({'opacity':'1'});
        $('.home-main > *').css({'opacity':'1'});
    });

    $('.dropdown-container').hover(function(){
        $(this).find('.dropdown').css({'opacity':'1', 'pointer-events':'auto'});
    }, function(){
        $(this).find('.dropdown').css({'opacity':'0', 'pointer-events':'none'});
    });
});
