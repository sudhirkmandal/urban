function loco() {
  {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
}
loco();

function loadingAnimation() {
  var tl = gsap.timeline();
  tl.to("#loader", {
    top: "-10%",
    height: 0,
    duration: 0.5,
    delay: 0.8,
  });

  var h5 = document.querySelector("#hero h5");
  var h5text = h5.textContent;
  var splittedh5 = h5text.split("");
  var clutter = "";
  splittedh5.forEach(function (val) {
    clutter += `<span>${val}</span>`;
  });
  h5.innerHTML = clutter;

  tl.from(
    "h5 span",
    {
      y: 100,
      stagger: {
        amount: 1,
      },
    },
    "a"
  );

  var h1 = document.querySelector("#hero h1");
  var h1text = h1.textContent;
  var splittedh1 = h1text.split("");
  var clutter2 = "";
  splittedh1.forEach(function (val2) {
    clutter2 += `<span>${val2}</span>`;
  });
  h1.innerHTML = clutter2;

  tl.from(
    "h1 span",
    {
      y: 200,
      stagger: {
        amount: 1,
      },
    },
    "a"
  );

  tl.from(
    "#hero p",
    {
      opacity: 0,
    },
    "a"
  );

  tl.from("#page2 .inner-box>img", {
    scale: 1.3,
    delay: -1,
  });
}
loadingAnimation();

function page2Animation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      start: "top 0%",
      end: "top -100%",
      scrub: 5,
      pin: true,
    },
  });

  tl.to(
    ".page2-container",
    {
      x: "-275%",
      duration: 9,
    },
    "a"
  );

  tl.from(
    ".smaill-box",
    {
      x: 130,
      duration:5
    },
    "a"
  );

  tl.from(
    ".page2-container:nth-child(2) .overlay",
    {
      width: "0%",
      duration:4
    },
    "a"
  );
  tl.to(
    ".page2-container:nth-child(2) h1",
    {
      color: "#fff",
      duration:8
    },
    "a"
  );

  tl.to("#con-3", {
    y: "-100%",
    duration:8
  });
  tl.to("#con-3 .overlay-left-text", {
    delay: 0.1,
  });
}
page2Animation();

function page3Animation() {
  gsap.from(".page3-part1 h1", {
    y: 150,
    stagger: {
      amount: 0.2,
    },
    duration: 1,
    scrollTrigger: {
      trigger: "#page3",
      scroller: "#main",
      start: "top 60%",
      end: "top 0%",
      scrub: true,
    },
  });
  gsap.from(".page3-part2 h1", {
    y: 100,
    stagger: {
      amount: 0.2,
    },
    duration: 1,
    scrollTrigger: {
      trigger: ".page3-part2",
      scroller: "#main",
      start: "top 40%",
      end: "top 0%",
      scrub: true,
    },
  });
}

page3Animation();

function page4Animation() {
  gsap.to("#page4 .cards", {
    top: "-70%",
    duration: 0.5,
    scrollTrigger: {
      trigger: "#page4",
      scroller: "#main",
      start: "top 0%",
      end: "top -100%",
      scrub: true,
      pin: true,
    },
  });
}

page4Animation();

function page5Animation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page5",
      scroller: "#main",
      start: "top 0%",
      end: "top -100%",
      scrub: true,
      pin: true,
    },
  });
  tl.to(
    ".page5-container",
    {
      x: "-200%",
    },
    "a"
  );

  tl.from(
    ".page5-container h1",
    {
      x: 100,
    },
    "-=.5"
  );

  var miniCard = document.querySelector("#mini-card");
  var page5Container = document.querySelectorAll(".page5-container");
  var middle = document.querySelector("#middle");
  var last = document.querySelector("#last");
  var miniImg = document.querySelector(".mini-img");

  page5Container.forEach(function (container) {
    container.addEventListener("mouseenter", function () {
      gsap.to(miniCard, {
        opacity: 1,
      });
    });
    container.addEventListener("mouseleave", function () {
      gsap.to(miniCard, {
        opacity: 0,
      });
    });

    middle.addEventListener("mouseenter", function () {
      miniImg.style.backgroundImage = `url(https://static.tildacdn.com/tild3136-6136-4030-b266-353465343730/max1232617_Modern_be.jpg)`;
    });
    middle.addEventListener("mouseleave", function () {
      miniImg.style.backgroundImage = "";
    });

    last.addEventListener("mouseenter", function () {
      miniImg.style.backgroundImage = `url(https://static.tildacdn.com/tild6635-3562-4031-b334-326366353763/max1232617_Modern_be.jpg)`;
    });
    last.addEventListener("mouseleave", function () {
      miniImg.style.backgroundImage = `url(https://static.tildacdn.com/tild3136-6136-4030-b266-353465343730/max1232617_Modern_be.jpg)`;
    });

    container.addEventListener("mousemove", function (dets) {
      gsap.to(miniCard, {
        x: dets.x,
        y: dets.y,
      });
    });
  });
}

page5Animation();

function page6Animation() {
  gsap.from("#page6 h1", {
    y: 200,
    stagger: {
      amount: 0.2,
    },
    duration: 1,
    scrollTrigger: {
      trigger: "#page6",
      scroller: "#main",
      start: "top 60%",
      end: "top 0%",
      scrub: true,
    },
  });
}

page6Animation();

