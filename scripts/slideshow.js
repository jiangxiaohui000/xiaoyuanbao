/**
 * Created by Administrator on 2017/11/5.
 */


function slideshow(){
    //获取元素
    var slideshowPic = document.getElementById("slideshowPic");
    var slideshowPicUl = document.getElementById("slideshowPicUl");
    var slideshowCircle = document.getElementById("slideshowCircle");
    var slideshowPicUllis = slideshowPicUl.children;
    //将第一张图片克隆到最后一张，实现无缝滚动
    slideshowPicUl.appendChild(slideshowPicUl.children[0].cloneNode(true));
    //在轮播图底部生成序列小圆点
    var slideshowCircleUl = document.createElement("ul");
    slideshowCircle.appendChild(slideshowCircleUl);
    for(var i = 0; i<slideshowPicUllis.length-1; i++){
        var slideshowCircleUlLi = document.createElement("li");
        slideshowCircleUl.appendChild(slideshowCircleUlLi);
    }
    slideshowCircleUl.children[0].className = "active";
    //遍历 当鼠标放在小圆点上时，当前变颜色，其他的恢复原来的颜色
    var slideshowCircleUlLis = slideshowCircleUl.children;
    for(var i = 0; i<slideshowCircleUlLis.length; i++){
        slideshowCircleUlLis[i].index = i; //得到当前的索引号，用来判断当前的li
        slideshowCircleUlLis[i].onmouseover = function(){
            for(var j = 0; j<slideshowCircleUlLis.length; j++){
                slideshowCircleUlLis[j].className = "";
            }
            this.className = "active";
            animateslide(slideshowPicUl,-this.index*800);//调用动画
            key = circle = this.index; //鼠标放在哪个小圆点上，就播放相应的图片以及小圆点要变色
        }
    }
    //定时器
    var slidetimer = null;
    var key = 0;//控制播放的图片
    var circle = 0;//控制小圆点
    slidetimer = setInterval(autoplay,4000);
    function autoplay(){
        //1.图片
        key++;//先加加
        if(key > slideshowPicUllis.length - 1){ //再判断  减1是因为序号是从0开始的
            slideshowPicUl.style.left = 0;
            key = 1;
        }
        animateslide(slideshowPicUl,-key*800); //最后执行
        //2.小圆点
        circle++;//先加加
        if(circle>slideshowCircleUlLis.length-1){ //再判断  减1是因为序号是从0开始的
            circle = 0;
        }
        for(var i =0; i<slideshowCircleUlLis.length;i++){ //最后执行
            slideshowCircleUlLis[i].className = "";
        }
        slideshowCircleUlLis[circle].className = "active";
    }
    //鼠标经过，停止定时器
    slideshowPicUl.onmouseover = function(){
        clearInterval(slidetimer);
    }
    //鼠标离开，开启定时器
    slideshowPicUl.onmouseout = function(){
        slidetimer = setInterval(autoplay,4000);
    }
}

addLoadEvent(slideshow);


