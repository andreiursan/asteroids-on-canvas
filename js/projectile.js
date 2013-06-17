function Projectile(x, y, heading){
  this.x = x;
  this.y = y;
  this.speed = 1000;
  this.gone = false;
  this.heading = heading;
  drift(this, this.heading, this.speed, false);

  this.paint = function(context) {
    this.gone = ((this.x < 0) || (this.x > canvas.width) || (this.y < 0) || (this.y > canvas.height));
    if (this.gone) {
      stopAnimation(this);
      return;
    }
    context.translate(this.x, this.y);
    context.rotate(this.heading * Math.PI / 180.0);
    context.strokeStyle = "rgb(0,255,0)";
    context.lineWidth = 3;
    context.beginPath();
    for(var i = 0; i < 5; i++) {
      context.moveTo(0, i * 2.0);
      context.lineTo(0, 1 + i * 2.0);
    }
    context.closePath();
    context.stroke();
    for(var i = 0; i < asteroids.length; i++){
      var asteroid = asteroids[i];
      if (asteroid.isHitBy(this.x, this.y)) {
        this.gone = true;
        asteroid.gone = true;
        explosions.push(new Explosion(asteroid.x, asteroid.y, 20, 120, 1));
        break;
      }
    }
  }
}
