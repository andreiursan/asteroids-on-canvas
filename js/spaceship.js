function Spaceship(){
  this.x = canvas.width / 2;
  this.y = canvas.height / 2;
  this.heading = 30;
  this.speed = 0;
  drift(this, this.heading, this.speed);

  this.paint = function(context){
    context.translate(this.x, this.y);
    context.rotate(this.heading * Math.PI / 180.0);
    var width = spaceshipSprite.width;
    var height = spaceshipSprite.height;
    context.drawImage(spaceshipSprite, -width/2, -height/2, width, height);
  }

  this.turnLeft = function() {
    drift(this, this.heading, this.speed);
    this.heading -= 10;
  }

  this.turnRight = function() {
    drift(this, this.heading, this.speed);
    this.heading += 10;
  }

  this.speedUp = function() {
    if (this.speed > 400) {
      return;
    }
    this.speed += 50;
    drift(this, this.heading, this.speed);
  }

  this.slowDown = function() {
    if (this.speed <= 0) {
      this.speed = 0;
      drift(this, this.heading, this.speed);
      return;
    }
    this.speed -= 50;
    drift(this, this.heading, this.speed);
  }
}

