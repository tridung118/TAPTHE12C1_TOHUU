const credits = document.getElementById("credits");
const startBtn = document.getElementById("startBtn");
const stopBtn  = document.getElementById("stopBtn");

let pos = -window.innerHeight;
let speed = 0.5; // 👈 chỉnh tốc độ chữ chạy
let run = null;

function startCredit(){
  if(run) return;

  run = setInterval(()=>{
    pos += speed;
    credits.style.transform = `translateY(${-pos}px)`;
  },16);
}

function stopCredit(){
  clearInterval(run);
  run = null;
}

startBtn.addEventListener("click", startCredit);
stopBtn.addEventListener("click", stopCredit);
