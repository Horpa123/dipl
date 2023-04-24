$(document).scroll(function(){
    var scroll = $(window).scrollTop();
    var amount = 0-(scroll*0.4);
    if (amount < 10){
        $('.beseda').css({bottom:amount+"px"});
    }
})