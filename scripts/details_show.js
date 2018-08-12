/**
 * Created by Administrator on 2018/7/28.
 */
// 封装getStyle函数
function getStyle(obj,attr){
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,false)[attr];
}
window.onload = function(){
    var oLeft = document.getElementById('left');
    var oRight = document.getElementById('right');
    var oWrap = document.getElementById('wrap');
    oLeft.onclick = function(){
        var dis = parseInt(getStyle(oWrap,'left')) + 400;
        if(dis > 0){
            dis = 0;
        }
        oWrap.style.left = dis + 'px';
    };
    oRight.onclick = function(){
        var dis = parseInt(getStyle(oWrap,'left')) - 400;
        if(dis < -400){
            dis = -400;
        }
        oWrap.style.left = dis + 'px';
    };

    var show_left_top = document.getElementById('show_left_top');
    function show_pic(liid,bg){  // 封装函数  参数的传递
        var obj = document.getElementById(liid);
        obj.onmouseover = function(){
            show_left_top.style.backgroundImage = bg;
        }
    };
    show_pic('li01','url(images/show-pic1.jpg)');
    show_pic('li02','url(images/show-pic2.jpg)');
    show_pic('li03','url(images/show-pic3.jpg)');
    show_pic('li04','url(images/show-pic4.jpg)');
    show_pic('li05','url(images/show-pic5.jpg)');
    show_pic('li06','url(images/show-pic6.jpg)');
    show_pic('li07','url(images/show-pic7.jpg)');
    show_pic('li08','url(images/show-pic8.jpg)');
    show_pic('li09','url(images/show-pic1.jpg)');
    show_pic('li10','url(images/show-pic2.jpg)');
};
