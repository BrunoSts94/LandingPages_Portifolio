const mobileTitle = document.querySelector('.title-mobile');
const heroH2 = document.querySelector('.hero-h2');
const heroH1 = document.querySelector('.hero-h1');
const heroP = document.querySelector('.hero-p');
const heroButton = document.querySelector('.hero-button');

const tl = gsap.timeline();

tl.from(mobileTitle, { y:-50, duration:1, ease: "power2.out" })

    .from(heroH2, { x: -200, duration: 1, ease: "power2.out",})
    .from(heroH1, { x: 400, duration: 1, ease: "power2.out",})
    .from(heroP, { x: -400, duration: 1, ease: "power2.out",})
    .to(heroButton, { x: 0, duration: 0.5, ease: "power2.out", opacity:1 })