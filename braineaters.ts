let canvas=<HTMLCanvasElement>document.getElementById('myCanvas');
let ctx = canvas.getContext("2d");
ctx.beginPath();
    ctx.rect(20, 2, 970, 600);
    ctx.fillStyle = 'indigo';
    ctx.fill();
    ctx.lineWidth = 7;
    ctx.strokeStyle = 'black';
    ctx.stroke();
  // ctx.onload = function {
  //   context.drawImage(canvas, 0,0);
  // }
  // function gameLoop() {
  //    requestAnimationFrame(gameLoop);
  //    ctx.fillStyle = "indigo";
  //    ctx.fillRect(0, 0, 880, 620);
  // }


let y = 200;
let hero = new Image();
hero.onload = function() {
  ctx.drawImage(hero, 100, 50)
  // hero.style.position = 'absolute';
  // hero.style.top = y + 'px';
  //
  // document.addEventListener('keydown', function(e) {
  //   if (e.keyCode==38) {
  //     y = y - 50;
  //   }
  //   if (e.keyCode==40) {
  //     y = y + 50;
  //   }
  //   hero.style.top = y + 'px';
  }
// );
hero.src="tiny-Link_Super_Smash_Bros._Brawl.jpg"


class Zombie {

  // public speed = Math.random();

let zombie = new Image();
zombie.onload = function loop() {
  
  for (let i=40;i < 900; i++){
    setInterval(function(){ctx.drawImage(zombie, i,450)},5000);
    
  }

  }
  zombie.src ="tiny-geek-zombie-icon.jpg";

// moveLeft = 



