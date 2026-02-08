const credits = document.getElementById("credits");

const fontSize = parseFloat(getComputedStyle(credits).fontSize);
const offsetEm = 6; // chỉnh cao/thấp tại đây
const offsetPx = fontSize * offsetEm;

let y = window.innerHeight - offsetPx;
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
// ⏸ PAUSE / RESUME
//

// PC
document.addEventListener("mousedown", () => paused = true);
document.addEventListener("mouseup", () => paused = false);

// Mobile
document.addEventListener("touchstart", () => paused = true, { passive: true });
document.addEventListener("touchend", () => paused = false);
