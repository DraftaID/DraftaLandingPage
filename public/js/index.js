var a = $(".about").offset().top;

$(document).scroll(function(){
    if($(this).scrollTop() > a)
    {   
       $('nav').css({"background":"linear-gradient(0deg, #7CAFA2, #7CAFA2)", "transition":"all 0.5s"});
       $('nav ul li a').css({"color":"#fff", "transition":"0.5s"});
       $('nav img').attr("src","images/whiteDrafta.png");
       $('nav ul li .login').css({"background": "#FFD436"});
    }
    else {
        $('nav').css({"background":"white", "transition":"all 0.5s"});
        $('nav ul li a').css({"color":"#5C9D8D"});
        $('nav ul li .login').css({"color":"white"});
        $('nav img').attr("src","images/draftaLogo.png");
        $('nav img').css({"width":"93px", "height":"50px"});
        $('nav ul li .login').css({"background": "#5C9D8D"});   
    }
});