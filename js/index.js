//jquery code
$(document).ready(function(){
    $(window).bind('scroll', function(){
        let gap = 100;
        if($(window).scrollTop() > gap){
            $('.home-header').addClass('scroll-down');
        } else{
            $('.home-header').removeClass('scroll-down');
        }
    });
});