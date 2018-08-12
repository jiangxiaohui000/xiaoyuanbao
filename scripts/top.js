/**
 * Created by Administrator on 2017/11/14.
 */


$(function(){
        $(window).scroll(function(){
            if ($(window).scrollTop()>0){
                $("#top").fadeIn(800);
            }
            else
            {
                $("#top").fadeOut(800);
            }
        });

        $("#top").click(function(){
            if ($('html').scrollTop()) {
                $('html').animate({ scrollTop: 0 }, 1000);
                return false;
            }else{
                $('body').animate({ scrollTop: 0 }, 1000);
                return false;
            }
        });
});