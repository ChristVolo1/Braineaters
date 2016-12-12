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
// interface zombieCharacter {
//      draw(): void;
//      y: number;
//
//
// class Zombie extends zombieCharacter {
let zombie = new Image();
zombie.onload = function loop() {
  // if (zombie.y++ >= 900 + zombie) {
  //     zombie.y = -zombie.;
  //  }
  for (let i=40;i < 900; i++){
    setInterval(function(){ctx.drawImage(zombie, i,450)},5000);

  }

  }

  zombie.src ="tiny-geek-zombie-icon.jpg";



// let canvas: HTMLCanvasElement;
// let ctx: CanvasRenderingContext2D;
//
// class cCircle implements iShape {
//    public x: number = 0;
//    public y: number = 0;
//    public radius: number = 10;
//    public lineWidth: number = 2;
//    public color: string = "red";
//    constructor(x: number, y: number, radius: number, color: string = "red", line_width: number = 2)
//    {
//       this.x = x;
//       this.y = y;
//       this.radius = radius;
//       this.color = color;
//       this.lineWidth = line_width;
//    }
//    public draw = (): void => {
//       ctx.save();
//       ctx.beginPath();
//       ctx.strokeStyle = this.color;
//       ctx.lineWidth = this.lineWidth;
//       ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
//       ctx.stroke();
//       ctx.restore();
//    }
// }
// var circle1: cCircle = new cCircle(200, 300, 50);
// var circle2: cCircle = new cCircle(400, 550, 150, "blue", 5);
//
// function gameLoop() {
//    requestAnimationFrame(gameLoop);
//    ctx.fillStyle = "black";
//    ctx.fillRect(0, 0, 880, 620);
//
//    if (circle1.x++ >= 880 + circle1.radius) {
//       circle1.x = -circle1.radius;
//    }
//
//    if (circle2.y++ >= 620 + circle2.radius) {
//       circle2.y = -circle2.radius;
//    }
//
//    circle1.draw();
//    circle2.draw();
// }
// interface iShape {
//    draw(): void;
//    x: number;
//    y: number;
//    color: string;
//    lineWidth: number;
// }
//
// window.onload = () => {
//    canvas = <HTMLCanvasElement>document.getElementById('cnvs');
//    ctx = canvas.getContext("2d");
//    gameLoop();
// }
