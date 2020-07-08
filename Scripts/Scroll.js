$(".nav a").click(function (e) {
    var _left = parseInt($($(this).attr("href")).position().left);
    $(".content-scroller").animate({ scrollLeft: _left }, 1000, 'easeInOutExpo', function () { });
	//window.history.pushState(e.target.dataset.tabFor, $("#"+$(this).attr("id")+" span").html(), "amarnandeshwar.com/"+$("#"+$(this).attr("id")+" span").html());
});
$(".mobile-nav a").click(function (e) {
    var _top = parseInt($($(this).attr("href")).position().top);
    $(".content-scroller").animate({ scrollTop: _top }, 1000, 'easeInOutExpo', function () { });
	//window.history.pushState(e.target.dataset.tabFor, $("#"+$(this).attr("id")+" span").html(), "amarnandeshwar.com/"+$("#"+$(this).attr("id")+" span").html());
});
