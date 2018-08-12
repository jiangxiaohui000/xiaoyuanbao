/**
 * Created by Administrator on 2017/11/13.
 */

//各省市分类
$(document).ready(function(){
    //创建元素
    var $divhide = $("<div class='area-hide'></div>");
    var $span1 = $("<span class='areaitem'>北京</span>");
    var $span2 = $("<span class='areaitem'>上海</span>");
    var $span3 = $("<span class='areaitem'>天津</span>");
    var $span4 = $("<span class='areaitem'>重庆</span>");
    var $span5 = $("<span class='areaitem'>山东</span>");
    var $span6 = $("<span class='areaitem'>江苏</span>");
    var $span7 = $("<span class='areaitem'>浙江</span>");
    var $span8 = $("<span class='areaitem'>广东</span>");
    var $span9 = $("<span class='areaitem'>福建</span>");
    var $span10 = $("<span class='areaitem'>河北</span>");
    var $span11 = $("<span class='areaitem'>河南</span>");
    var $span12 = $("<span class='areaitem'>甘肃</span>");
    var $span13 = $("<span class='areaitem'>湖北</span>");
    var $span14 = $("<span class='areaitem'>湖南</span>");
    var $span15 = $("<span class='areaitem'>云南</span>");
    //添加节点
    $($divhide).append($span1);
    $($divhide).append($span2);
    $($divhide).append($span3);
    $($divhide).append($span4);
    $($divhide).append($span5);
    $($divhide).append($span6);
    $($divhide).append($span7);
    $($divhide).append($span8);
    $($divhide).append($span9);
    $($divhide).append($span10);
    $($divhide).append($span11);
    $($divhide).append($span12);
    $($divhide).append($span13);
    $($divhide).append($span14);
    $($divhide).append($span15);
    $(".Li-area").append($divhide);

    //鼠标移入移出
    $(".Li-area").mouseenter(function(){
        $(".area-hide").css({"display":"block","background-color":"#fff","color":"#f22e00"});
        $(".area").css("background-color","#fff");
    });
    $(".Li-area").mouseleave(function(){
        $(".area-hide").css("display","none");
        $(".area").css("background-color"," #f5f5f5");
    });
    $(".areaitem").mouseenter(function(){
        $(this).css({"background-color":"#eee","color":"#f22e00"});
    });
    $(".areaitem").mouseleave(function(){
        $(this).css({"background-color":"#fff","color":"#999"});
    });
    $(".areaitem").bind("click",function(){
        var $areaitemtext = $(this).text();
        $(".headerarea").text($areaitemtext);
    })
});


//卖家中心
$(document).ready(function(){
    //创建属性节点
    var $span_help = $("<span class='header-main-r-help'>帮助中心</span>");
    var $span_server = $("<span class='header-main-r-server'>售后服务</span>");
    var $span_learn = $("<span class='header-main-r-learn'>学习中心</span>");
    var $span_suggest = $("<span class='header-main-r-suggest'>意见建议</span>");
    var $a_sellercenter = $("<a href='javascript:;'></a>");
    var $div_sellercenter = $("<div class='menu-hd-slide' id='menuHdSlide'></div>");
    //插入节点
    $a_sellercenter.append($span_help);
    $a_sellercenter.append($span_server);
    $a_sellercenter.append($span_learn);
    $a_sellercenter.append($span_suggest);
    $div_sellercenter.append($a_sellercenter);
    $("#sellerCenter").append($div_sellercenter);
    //当鼠标经过或者离开“卖家中心”这个盒子，创建的盒子显示或者隐藏
    $("#sellerCenter").mouseenter(function(){
        $("#menuHdSlide").css({"display":"block","background-color":"#fff","color":"#f22e00"});
        $("#sellerCenter").css("background-color","#fff");
    });
    $("#sellerCenter").mouseleave(function(){
        $("#menuHdSlide").css("display","none");
        $("#sellerCenter").css("background-color"," #f5f5f5");
    });
    $(".header-main-r-help").mouseenter(function(){
        $(this).css({"font-size":"12px","color":"#f22e00"});
    });
    $(".header-main-r-help").mouseleave(function(){
        $(this).css({"font-size":"10px","color":"#999"});
    });
    $(".header-main-r-server").mouseenter(function(){
        $(this).css({"font-size":"12px","color":"#f22e00"});
    });
    $(".header-main-r-server").mouseleave(function(){
        $(this).css({"font-size":"10px","color":"#999"});
    });
    $(".header-main-r-learn").mouseenter(function(){
        $(this).css({"font-size":"12px","color":"#f22e00"});
    });
    $(".header-main-r-learn").mouseleave(function(){
        $(this).css({"font-size":"10px","color":"#999"});
    });
    $(".header-main-r-suggest").mouseenter(function(){
        $(this).css({"font-size":"12px","color":"#f22e00"});
    });
    $(".header-main-r-suggest").mouseleave(function(){
        $(this).css({"font-size":"10px","color":"#999"});
    });
})
