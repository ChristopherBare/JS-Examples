const gravity = 0.5;
let time = 0;
const particles = [];

class Particle {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.velocity = { x: 0, y: 0 };
  }

  getVelocity() {
    return time * gravity;
  }

  move() {
    this.y += this.getVelocity();
    if (this.y >= 500) {
      console.log("bottom");
      clearInterval(interval);
    }
  }
}

for (let i = 0; i < 100; i++) {
  particles.push(new Particle(i, Math.random() * 500));
}

let interval = setInterval(function() {
  time++;
  particles
    .filter(function(p) {
      console.log(p.x);
      return p.y < 500;
    })
    .forEach(function(p) {
      p.move();
    });
}, 100);

// //es5 part
function Particle(startX, startY) {
  this.x = startX;
  this.y = startY;
}

Particle.prototype = {
  getVelocity: function() {
    return time * gravity;
  },

  move: function() {
    this.y += this.getVelocity();
    if (this.y >= 500) {
      console.log("bottom");
      clearInterval(interval);
    }
  }
};

const particles = [];
for (let i = 0; i < 100; i++) {
  particles.push(new Particle(i, Math.random() * 500));
}

setInterval(function() {
  time++;
  particles
    .filter(function(p) {
      console.log(p.x);
      return p.y < 500;
    })
    .forEach(function(p) {
      p.move();
    });
}, 100);
