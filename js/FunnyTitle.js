<!--浏览器搞笑标题-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/img/trhx2.png");
         document.title = 'ヽ(#`Д´)ﾉ 走了就别回来了！';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/img/trhx2.png");
         document.title = '(｡・`ω´･) 爬去跪搓衣板！';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });