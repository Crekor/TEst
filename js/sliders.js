$(document).ready(function(){
    $('.sl').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        autoplay:true,
      autoplaySpeed:3500,
      dots:true,
      arrows:false,
    });
    $('.slid').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '<button id="prev" type="button" class="slick-prev"> <i class="fa fa-chevron-left" aria-hidden="true"></i> </button>',
      nextArrow: '<button id="next" type="button" class="slick-next"> <i class="fa fa-chevron-right" aria-hidden="true"></i> </button>'
    });
});