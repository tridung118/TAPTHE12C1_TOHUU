const credits = document.getElementById("credits");

const fontSize = parseFloat(getComputedStyle(credits).fontSize);
const appearEm = 6;
const appearPx = fontSize * appearEm;

let y = window.innerHeight + appearPx;
let speed = 0.4;
let paused = false;

credits.style.transform = `translateY(${y}px)`;

function animate() {
  if (!paused) {
    y -= speed;
    credits.style.transform = `translateY(${y}px)`;
  }

  if (y + credits.offsetHeight > 0) {
    requestAnimationFrame(animate);
  }
}

requestAnimationFrame(animate);

//
// 👇 NHẤN GIỮ ĐỂ PAUSE – CHUẨN NHẤT
//
document.addEventListener("pointerdown", (e) => {
  paused = true;
  e.preventDefault();
});

document.addEventListener("pointerup", () => {
  paused = false;
});

document.addEventListener("pointercancel", () => {
  paused = false;
});
