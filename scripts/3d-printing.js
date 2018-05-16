$(document).ready(function(){
  var content = $(".mdl-layout__content");
  var headerImage = $(".header-image");

  content.scroll(function(){
    headerImage.css("height", "calc(40vh - " + content.scrollTop() + "px)");
  });
});
