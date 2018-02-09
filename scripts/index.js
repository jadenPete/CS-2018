function log(val){
    return Math.log(val) / Math.log(10) + 1;
}

$(document).ready(function(){
    $(".mdl-layout__content").scroll(function(){
        var headerHeight = $(".mdl-layout__header").outerHeight();
        var contentScroll = $(".mdl-layout__content").scrollTop();

        var titleHeight = (($(window).height() - 100) / 2) - headerHeight;
        var subtitleHeight = titleHeight + 80;

        $(".title-text").css("opacity", log(1 - (contentScroll / titleHeight)));
        $(".subtitle-text").css("opacity", log(1 - (contentScroll / subtitleHeight)));
    });
});
