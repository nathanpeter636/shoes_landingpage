//https://easings.net/ easing styles



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



$(".search > img").on("click", () => {


    $(".search > img").toggleClass("search_open")
    console.log("123")
    $(".search > input").toggleClass("active")

    if ($(".search > img").hasClass("search_open")) {
        $(".search > img").attr("src", "images/cancel.png")
    } else {
        $(".search > img").attr("src", "images/loupe-white.png");
    }


})

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

//intro animation


    anime({
        targets: ".left__sidebar",
        duration: 1000,

        scaleY: [0, 1],
        easing: "linear"
        
      });

      anime({
        targets: ".logo img",
        translateY: [50, 0],
        opacity: [0, 1],
        delay: 500,
        easing: 'easeInOutExpo'
        
      });

      anime({
        targets: ".menu li",
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(150, {start: 700}),
        easing: 'easeInOutExpo'
        
      });

      anime({
        targets: ".search img",
        translateY: [50, 0],
        opacity: [0, 1],
        delay: 1100,
        easing: 'easeInOutExpo'
        
      });

      anime({
        targets: ".slider .text > *",
        translateY: [250, 0],
        opacity: [0, 1],
        delay: anime.stagger(100, {start: 1700}),
        easing: 'easeInOutSine'
       
    
    });

    anime({
        targets: ".slick-dots li",
        translateY: [250, 0],
        opacity: [0, 1],
        delay: anime.stagger(100, {start: 2000}),
        easing: 'easeInOutSine'
       
    
    });

    anime({
        targets: ".slider .img img",
        duration: 1500,

        translateX: [250, 0],
        rotate: [45, 0],
        opacity: [0, 1],
        delay: 3400
      });

      anime({
        targets: ".shape",
        duration: 1500,

        scale: [0, 1],
        opacity: [0, 1],
        delay: 4000
      });

      anime({
        targets: ".social a",
        duration: 2500,

        translateY: [-50, 0],
        opacity: [0, 1],
        delay: anime.stagger(150, {start: 5000})
      });

      anime({
        targets: ".toggle span",
        duration: 2500,

        translateX: [-50, 0],
        opacity: [0, 1],
        delay: anime.stagger(150, {start: 5500})
      });
});

const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const circle = document.querySelector(".circle")


//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 30;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  title.style.transform = "translateZ(100px)";

  sneaker.style.transform = "translateZ(150px) rotateZ(-15deg)";
  // circle.style.boxShadow="0px 9px 20px 0 #b53f86";

 

  
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  // title.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  
});
