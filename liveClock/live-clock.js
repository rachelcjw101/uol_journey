var secLength = 160;
var minLength = 140;
var hourLength = 90;
var secWidth = 1;
var minWidth = 3;
var hourWidth = 5;

function setup() {
    createCanvas(900, 600);
    background(0);
}

function draw() {
    background(255);
    translate(width / 2, height / 2);
    ellipse(0, 0, 350, 350);

    push();
    strokeWeight(secWidth);
    stroke(255, 0, 0);
    var secAngle = map(second(), 0, 60, 0, 360);
    rotate(radians(secAngle));
    line(0, 0, 0, -secLength);
    pop();

    push();
    strokeWeight(minWidth);
    var minAngle = map(minute(), 0, 60, 0, 360);
    rotate(radians(minAngle));
    line(0, 0, 0, -minLength);
    pop();

    push();
    strokeWeight(hourWidth);
    var hourAngle = map(hour(), 0, 60, 0, 360);
    rotate(radians(hourAngle));
    line(0, 0, 0, -hourLength);

        push();
        translate(0, -hourLength + 20);
        ellipse(0, 0, 20, 20);
        pop();

    pop();

    var hours = 12;
    var hourStep = 360 / hours;
    for (var i = 0; i < hours; i++) {
        push();
        rotate(radians(hourStep * i));
        translate(0, -155);
        ellipse(0, 0, 30, 30);
        if (i == 0) {
            text(12, -5, 2);
        } else {
            text(i, -5, 2);
        }
        pop();
    }

}
