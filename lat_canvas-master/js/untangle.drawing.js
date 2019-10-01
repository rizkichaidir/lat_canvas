if (untangleGame === undefined) {
var untangleGame = {};
}

function randWarna() {
	var r=80*Math.random()|5,
	    g=100*Math.random()|10,
	    b=150*Math.random()|20;
	return 'rgb(' + r +',' + g + ',' + b + ')';
}
untangleGame.drawCircle = function(x, y, radius) {
var ctx = untangleGame.ctx;
ctx.fillStyle = randWarna();
ctx.beginPath();
ctx.arc(x, y, radius, 0, Math.PI*2, true);
ctx.closePath();
ctx.fill();
};