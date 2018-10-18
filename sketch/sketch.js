function setup() {
  createCanvas(400, 400)
  background(200)
}

function draw() {
  var y = -10
  var count = 39


 for (var o = 0; o < count; o++) {
  y = y + 10
  var x = 0
  for (var i = 0; i < count; i++) {
 rect(x, y, 10, 10)
  x = x + 10
}
}
} 

var yOne = 20
var yTwo = 100
var yThree = 180
var speedOne = 3
var speedTwo = 3
var speedThree = 3

function setup() {
  createCanvas(400, 400)
  background(200)
}

function draw() {
  background(200)

  yOne = yOne + speedOne
  if (yOne < 0 || yOne > height) {
    speedOne = speedOne * -1
  }
  rect(30, yOne, 20, 20)

  yTwo = yTwo + speedTwo
  if (yTwo < 0 || yTwo > height) {
    speedTwo = speedTwo * -1
  }
  rect(60, yTwo, 20, 20)

  yThree = yThree + speedThree
  if (yThree < 0 || yThree > height) {
    speedThree = speedThree * -1
  }
  rect(90, yThree, 20, 20)
}
