$(document).ready(function () {
    $('#testimonialCarousel').carousel({
        interval: 50000, // Adjust the interval as needed
        ride: 'carousel' // Enable carousel sliding
    });

    // Handle indicator click
    $('.carousel-indicators li').click(function () {
        var targetIndex = $(this).data('slide-to');
        $('#testimonialCarousel').carousel(targetIndex);
        $('.carousel-indicators li').removeClass('active');
        $(this).addClass('active');
    });

    $('#testimonialCarousel').on('slide.bs.carousel', function (e) {
        var indicators = $('.carousel-indicators li');
        indicators.removeClass('active');
        indicators.eq($(e.relatedTarget).index()).addClass('active');
    });
});