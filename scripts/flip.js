var slideIndex = 1;

function addSlide(num) {
    showSlides(slideIndex += num, true);
}

function setSlide(num) {
    showSlides(slideIndex = num, true);
}

function showSlides(num, scroll){
    var container = $(".slideshow-container");
    var slides = $(".slideshow");
    var images = $(".image")
    var dots = $(".dot")

    if(num > slides.length){
        slideIndex = 1;
    } else if(num < 1){
        slideIndex = slides.length;
    }

    for(var i = 0; i < slides.length; i++){
        slides.eq(i).css("display", "none")
    }

    for(var i = 0; i < dots.length; i++){
        dots.eq(i).removeClass("active");
    }

    slides.eq(slideIndex - 1).css("display", "inline-block");
    dots.eq(slideIndex - 1).addClass("active");

    container.css("padding-top", $(window).height() - $(".mdl-layout__header").outerHeight() -
                                 container.height() - $(".dots").outerHeight());

    if(scroll){
      $(".slideshow-view")[0].scrollIntoView();
    }
}

showSlides(slideIndex, false);