function page7Animation() {
  var slideImages = document.querySelector(".slideimages");
  var one = document.querySelector("#one");
  var two = document.querySelector("#two");
  var three = document.querySelector("#three");
  var four = document.querySelector("#four");
  var five = document.querySelector("#five");
  var six = document.querySelector("#six");
  var seven = document.querySelector("#seven");
  var eight = document.querySelector("#eight");
  var vdoTwo = document.querySelector("vdo-two");

  var page7Elem = document.querySelector(".page7-elems");
  var slideImage = document.querySelector(".slideimage");

  if (page7Elem && slideImage) {
    page7Elem.addEventListener("mousemove", function (dets) {
      gsap.to(slideImage, {
        x: dets.clientX,
        y: dets.clientY,
      });
    });

    page7Elem.addEventListener("mouseenter", function () {
      slideImage.style.display = "block";
      gsap.to(slideImage, {
        scale: 1,
      });
    });

    page7Elem.addEventListener("mouseleave", function () {
      slideImage.style.display = "none";
      gsap.to(slideImage, {
        scale: 0,
      });
    });
  } else {
    console.error('Element ".page7-elems" or ".slideimage" not found');
  }

  one.addEventListener("mouseenter", function () {
    slideImages.style.marginTop = "0%";
  });

  two.addEventListener("mouseenter", function () {
    slideImages.style.marginTop = "-127%";
  });

  two.addEventListener("click", function () {
    vdoTwo.play();
  });

  // anas.addEventListener("mouseleave", function () {
  //   anas.style.color = "initial"
  // })
  three.addEventListener("mouseenter", function () {
    slideImages.style.marginTop = "-255%";
  });

  four.addEventListener("mouseenter", function () {
    slideImages.style.marginTop = "-382%";
  });

  five.addEventListener("mouseenter", function () {
    slideImages.style.marginTop = "-509%";
  });
  six.addEventListener("mouseenter", function () {
    slideImages.style.marginTop = "-636.3%";
  });
  seven.addEventListener("mouseenter", function () {
    slideImages.style.marginTop = "-763.6%";
  });
  eight.addEventListener("mouseenter", function () {
    slideImages.style.marginTop = "-890.9%";
  });
}

page7Animation();

function page8Animation() {
  gsap.from(".page8-img", {
    top: "50%",
    duration: 2,
    scrollTrigger: {
      trigger: "#page8",
      scroller: "#main",
      start: "top 50%",
      end: "top -100%",
      scrub: true,
    },
  });
}

page8Animation();

function page9Animation() {
  gsap.from(".page9-img", {
    top: "60%",
    duration: 2,
    scrollTrigger: {
      trigger: "#page9",
      scroller: "#main",
      start: "top 80%",
      end: "top -100%",
      scrub: true,
    },
  });
}

page9Animation();

function page10Animation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page10",
      scroller: "#main",
      start: "top 0%",
      end: "top -100%",
      scrub: true,
      pin: true,
    },
  });
  tl.to(".page10-vdo", {
    width: "100%",
    height: "100%",
    duration: 2,
  });

  tl.to(".page10-cards", {
    right: "0",
    duration: 1,
  });
}

page10Animation();

// function page11Animation() {
//   var parent = document.querySelectorAll(".left-text");
//   var parentElem = document.querySelectorAll(".parent-elem");
//   var page11 = document.querySelector("#page11");
//   page11.addEventListener("mouseenter", function () {
//     parent.forEach(function (par) {
//       par.style.display = "block";
//     });
//     parentElem.forEach(function (parelem) {
//       parelem.style.display = "block";
//     });
//   });

//   page11.addEventListener("mouseleave", function () {
//     parent.forEach(function (par) {
//       par.style.display = "none";
//     });
//     parentElem.forEach(function (parelem) {
//       parelem.style.display = "none";
//     });
//   });

//   gsap.to("#elem2",{
//     clipPath:`polygon(0 100%, 100% 100%, 100% 0%, 0 0%)`,
//     scrollTrigger:{
//         scroller:'#elem2',
//         trigger:".parent-right",
//         start:"90% -50%",
//         end:"90% 20%",
//         markers: true,
//         scrub:true,
//    }
// })

// }

// page11Animation();

function footerAnimation() {
  var h1 = document.querySelector("#footer h1");
  var text = h1.textContent;
  var splitted = text.split("");
  var clutter = "";
  splitted.forEach(function (val) {
    clutter += `<span>${val}</span>`;
  });

  h1.innerHTML = clutter;

  // var tl = gsap.timeline();

  gsap.from(
    "#footer h1 span",
    {
      y: 250,
      stagger: {
        amount: 0.5,
      },
      scrollTrigger: {
        trigger: "#footer",
        scroller: "#main",
        start: "top 70%",
        end: "top 0%",
      },
    },
    "a"
  );

  gsap.to(
    ".footer-overlay",
    {
      height: "100%",
      scrollTrigger: {
        trigger: "#footer",
        scroller: "#main",
        start: "top 80%",
        end: "top -100%",
        scrub: true,
      },
    },
    "a"
  );

  gsap.to(
    "#footer h1 span",
    {
      color: "#fff",
      scrollTrigger: {
        trigger: "#footer",
        scroller: "#main",
        start: "top 100%",
        end: "top -100%",
        scrub: true,
      },
    },
    "a"
  );
}

footerAnimation();

Shery.makeMagnet(
  ".footer-img, .small-poster-img, .menu, .links-part2 a, button",
  {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  }
);
