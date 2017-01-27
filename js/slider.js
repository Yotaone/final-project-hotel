$(function(){
    // slider
    var sliderWidth = $(window).width();
    $(".slider div").width(sliderWidth);
    var slider = $('.slider');
    $(slider).width($(slider).children().size() * sliderWidth);
    setInterval(nextSlide, 3000);
    function nextSlide() {
        var currentSlide = parseInt($(slider).data('current'));
        currentSlide++;
        if (currentSlide >= $(slider).children().size()) {
            currentSlide = 0;
        }
        $(slider).animate({'margin-left': (-currentSlide * sliderWidth)}, 500).data('current', currentSlide);
    }
});