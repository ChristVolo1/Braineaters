var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.rect(20, 2, 970, 600);
ctx.fillStyle = 'indigo';
ctx.fill();
ctx.lineWidth = 7;
ctx.strokeStyle = 'black';
ctx.stroke();
var zombie = new Image();
zombie.onload = function loop() {
    for (var i = 400; i < 500; i++) {
        ctx.drawImage(zombie, i, i);
        function moveZombie() {
            setInterval(this.zombie, 500);
        }
    }
};
zombie.src = "tiny-geek-zombie-icon.jpg";
