$( function () {
    $('.slider').slick({
  dots: true,
  arrows: false,
  dotsClass: `slicks`,
    });

$(`.flashSlide`).slick({
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  dotsClass: `menu`,
  responsive: [
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
  
  ]
})

$(`.sliderTop`).slick({
  arrows: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  dots: true,
  dotsClass: `Slides`,
  responsive: [
    {
      breakpoint: 319,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
  
  ]
})
})