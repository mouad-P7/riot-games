//jquery code
$(document).ready(function(){
    $(window).on('scroll', function(){
        let gap = 100;
        if($(window).scrollTop() > gap){
            $('.home-header').css({'backgroundColor':'var(--myBlack)'});
        }else{
            $('.home-header').css({'backgroundColor':'transparent'});
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


    $('.home-header .dropdown-container').hover(function(){
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


    $('.events-hero-link, .article-link').click(function(){
        alert('This event is over !');
    });


    $('.left-menu-container').click(function(){
        const scrollGap = $(window).scrollTop();
        $('.flex-laptop-menu').css({'top':scrollGap});
        $('.home-header').css({'opacity':'0.98'});
        $('.home-main > *').css({'opacity':'0.4'});
    });
    $('.close-laptop-menu-container, .flex-laptop-menu .left-menu-container, .home-main, .home-footer').click(function(){
        $('.flex-laptop-menu').css({'top':'-100rem'});
        $('.home-header').css({'opacity':'1'});
        $('.home-main > *').css({'opacity':'1'});
    });


    function gameToRender(elementText){
        let class1 = '';
        switch(elementText){
            case 'LEAGUE 0F LEGENDS': 
                class1 = 'league-of-legends';
                break;
            case 'VALORANT': 
                class1 = 'valorant';
                break;
            case 'TEAMFIGHT TACTICS':
                class1 = 'teamfight-tactics';
                break;
            case 'RUINED KING':
                class1 = 'ruined-king';
                break;
            case 'HEXTECH MAYHEM':
                class1 = 'hextech-mayhem';
                break;
            case 'CONV/RGENCE':
                class1 = 'convirgence';
                break;
            case 'SONG OF NUNU':
                class1 = 'song-of-nunu';
                break;
            default:
                class1 = 'no-photo';
                break;
        }
        return class1;
    }
    $('.flex-laptop-menu .dropdown-element').hover(function(){
        $('.flex-laptop-menu .card-render-container *').css({'opacity':'0'});
        $('.flex-laptop-menu .card-render-container').addClass(gameToRender($(this).text()));
    },
    function(){
        $('.flex-laptop-menu .card-render-container *').css({'opacity':'1'});
        $('.flex-laptop-menu .card-render-container').removeClass(gameToRender($(this).text()));
    });
});
