//javascript code
import "./css/style.css";
import "./css/res-style.css";
import "./css/toggle.css";


/*const bgImg = document.querySelectorAll('.events-hero, .article-photo, .flex-games .card, .flex-games .game-logo, .monster-photo, .flex-mobile-menu .card1, .flex-mobile-menu .card2');
const bgImgObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.toggle('lazy');
            bgImgObserver.unobserve(entry.target);
        }
    });
}, {rootMargin:'200px 0px'});
bgImg.forEach(x => {bgImgObserver.observe(x)});*/


//jquery code
let scrollCount = 0;
$(document).ready(function(){


    $(window).scroll(function(){
        scrollCount++;
        if(scrollCount % 10 === 0){
            let gap = 200;
            let scrollHeight = $(window).scrollTop();
            console.log("hi");
            if(scrollHeight > gap){
                $('.home-header').css({'backgroundColor':'var(--myBlack)'});
            }else{
                $('.home-header').css({'backgroundColor':'transparent'});
            }
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

    let navbarDropdown = $(".nav-bar-links .dropdown");
    $('.nav-bar-links .dropdown-container').click(function(){
        if($(this).find('.dropdown').css('display')=='none'){
            navbarDropdown.css({'display':'none'});
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


    $('.left-menu-container').click(function(){
        if($(window).outerWidth() <= 1000){
            $('.flex-mobile-menu').css({'left':'0'});
            $('.home-header').css({'opacity':'0.98'});
            $('.home-main > *').css({'opacity':'0.4'});
        }else{
            const scrollGap = $(window).scrollTop();
            $('.flex-laptop-menu').css({'top':scrollGap});
            $('.home-header').css({'opacity':'0.98'});
            $('.home-main > *').css({'opacity':'0.4'});
        }
    });
    $('.flex-laptop-menu .close-laptop-menu-container, .flex-laptop-menu .left-menu-container, .home-main, .home-footer').click(function(){
        $('.flex-laptop-menu').css({'top':'-100rem'});
        $('.home-header').css({'opacity':'1'});
        $('.home-main > *').css({'opacity':'1'});
    });
    $('.flex-mobile-menu .close-laptop-menu-container, .flex-mobile-menu .left-menu-container, .home-main, .home-footer').click(function(){
        $('.flex-mobile-menu').css({'left':'-47rem'});
        $('.home-header').css({'opacity':'1'});
        $('.home-main > *').css({'opacity':'1'});
    });

    let mobileDropdownContainer = $('.flex-mobile-menu .dropdown-container');
    let mobileDropdown = $('.flex-mobile-menu .dropdown-container .dropdown');
    $('.flex-mobile-menu .dropdown-container').click(function(){
        if($(this).children('.dropdown').css('display')=='none'){
            mobileDropdown.css({'display':'none'});
            mobileDropdownContainer.children('a').css({'backgroundColor':'var(--myLightGray)'});
            mobileDropdownContainer.find('p').css({'color':'var(--myBlack)'});
            mobileDropdownContainer.find('.caret-down-icon').css({'rotate':'unset'});
            $(this).find('.dropdown').css({'display':'block'});
            $(this).find('.dropdown-element').css({'opacity':'1'});
            $(this).children('a').css({'backgroundColor':'var(--myBlack)'});
            $(this).find('p').css({'color':'var(--myWhite)'});
            $(this).find('.caret-down-icon').css({'rotate':'180deg'});
        }else{
            $(this).find('.dropdown').css({'display':'none'});
            $(this).find('.dropdown-element').css({'opacity':'0'});
            $(this).children('a').css({'backgroundColor':'var(--myLightGray)'});
            $(this).find('p').css({'color':'var(--myBlack)'});
            $(this).find('.caret-down-icon').css({'rotate':'unset'});
        }
    });


    function gameToRender(elementText){
        let alt1 = '';
        switch(elementText){
            case 'LEAGUE 0F LEGENDS': 
                alt1 = 'league-of-legends';
                break;
            case 'VALORANT': 
                alt1 = 'valorant';
                break;
            case 'TEAMFIGHT TACTICS':
                alt1 = 'teamfight-tactics';
                break;
            case 'RUINED KING':
                alt1 = 'ruined-king';
                break;
            case 'HEXTECH MAYHEM':
                alt1 = 'hextech-mayhem';
                break;
            case 'CONV/RGENCE':
                alt1 = 'convirgence';
                break;
            case 'SONG OF NUNU':
                alt1 = 'song-of-nunu';
                break;
            case 'LEGENDS OF RUNETERRA':
                alt1 = 'legends-of-runeterra';
                break;
            case 'LOL: WILD RIFT':
                alt1 = 'league-of-legends-wr';
                break;
            default:
                alt1 = 'no-photo';
                break;
        }
        return alt1;
    }
    $('.flex-laptop-menu .dropdown-element').hover(function(){
        let imgAlt = String(gameToRender($(this).text()));
        $('.flex-laptop-menu .card-render *').css({'opacity':'0'});
        $("img[alt='"+imgAlt+"']").css({'display':'inline','z-index':'2'});
        $(this).data('imgAlt', imgAlt);
    }, function(){
        $('.flex-laptop-menu .card-render *').css({'opacity':'1'});
        $("img[alt='"+$(this).data('imgAlt')+"']").css({'display':'none','z-index':'0'});
    });

    
});




