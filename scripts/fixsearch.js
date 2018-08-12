/**
 * Created by Administrator on 2017/11/14.
 */

$(document).ready(function(){
    //创建元素
    var $searchtop = $("<div class='searchtop'></div>");
    var $searchtopinner = $("<div class='searchtop-inner'></divclass>");
    var $searchtoplogo = $("<div class='searchlogo'></div>");
    var $searchtopform = $("<div class='searchtopform'></div>");
    var $input = $("<input type='text' value='高保真耳机' class='inputtext'>");
    var $button = $("<button class='btn'>搜索</button>");
    //添加元素
    $searchtopform.append($input);
    $searchtopform.append($button);
    $searchtopinner.append($searchtoplogo);
    $searchtopinner.append($searchtopform);
    $searchtop.append($searchtopinner);
    $(".seckill").after($searchtop);
    //固定定位
    var seckilltop = $(".seckill").offsetTop;//将秒杀板块距离顶部的高度获取过来
    $(window).scroll(function(){
        if(scroll().top >= seckilltop){
            $searchtop.css("display","block");
            $searchtop.className = "searchtop fixed";
        }else{
            $searchtop.css("display","none");
            $searchtop.className = "searchtop";
        }
    });
});