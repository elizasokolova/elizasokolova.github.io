$(function() {

/* Reviews: https://kenwheeler.github.io/slick/ */
let slider = $("#ReviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false
    });
});