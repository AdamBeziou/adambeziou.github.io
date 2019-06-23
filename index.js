var canvas = document.createElement("canvas");
c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

var imageData = c.createImageData(canvas.width, canvas.height);
document.body.appendChild(canvas);

(function loop() {

for (var i = 0, a = imageData.data.length; i < a; i++) {
    imageData.data[i] = (Math.random() * 255)|0;
}

c.putImageData(imageData, 0, 0);
requestAnimationFrame(loop);

})();