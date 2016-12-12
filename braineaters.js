var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.rect(20, 2, 970, 600);
ctx.fillStyle = 'indigo';
ctx.fill();
ctx.lineWidth = 7;
ctx.strokeStyle = 'black';
ctx.stroke();
var hero = new Image();
hero.onload = function () {
    ctx.drawImage(hero, 100, 50);
};
hero.src = "tiny-Link_Super_Smash_Bros._Brawl.jpg";
var zombie = new Image();
zombie.onload = function loop() {
    var _loop_1 = function (i) {
        setInterval(function () { ctx.drawImage(zombie, i, 450); }, 5000);
    };
    for (var i = 40; i < 900; i++) {
        _loop_1(i);
    }
};
zombie.src = "tiny-geek-zombie-icon.jpg";
