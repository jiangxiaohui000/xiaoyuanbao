/**
 * Created by Administrator on 2017/11/8.
 */


function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}
//addLoadEvent函数主要是完成如下的操作：
//
//1、把现有的window.onload事件处理函数的值存入到oldonload中。
//
//2、如果在这个处理函数上还没有绑定任何函数，就将该函数添加给它。
//
//3、如果在这个处理函数上已经绑定了一些函数，就把该函数追加到现有指定的末尾。
//
//通过addLoadEvent函数，只需要调用该函数就可以进行绑定了。