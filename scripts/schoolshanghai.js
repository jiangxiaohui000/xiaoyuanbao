/**
 * Created by Administrator on 2017/11/11.
 */

$(document).ready(function(){
    var len = $("#schoolshanghai div").length;
    for(var i = 0;i < len;i++){
        $("#schoolshanghai div:eq(i)").mouseover(function(){
            setInterval(function(){
                $(this).siblings().css("display","none");
                $("#schoolshanghai").css("backgroundImage","url(../images/shanghaischool"+(i+1)+".png)");
            },30)
        });
        $("#schoolshanghai div:eq(i)").mouseout(function(){
            setInterval(function(){
                $(this).siblings().css("display","block");
                $("#schoolshanghai").css("backgroundImage","url(../images/shanghai-view.jpg)");
            },30)
        });
    };
});


//function shanghai(){
//    var schoolshanghai = document.getElementById("schoolshanghai");
//    var schoolfudan = document.getElementById("schoolfudan");
//    schoolfudan.onmouseover = function(){
//        schoolshanghai.style.backgroundImage = "url(images/shanghaischool1.png)";
//    }
//}
//addLoadEvent(shanghai);
