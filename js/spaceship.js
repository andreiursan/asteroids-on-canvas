function Spaceship(){
  this.x = canvas.width / 2;
  this.y = canvas.height / 2;
  this.heading = 30;

  this.paint = function(context){
    context.fillStyle = "rgb(0,0,0)";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.strokeStyle = "rgb(255, 255, 255)";
    context.fillStyle = "rgb(255,0,0)";
    context.beginPath();
    context.translate(this.x, this.y);
    context.rotate(this.heading * Math.PI / 180.0);
    context.moveTo(-8, 10);
    context.lineTo(0, -9)
    context.lineTo(8, 10);
    context.closePath();
    context.lineWidth = 2;
    context.fill();
    context.stroke(); 
  }
}


