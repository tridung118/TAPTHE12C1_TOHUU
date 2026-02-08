const credits = document.getElementById("credits");

const fontSize = parseFloat(getComputedStyle(credits).fontSize);
const appearEm = -10; // ← chữ bắt đầu xuất hiện cách đáy 6em
const appearPx = fontSize * appearEm;

let y = window.innerHeight + appearPx; // 🔥 CHỐT Ở ĐÂY
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
