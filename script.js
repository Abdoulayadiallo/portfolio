// Mouse Circle
const mouseCircle = document.querySelector(".mouse-circle");
const mouseDot = document.querySelector(".mouse-dot");
const mouseCircleFn = (x,y) => {
mouseCircle.style.cssText = `top: ${y}px; left: ${x}px ;opacity: 1`;
mouseDot.style.cssText = `top: ${y}px; left: ${x}px ;opacity: 1`;
};
// End of Mouse Circle

// Souris animation
const circles = document.querySelectorAll(".circle");
const mainImg = document.querySelector(".main-circle img");
let mX=0;
let mY=0;
let z=30;

const animateCircles = (e,x,y) => {
  //Si la souris bouge horizontalement
  //souris à gauche image à droite
  if(x < mX){
    circles.forEach((circle) => {
      circle.style.left = `${z}px`;
    });
    mainImg.style.left=`${z}px`
  }else if(x > mX){
    circles.forEach((circle) => {
      circle.style.left = `-${z}px`;
    });
    mainImg.style.left=`-${z}px`
  }
  // Si la souris bouge verticalement
  //souris en bas image en haut
  if(y < mY){
    circles.forEach((circle) => {
      circle.style.top = `${z}px`;
    });
    mainImg.style.top=`${z}px`
  }else{
    circles.forEach((circle) => {
      circle.style.top = `-${z}px`;
    });
    mainImg.style.top=`-${z}px`
  }
  mX = e.clientX;
  mY = e.clientY;
}
//Fin Souris animation
document.body.addEventListener("mousemove",(e) => {
    let x = e.clientX;
    let y = e.clientY;

    mouseCircleFn(x,y);
    animateCircles(e,x,y);
});
document.body.addEventListener("mouseleave",()=> {
  mouseCircle.style.opacity = '0';
  mouseDot.style.opacity = '0';
})
//  Boutton Principal
const mainBtns = document.querySelectorAll(".main-btn");

mainBtns.forEach((btn) => {
  let ripple;

  btn.addEventListener("mouseenter", (e) => {
    console.log("hi");
    const left = e.clientX - e.target.getBoundingClientRect().left;
    const top = e.clientY - e.target.getBoundingClientRect().top;

    ripple = document.createElement("div");
    ripple.classList.add("ripple");
    ripple.style.left = `${left}px`;
    ripple.style.top = `${top}px`;
    btn.prepend(ripple);
  });

  btn.addEventListener("mouseleave", () => {
    btn.removeChild(ripple);
  });
});

// Fin Button Principal

// A propos de moi Text
const aboutMeText = document.querySelector(".about-me-text");
const aboutMeTextContent =
  "Je suis un développeur fullstack et designer web et mobile. J'ai suivi 6 mois de formation à Odc qui m'a permis d'accueillir des connaissances solides en développement web et mobile. :)";

Array.from(aboutMeTextContent).forEach((char) => {
  const span = document.createElement("span");
  span.textContent = char;
  aboutMeText.appendChild(span);

  span.addEventListener("mouseenter", (e) => {
    e.target.style.animation = "aboutMeTextAnim 10s infinite";
  });
});
// Fin a propos de moi Text