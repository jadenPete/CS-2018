function goto(url){
    window.location.href = url;
}

$(document).ready(function(){
  var content = $(".mdl-layout__content");
  var header = $(".mdl-layout__header");

  content.scroll(function(){
    var opacity;

    if(content.scrollTop() <= 184){
      opacity = content.scrollTop() / 200;
    } else {
      opacity = 0.92;
    }

    header.css("background", "rgba(97, 97, 97, " + opacity + ")");

    if(content.scrollTop() > 184){
      header.removeClass("mdl-layout__header--transparent");
      header.addClass("mdl-shadow--4dp");
    } else if(header.hasClass("mdl-shadow--4dp")){
      header.addClass("mdl-layout__header--transparent");
      header.removeClass("mdl-shadow--4dp");
    }
  });
});
