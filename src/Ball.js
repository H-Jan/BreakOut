// ---------------

import Sprite from './Sprite';

class Ball extends Sprite {
  constructor(x = 0, y = 0, dx = 2, dy = -2, radius = 10, color = 'green') {
    super(x, y, radius * 2, radius * 2, color);
    this.dx = dx;
    this.dy = -dy;
    this.radius = radius;
    this.Pi2 = Math.PI * 2;
  }

  move() {
    this.moveBy(this.dx, this.dy);
  }

  // Need to leave since it creates a circle, and override the method in super
  render(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, this.Pi2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Ball;
