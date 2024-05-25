let tl1 = gsap.timeline();
let tl2 = gsap.timeline();
let tl3 = gsap.timeline();

tl1.from(".logoName, .tagline", {
  opacity: 0,
  delay: 0.25,
  duration: .91,
});

tl1.from(".tagline span", {
  opacity: 0,
  delay: .1,
  y: -150,
  duration: 0.5,
  stagger: 0.2
});



gsap.to(".images", {
  transform: "translateX(-150%)",
  delay: 2,
  scrollTrigger: {
    trigger: ".box",
    scroller: "body",
    // markers: true,
    start: "top 0%",
    end: "top -100%",
    scrub: 2,
    pin: true,
  },
});

gsap.from('.heading span',{
  opacity: 0.1,
  // delay:1,
  scrollTrigger : {
    trigger: ".heading span",
    scroller: "body",
    // markers: true,
    start: "top 85%",
    end: "top -100%",
    scrub: 1,
  }
})


tl2.from('.techParts:nth-child(2n + 1)',{
  transform: "translateX(-120%)",
  // duration: .22,
  stagger : 0.05,
  opacity : 0,
  scrollTrigger: {
    trigger: ".techDetails, .technologyPage",
    scroller: "body",
    // markers: true,
    start: "top 80%",
    end: "top 0%",
    scrub: 5,
    // pin: true
  }
})


tl2.from('.techParts:nth-child(2n)',{
  transform: "translateX(120%)",
  // duration: .22,
  stagger : 0.05,
  opacity : 0,
  scrollTrigger: {
    trigger: ".techDetails, .technologyPage",
    scroller: "body",
    // markers: true,
    start: "top 80%",
    end: "top 0%",
    scrub: 5,
    // pin: true
  }
})