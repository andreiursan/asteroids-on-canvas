function Asteroid(){
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height;
  this.heading = Math.random() * 360;
  this.angle = 0;
  this.speed = Math.random() * 50;
  rotate(this, "angle", 10);
  drift(this, this.heading, this.speed);

  this.paint = function(context){
    context.translate(this.x, this.y);
    context.rotate(this.angle * Math.PI / 180.0);
    var width = asteroidSprite.width;
    var height = asteroidSprite.height;
    context.drawImage(asteroidSprite, -width/2, -height/2, width, height);
  }

  this.isHitBy = function(x,y) {
    var xdist = Math.abs(x - this.x);
    var ydist = Math.abs(y - this.y);
    var width = asteroidSprite.width;
    var height = asteroidSprite.height;
    return ((xdist < width / 2) && (ydist < height /2)); 
  }
}

