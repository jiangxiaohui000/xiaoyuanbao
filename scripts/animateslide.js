/**
 * Created by Administrator on 2017/11/6.
 */

function animateslide(obj,target){
    clearInterval(obj.animatetimer);
    var speed = obj.offsetLeft < target ? 15 : -15;
    obj.animatetimer = setInterval(function(){
        obj.style.left = obj.offsetLeft + speed + "px";
        var result = target - obj.offsetLeft;
        if(Math.abs(result)<15){
            clearInterval(obj.animatetimer);
            obj.style.left = target + "px";
        }
    },10)
}
