/**
 * Created by Administrator on 2017/11/8.
 */

function Tianjin(){
    var schoolTianjinList = document.getElementById("schoolTianjinList");
    var lis = schoolTianjinList.children[0].children;
    for(var i = 0;i<lis.length;i++){
        lis[i].style.backgroundImage = "url(images/"+(i+1)+".png)";
        lis[i].onmouseover = function(){
            for(var i = 0;i<lis.length;i++){
                animate(lis[i],{width:50});
            }
            animate(this,{width:800});
        };
        lis[i].onmouseout = function(){
            for(var i = 0;i<lis.length;i++){
                animate(lis[i],{width:200});
            }
        }
    }
}

//封装多属性运动框架
function animate(obj,json){
    clearInterval(obj.schooltimer); //先停止定时器再开始定时器
    obj.schooltimer = setInterval(function(){
        var flag = true;  //用来判断是不是应该停止定时器  放在for in循环外面
        for(var attr in json){ // for in 遍历
            var current = parseInt(getStyle(obj,attr)); //获取当前属性
            var step = (json[attr] - current) / 10; //计算步长
            step = step>0 ? Math.ceil(step) : Math.floor(step);
            obj.style[attr] = current + step + "px";
            if(current != json[attr]){
                flag = false; //没有到达目标值就不能停止定时器
            }//这个判断条件要放在for in循环里面
        }
        if(flag){
            clearInterval(obj.schooltimer);
        }
    },10)
}


//封装返回当前样式的函数
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return window.getComputedStyle(obj,null)[attr];
    }
}


addLoadEvent(Tianjin);
addLoadEvent(animate);
addLoadEvent(getStyle);