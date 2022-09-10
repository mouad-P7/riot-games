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


    $('.nav-bar-links .dropdown-container').click(function(){
        if($(this).find('.dropdown').css('display')=='none'){
            $(this).find('.dropdown').css({'display':'flex'});
        }else{
            $(this).find('.dropdown').css({'display':'none'});
        }
    });


    $('.dropdown-container').hover(function(){
        $(this).find('.dropdown').css({'opacity':'1', 'pointer-events':'auto'});
    }, function(){
        $(this).find('.dropdown').css({'opacity':'0', 'pointer-events':'none'});
    });


    $('.cookie').click(function(){
        $('.cookie-nav-bar').css({'right':'0'});
        $('.home-header').css({'opacity':'0.98'});
        $('.home-main > *').css({'opacity':'0.4'});
    });
    $('.xmark-container, .cookie-save-button').click(function(){
        $('.cookie-nav-bar').css({'right':'-47rem'});
        $('.home-header').css({'opacity':'1'});
        $('.home-main > *').css({'opacity':'1'});
    });


    $('.preference').click(function(){
        if($(this).find('.toggle-button').css('translate')=='3px'){
            $(this).find('.toggle-container').css({'borderColor':'#00e68a'});
            $(this).find('.toggle-button').css({'translate':'22px'});
            $(this).find('.toggle-bg').css({'backgroundColor':'#00e68a'});
        }else{
            $(this).find('.toggle-container').css({'borderColor':'var(--myGray)'});
            $(this).find('.toggle-button').css({'translate':'3px'});
            $(this).find('.toggle-bg').css({'backgroundColor':'var(--myGray)'});
        }
    });


    $('.view-cookies').click(function(){
        if($(this).parent().find('.cookie-info').css('display')=='none'){
            $(this).parent().find('.cookie-info').css({'display':'flex'});
            $(this).parent().parent().find('.cookie-break').css({'display':'none'});
        }else{
            $(this).parent().find('.cookie-info').css({'display':'none'});
            $(this).parent().parent().find('.cookie-break').css({'display':'block'});
        }
    });


    $('.left-menu-container').click(function(){
        alert('This button is currently not working !');});
    $('.events-hero-link, .article-link').click(function(){
        alert('This event is over !');});
});
