let p = ["#7e7f83", "#d9c5b2"];
let bg = ["#faedcd"];

var balls = [];
class ball_class {
constructor(args) {
this.p = args.p|| { x: width / 2, y: height / 2}
this.r = args.r|| random(50, 120);
this.v = args.v || { x: random(-2, 2), y: random(-2, 2) };
this.a = args.a ||{ x: 0, y: random(0.7, 1.2) };
this.mode = random(["happy", "bad"]);
}

draw() {
let d = this.r * 0.8;


push();
translate(this.p.x, this.p.y);

if (this.mode == "happy") {
  strokeWeight(d / 4.5);

  noFill();
  stroke("#7e7f83")
  arc(0, d / 3, d, d, 190, 350);
  arc(0, d / 4, d * 1.3, d * 1.2, 200, 340);
  arc(0, d / 5, d * 1.6, d * 1.5, 210, 330);

  noStroke();
  fill("#7e7f83");
  ellipse(0, 0, d, d / 1.12);

  fill("#34312d");
  circle(-d / 4.5, -d / 50, d / 7.5);
  circle(d / 4.5, -d / 50, d / 7.5);

  fill("#34312d");
  ellipse(0, d / 11, d / 3.5, d / 3);
} else {
  strokeWeight(d / 4.5);

  noFill();
  stroke("#d9c5b2")
  arc(0, d / 3, d, d, 190, 350);
  arc(0, d / 4, d * 1.3, d * 1.2, 200, 340);
  arc(0, d / 5, d * 1.6, d * 1.5, 210, 330);

  noStroke();
  fill("#d9c5b2");
  ellipse(0, 0, d, d / 1.12);

  fill("#34312d");
  circle(-d / 4.5, -d / 50, d / 7.5);
  circle(d / 4.5, -d / 50, d / 7.5);

  fill("#34312d");
  ellipse(0, d / 11, d / 3.5, d / 3);
}

pop();
}

update() {
this.p.x += this.v.x;
this.p.y += this.v.y;

if (this.p.x < 0 || this.p.x > width) {
  this.v.x = -this.v.x;
}
if (this.p.y < 0 || this.p.y > height) {
  this.v.y = -this.v.y;
}
}
}

function setup() {
createCanvas(windowWidth, windowHeight);
angleMode(DEGREES);

for (let i = 0; i < 100; i++) {
let ball = new ball_class({
v: { x: random(-2, 2), y: random(-2, 2) },
p: { x: random(0, width), y: random(0, height) },
a: { x: 0, y: 0 },
});
balls.push(ball);
}
}

function draw() {
background(bg);

for (let ball of balls) {
ball.draw();
ball.update();
}
}
function mousePressed() {
  let ball = new ball_class({
    v: { x: random(-2, 2), y: random(-2, 2) },
    p: { x: mouseX, y: mouseY },
    a: { x: 0, y: 0 },
  });
  balls.push(ball);
}