$(".snstab li a").click(
    function(){
        $(".snstab li a").removeClass("on");
        $(this).addClass("on");
        let data = $(this).attr("data");
        $(".sns_gallery").hide();
        $("."+data).css("display","flex");
        

    }
);
$(".burger").click(
    function(){
        $(this).toggleClass("on");

        
    }
);
$(".burger").click(
    function(){
        $(".mnav").stop().slideDown();
    }
);
$(".burger on").click(
    function(){
        $(".mnav").stop().slideUp();
    }
);
