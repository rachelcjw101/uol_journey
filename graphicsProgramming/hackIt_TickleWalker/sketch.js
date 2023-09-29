var tickler;
function setup() {
    createCanvas(900, 600);
    

    tickler = new Tickler(width / 2, height / 2, 50);
}

function draw() {
    background(0);
    tickler.display();
  
    if (tickler.contains(mouseX, mouseY)) {
        tickler.tickle();
    }
    }

    class Tickler {
    constructor(x, y, r) {
        this.position = createVector(x, y);
        this.radius = r;
    }
    
    display() {
        fill(255);
        ellipse(this.position.x, this.position.y, this.radius * 2);
    }
    
    contains(x, y) {
        var d = dist(x, y, this.position.x, this.position.y);
        return d < this.radius;
    }
    
    tickle() {
        var randomOffset = createVector(random(-5, 5), random(-5, 5));
        this.position.add(randomOffset);
    }
}
