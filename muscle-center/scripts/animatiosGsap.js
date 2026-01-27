const mobileTitle = document.querySelector('.title-mobile');
const heroH2 = document.querySelector('.hero-h2');
const heroH1 = document.querySelector('.hero-h1');
const heroP = document.querySelector('.hero-p');
const heroButton = document.querySelector('.hero-button');
const cards = document.querySelectorAll(".card-about");

const tl = gsap.timeline();

tl.from(mobileTitle, { y:-50, duration:1, ease: "power2.out" })

    .from(heroH2, { x: -200, duration: 1, ease: "power2.out", opacity: 0})
    .from(heroH1, { x: 400, duration: 1, ease: "power2.out", opacity: 0})
    .from(heroP, { x: -400, duration: 1, ease: "power2.out", opacity: 0})
    .to(heroButton, { x: 0, duration: 0.5, ease: "power2.out", opacity:1 })

/*Animação dos cards sobre*/
cards.forEach(card => {
  const inner = card.querySelector(".card-inner");

  card.addEventListener("mouseenter", () => {
    gsap.to(inner, {
      rotateY: 180,
      duration: 0.2,
      ease: "power2.out"
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(inner, {
      rotateY: 0,
      duration: 0.2,
      ease: "power2.out"
    });
  });
});

gsap.from('.card-founder', {
  opacity: 0,
  duration: 4,
  ease: "power2.out"
})