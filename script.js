const credits = document.getElementById("credits");

const fontSize = parseFloat(getComputedStyle(credits).fontSize);
const appearEm = -10; 
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

