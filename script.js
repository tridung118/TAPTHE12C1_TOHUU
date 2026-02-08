const credits = document.getElementById("credits");

let y = window.innerHeight;
const speed = 0.4; 

credits.style.transform = `translateY(${y}px)`;

function animate() {
  y -= speed;
  credits.style.transform = `translateY(${y}px)`;

  if (y + credits.offsetHeight > 0) {
    requestAnimationFrame(animate);
  }
}

requestAnimationFrame(animate);
