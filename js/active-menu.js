    $(function(){
        $('.menu a').filter(function(){return this.href==location.href}).addClass('active').siblings().removeClass('active');
    });
