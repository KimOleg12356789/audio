$(document).ready(function(){

	$('p.cont-hide').hide() ;
$('p.cont').hover(
function() {
$(this).next().slideDown() ;
},
function() {
$(this).next().slideUp() ;
}
);

	 $('.service_n_sl').slick({
        infinite: true,
        dots: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 1201,
          settings: {
          	dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1025,
          settings: {
          	dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
          	dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 769,
          settings: {
          	dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
          {
          breakpoint: 661,
          settings: {
          	dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },

          {
            breakpoint: 576,
            settings: {
            	dots: true,
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
      ]
  });

 // /*progress slider*/
 //  $(".service_n_sl").slick({
 //    infinite: true,
 //    arrows: false,
 //    dots: false,
 //    autoplay: false,
 //    speed: 500,
 //    slidesToShow: 1,
 //    slidesToScroll: 1,
 //    responsive: [
 //      {
 //        breakpoint: 1024,
 //        settings: {
 //          slidesToShow: 1,
 //          slidesToScroll: 1,
 //        },
 //      },
 //      {
 //        breakpoint: 992,
 //        settings: {
 //          slidesToShow: 1,

 //          slidesToScroll: 1,
 //        },
 //      },
 //      {
 //        breakpoint: 769,
 //        settings: {
 //          slidesToShow: 1,

 //          slidesToScroll: 1,
 //        },
 //      },
 //      {
 //        breakpoint: 591,
 //        settings: {
 //          slidesToShow: 1,

 //          slidesToScroll: 1,
 //        },
 //      },

 //      {
 //        breakpoint: 416,
 //        settings: {
 //          slidesToShow: 1,

 //          slidesToScroll: 1,
 //        },
 //      },
 //    ],
 //  });

 //  let percentTime;
 //  let tick;
 //  let time = 0.1;
 //  let progressBarIndex = 0;

 //  $(".progressBarContainer .progressBar").each(function (index) {
 //    var progress = "<div class='inProgress inProgress" + index + "'></div>";
 //    $(this).html(progress);
 //  });

 //  function startProgressbar() {
 //    resetProgressbar();
 //    percentTime = 0;
 //    tick = setInterval(interval, 12);

 //    $(".inProgress" + progressBarIndex)
 //      .parent()
 //      .parent()
 //      .addClass("active");
 //  }

 //  function interval() {
 //    if (
 //      $(
 //        '.service_n_sl .slick-track div[data-slick-index="' +
 //          progressBarIndex +
 //          '"]'
 //      ).attr("aria-hidden") === "true"
 //    ) {
 //      progressBarIndex = $(
 //        '.service_n_sl .slick-track div[aria-hidden="false"]'
 //      ).data("slickIndex");

 //      startProgressbar();
 //    } else {
 //      percentTime += 1 / (time + 5);
 //      $(".inProgress" + progressBarIndex).css({
 //        width: percentTime + "%",
 //      });

 //      if (percentTime >= 100) {
 //        $(".service_n_sl").slick("slickNext");
 //        progressBarIndex++;
 //        if (progressBarIndex > 2) {
 //          progressBarIndex = 0;
 //        }
 //        startProgressbar();
 //      }
 //    }
 //  }

 //  function resetProgressbar() {
 //    $(".progressBarItem").removeClass("active");
 //    $(".inProgress").css({
 //      width: 0 + "%",
 //    });
 //    clearInterval(tick);
 //  }
 //  startProgressbar();

 //  $(".progressBarContainer .progressBarItem").click(function () {
 //    clearInterval(tick);
 //    const goToThisIndex = $(this).find("span").data("slickIndex");
 //    $(".service_n_sl").slick("slickGoTo", goToThisIndex, false);
 //    startProgressbar();
 //  });



});