/**
 * Created by Administrator on 2017/11/14.
 */

$(document).ready(function(){
    //第一步先要获取每一个楼层相对于document (0,0)的距离
    //检测楼层时，跳转时，不需要那么精确，所以减去100
    var f1Top=$('#liftbeijing').offset().top-100;
    var f2Top=$('#lifttianjin').offset().top-100;
    var f3Top=$('#liftshanghai').offset().top-100;
    //检测楼层，用scrollTop()方法获取当滚动条滚动时每次最新的被卷去的高度，即当前可视区域内最顶部距离document (0,0)的距离，然后拿这个距离的值去和之前得到的每个楼层对应的值进行比较，就可以知道当       前滚动条滚动到哪个区域了。这里最好将这个功能性的模块封装起来，写成一个方法，然后用$(window).scroll(jianCe)去调用。
    var jianCe=function() {
        var windowScrollTop = $(window).scrollTop();
        if (windowScrollTop >= f3Top) {
            //到达3楼
            $('.lift').show();
            $('.lift li').eq(2).addClass('current').siblings('li').removeClass('current');
        } else if (windowScrollTop >= f2Top) {
            ;
            //到达2楼
            $('.lift').show();
            $('.lift li').eq(1).addClass('current').siblings('li').removeClass('current');
        } else if (windowScrollTop >= f1Top) {
            //到达1楼
            $('.lift').show();
            $('.lift li').eq(0).addClass('current').siblings('li').removeClass('current');
        } else {
            //不在3楼中的任意一层时，让电梯导航隐藏
            $('.lift').hide();
        }
    }
    //当点击左侧电梯导航时，也需要对应起来，因为在点击时，按钮会有一个特殊类用于突出显示，如果从3层跳到1层，会经过2，这样就会看到整个跳转的过程，所以，这里需要用到一个off（）方法，用于取消绑      定事件，$(window).off(‘scroll’); 因为你移除了scroll事件，当前这个LI具备特殊类名还要再书写一次，最后只需要判断当前点击的是第几层，做相应的操作即可。
    $('.lift li').click(function(event) {
        //在动画运动的过程中，不希望current特殊类名跟着满世界跑
        //所以把让current满世界跑的源头掐掉
        //源头：$(window).scroll()
        $(window).off('scroll');
        //因为你移除了scroll事件，当前这个LI具备特殊类名还要再书写一次
        $(this).addClass('current').siblings('li').removeClass('current');
        //需要知道现在要往几层楼跳
        //得到当前这个LI的序号，这个序号加1就是你需要去的楼层
        var i = $(this).index() + 1;
        if (i == 3) {
            //要往第3层跳
            //检测楼层时，希望的差不多到了；跳转时，需要精确，所以再加上100
            //f3Top是3层距离document （0，0）点的距离
            //但是当动画执行完毕了，还要继续检测楼层
            $('html,body').stop().animate({'scrollTop': f3Top + 100}, 500, function () {
                $(window).scroll(jianCe);
            });
        } else if (i == 2) {
            $('html,body').stop().animate({'scrollTop': f2Top + 100}, 500, function () {
                $(window).scroll(jianCe);
            });
        } else if (i == 1) {
            $('html,body').stop().animate({'scrollTop': f1Top + 100}, 500, function () {
                $(window).scroll(jianCe);
            });
        }
    });
});
