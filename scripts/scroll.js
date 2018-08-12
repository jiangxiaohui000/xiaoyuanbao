/**
 * Created by Administrator on 2017/11/14.
 */

function show(obj) { obj.style.display = "block";}
function hide(obj) { obj.style.display = "none";}
function scroll(){
    if(window.pageXOffset != null){                 //IE9+及其他高版本浏览器，因为 window.pageYOffset 默认的是0，所以这里需要判断
        return{
            left:window.pageXOffset,
            top:window.pageYOffset
        }
    }else if(document.compatMode == "CSS1compat"){ //声明DTD的浏览器
        return{
            left:document.documentElement.scrollLeft,
            top:document.documentElement.scrollTop
        }
    }else{                                              //没有声明DTD的怪异浏览器
        return{
            left:document.body.scrollLeft,
            top:document.body.scrollTop
        }
    }
}
