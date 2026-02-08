const credits = document.getElementById("credits");

const fontSize = parseFloat(getComputedStyle(credits).fontSize);
const appearEm = -30;
const appearPx = fontSize * appearEm;

let y = window.innerHeight + appearPx;
let speed = 0.7;
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
// ⏸ LONG PRESS TO PAUSE (ổn định nhất)
//
let pressTimer = null;
const HOLD_TIME = 200; // ms – chỉnh 150~300 tùy thích

function startHold() {
  pressTimer = setTimeout(() => {
    paused = true;
    credits.style.filter = "brightness(0.8)";
  }, HOLD_TIME);
}

function endHold() {
  clearTimeout(pressTimer);
  pressTimer = null;

  if (paused) {
    paused = false;
    credits.style.filter = "none";
  }
}

// Mobile
document.addEventListener("touchstart", startHold, { passive: true });
document.addEventListener("touchend", endHold);
document.addEventListener("touchcancel", endHold);

// Desktop
document.addEventListener("mousedown", startHold);
document.addEventListener("mouseup", endHold);
document.addEventListener("mouseleave", endHold);
