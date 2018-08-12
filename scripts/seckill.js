/**
 * Created by Administrator on 2017/11/7.
 */

function seckill(){
    //获取元素
    var seckillHour = document.getElementById("seckillHour");
    var seckillMinute = document.getElementById("seckillMinute");
    var seckillSecond = document.getElementById("seckillSecond");
    var seckillNavRHour = document.getElementById("seckillNavRHour");
    var seckillNavRMinute = document.getElementById("seckillNavRMinute");
    var seckillNavRSecond = document.getElementById("seckillNavRSecond");
    //创建一个结束时间
    var endTime = new Date("2018/11/7 21:00:00");
    //定时器
    setInterval(clock,1000);
    //封装clock函数
    function clock(){
        var nowTime = new Date();
        var sec = parseInt((endTime.getTime() - nowTime.getTime()) / 1000);

        seckillSecond = parseInt(sec % 60);
        seckillMinute = parseInt(sec / 60 % 60);
        seckillHour = parseInt(sec / 60 / 60 % 24);

        seckillSecond < 10 ? seckillSecond = "0" + seckillSecond : seckillSecond;
        seckillMinute < 10 ? seckillMinute = "0" + seckillMinute : seckillMinute;
        seckillHour < 10 ? seckillHour = "0" + seckillHour : seckillHour;

        seckillNavRSecond.innerHTML = seckillSecond;
        seckillNavRMinute.innerHTML = seckillMinute;
        seckillNavRHour.innerHTML = seckillHour;
    }
}

addLoadEvent(seckill);