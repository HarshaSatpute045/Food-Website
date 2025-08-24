
var tl = gsap.timeline();

tl.from(".logo", {
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 0.5
});

tl.from("nav ul li", {
  y: -20,
  opacity: 0,
  duration: 1,
  stagger: 0.2 // ✅ correct spelling
});

tl.from(".icon i", {
  y: -20,
  opacity: 0,
  duration: 1,
  stagger: 0.2
});

tl.from(".men_text h1", {
  x: -100,
  opacity: 0,
  duration: 1,
  delay:1
});

tl.from(".main_image img", {
  x: 100,
  opacity: 0,
  duration: 1
});

tl.from("section > p", {
  opacity: 0,
  duration: 1
});

tl.from(".main_btn", {
  opacity: 0,
  y: 20,
  duration: 1
});

gsap.from(".about .image", {
  x: -100,
  scale: 0.1,
  opacity: 0,
  duration: 2,
  delay: 1,
  borderRadius: "50%",
  scrollTrigger:".about .image"
});

gsap.from(".about .about_text h1 span", {
  x: 100,
  opacity: 0,
  delay: 1,
  duration: 1,
  scrollTrigger:".about .about_text h1 span"
});

gsap.from(".review h1 span",{
    opacity:0,
    delay:1,
    duration:1,
    scrollTrigger:".review h1 span"
})

gsap.from(".team h1 span",{
    opacity:0,
    delay:1,
    duration:1,
    scrollTrigger:".team h1 span"
})
gsap.from(".order h1 span",{
    opacity:0,
    delay:1,
    duration:1,
    scrollTrigger:".order h1 span"
})
gsap.from(".gallery h1 span",{
    opacity:0,
    delay:1,
    duration:1,
    scrollTrigger:".gallery h1 span"
})
// gsap.from(".menu h1 span",{
//     opacity:0,
//     delay:1,
//     duration:1,
//     scrollTrigger:".gallery h1 span"
// })



gsap.from(".about .about_text h3", {
  x: 100,
  opacity: 0,
  duration: 1,
  delay: 1,
  scrollTrigger:".about .about_text h3"
});


gsap.from(".about .about_btn", {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 1,
  scrollTrigger:".about .about_btn"
});






gsap.from(".order_main .order_image img",{
    scale:0,
    delay:1,
    duration:1,
    rotate:360,
    scrollTrigger:".order_main .order_image img"

});
gsap.from(".order_main form .order_btn",{
    delay:1,
    duration:1,
    opacity:0,
    scale:1,
    scrollTrigger:".order_main form .order_btn"
})

