function Explosion(x, y, min, max, duration) {
  this.x = x;
  this.y = y;
  this.max = max;
  this.diam = min;
  animate(this, "diam", this.max + 0.1, duration);

  this.paint = function(context) {
    if (this.diam > this.max) {
      return;
    }
    context.translate(this.x, this.y);
    context.strokeStyle = "rgb(255,255,255)";
    context.beginPath();
    for (var i=0; i < 40; i++) {
      var x = this.diam + 100;
      var y = this.diam + 100;
      while((x * x) + (y * y) > this.diam * this.diam / 4) {
        x = Math.floor(Math.random() * this.diam) - (this.diam / 2);
        y = Math.floor(Math.random() * this.diam) - (this.diam / 2);
      }
      context.moveTo(x, y);
      context.lineTo(x + 1, y + 1);
    }
    context.stroke();
  }
}
