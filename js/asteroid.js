function Asteroid(){
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height;
  this.heading = Math.random() * 360;
  this.angle = 0;
  this.speed = 50;
  drift(this, this.heading, this.speed);

  this.paint = function(context){
    context.strokeStyle = "rgb(255, 255, 255)";
    context.fillStyle = "rgb(255,0,0)";
    context.beginPath();
    context.translate(this.x, this.y);
    context.rotate(this.angle * Math.PI / 180.0);
    context.moveTo(-8, 10);
    context.lineTo(0, -9)
    context.lineTo(8, 10);
    context.closePath();
    context.lineWidth = 2;
    context.fill();
    context.stroke(); 
  }
}

