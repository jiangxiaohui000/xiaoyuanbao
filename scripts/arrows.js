/**
 * Created by Administrator on 2017/11/6.
 */
function arrows(){
    //左右箭头
    var slideshowPic = document.getElementById("slideshowPic");
    var slideshowPicUl = document.getElementById("slideshowPicUl");
    var slideshowArrl = document.getElementById("slideshowArrl");
    var slideshowArrr = document.getElementById("slideshowArrr");
    slideshowPic.onmouseover = function(){
        slideshowArrl.style.display = "block";
        slideshowArrr.style.display = "block";
    }
    slideshowPic.onmouseout = function(){
        slideshowArrl.style.display = "none";
        slideshowArrr.style.display = "none";
    }
    slideshowArrl.onclick = function(){
        final += 800;
    }
    slideshowArrr.onclick = function(){
        final -= 800;
    }
    //缓动动画
    var leader = 0;
    var final = 0;
    setInterval(function(){
        if(final >= 0){
            final = 0;
        }else if(final < -2400){
            final = -2400;
        }
        leader = leader + (final - leader) / 10;
        slideshowPicUl.style.left = leader + "px";
    },10);
}
addLoadEvent(arrows);