$(".toggle").on("click", () => {
  $(".toggle").toggleClass("close");
  $(".toggle__menu").toggleClass("open");

  if ($(".toggle").hasClass("close")) {
    anime({
      targets: ".toggle.close span",
      duration: 1500,
      rotate: [0, 45],
      delay: 500,
    });
  } else {
    anime({
      targets: ".toggle span",
      duration: 1500,
      rotate: [45, 0],
      delay: 500,
    });
  }

  if ($(".toggle__menu").hasClass("open")) {
    anime({
      targets: ".toggle__menu li a",
      duration: 1500,

      translateX: [-250, 0],
      opacity: [0, 1],
      delay: anime.stagger(250, { strat: 200 }),
    });
  }
});

$(function () {
  $(".slider")
    .slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      fade: true,
    })
    .on("beforeChange", () => {
      anime({
        targets: ".slider .img img",
        duration: 1500,

        translateX: [0, 250],
        rotate: [0, 45],
        opacity: [1, 0],
        
      });

      anime({
        targets: ".slider .text > *",
        opacity: [1, 0],
        delay: anime.stagger(50)
       
    
    });

    }).on('afterChange', () => {

        anime({
            targets: ".slider .img img",
            duration: 1500,
    
            translateX: [250, 0],
            rotate: [45, 0],
            opacity: [0, 1],
            
          });
    
          anime({
            targets: ".slider .text > *",
            opacity: [0, 1],
            delay: anime.stagger(50)
           
        
        });

    })
});
