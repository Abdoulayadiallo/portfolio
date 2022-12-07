// Mouse Circle
const mouseCircle = document.querySelector(".mouseCircle");
const mouseDot = document.querySelector(".mouseDot");
let mouseCircleBool = true;

const mouseCircleFn = (x, y) => {
  mouseCircleBool &&
    (mouseCircle.style.cssText = `top: ${y}px; left: ${x}px; opacity: 1`);

  mouseDot.style.cssText = `top: ${y}px; left: ${x}px; opacity: 1`;
};
document.addEventListener("mousemove",(e) => {
    let x = e.clientX;
    let y = e.clientY;
})
// End of Mouse Circle