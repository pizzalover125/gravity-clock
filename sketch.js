const G = 6.67e-11;
const SCALE = 0.001;

let particles = [];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);

    for (let i = 0; i < 80; i++) {
        createParticle(random(width), random(height));
    }
}

function draw() {
    background(51);

    for (const particleA of particles) {
        for (const particleB of particles) {
            if (particleA !== particleB) particleA.physics(particleB);
        }
    }

    for (const particle of particles) {
        particle.update();
        particle.draw();
    }
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}

function mousePressed() {
    createParticle(mouseX, mouseY);
}

function createParticle(x, y) {
    let mass = random(2e8, 1e9);
    particles.push(new Particle(x, y, mass));
}
function drawTime() {
    fill(255);
    textSize(64);
    textAlign(CENTER, CENTER);
    let currentTime = new Date().toLocaleTimeString();
    text(currentTime, width / 2, height / 2);
}

function draw() {
    background(51);

    for (const particleA of particles) {
        for (const particleB of particles) {
            if (particleA !== particleB) particleA.physics(particleB);
        }
    }

    for (const particle of particles) {
        particle.update();
        particle.draw();
    }

    drawTime();
}