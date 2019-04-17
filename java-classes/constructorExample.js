function Particle(startX, startY) {
    this.x = startX;
    this.y = startY;
    velocity = {x: 0, y: 0};
}

const particles = [];
for(let i = 0; i < 100; i++) {
    particles.push(new Particle(i, Math.random()*500));
}

console.log(particles);

class Particle {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
        this.velocity = {x: 0, y: 0};
    } 

    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
}

const particles = [];
for(let i = 0; i < 100; i++) {
    particles.push(new Particle(i, (Math.random()*500).toFixed(5)));
    console.log(particles[i].getX(), particles[i].getY());
}

