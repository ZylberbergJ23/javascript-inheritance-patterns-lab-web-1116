function Point(x,y){
	this.x = x
	this.y =y 
}

Point.prototype.toString = function () {return `(${this.x}, ${this.y})`}


function Shape() {}

Shape.prototype.addToPlane = function(x,y) {this.position = new Point(x,y)}

Shape.prototype.move = function(x,y) {
	this.position = new Point(x,y)
}

function Circle(radius) {
	// Shape.call(this)
	this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle


Circle.prototype.area = function() {return (Math.PI * this.radius^2)}
Circle.prototype.circumference = function() {return (2 * Math.PI * this.radius)}
Circle.prototype.diameter = function() {return 2* this.radius}


function Side(length) {
	this.length = length
}

function Polygon(sides) {
	// Shape.call(this)
	this.sides = sides
}

Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Polygon

Polygon.prototype.perimeter = function() {
	var perimeter = 0
  	for (let i = 0; i < this.sides.length; i++) {
    	perimeter += this.sides[i].length
  	}
  	return perimeter
}

Polygon.prototype.numberOfSides = function() {
	return this.sides.length
}

function Quadrilateral(sideOne, sideTwo, sideThree, sideFour) {
  // Polygon.call(this, [new Side(sideOneLength), new Side(sideTwoLength), new Side(sideThreeLength), new Side(sideFourLength)]);
	this.sideOne = new Side(sideOne)
  	this.sideTwo = new Side(sideTwo)
  	this.sideThree = new Side(sideThree)
  	this.sideFour = new Side(sideFour)
  	this.sides = [this.sideOne, this.sideTwo, this.sideThree, this.sideFour]
}

Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.prototype.constructor = Quadrilateral

function Rectangle(width, height) {
  this.width = width
  this.height = height
  this.sides = [new Side(width), new Side(width), new Side(height), new Side(height)]
}
Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.area = function() {
  return this.width * this.height
}

function Square(side) {
  this.width = side
  this.height = side
  this.sides =  [new Side(side), new Side(side), new Side(side), new Side(side)]
}
Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.listProperties = function() {
   let props = []
   for (var prop in this) {
     if (this.hasOwnProperty(prop)) {
       props += 'this.' + prop + ' = ' + this[prop]
     }
   }
   return props
 }

function Triangle(sideOne, sideTwo, sideThree) {
	// Polygon.call(this, [new Side(sideOneLength), new Side(sideTwoLength), new Side(sideThreeLength)])
  this.sides = [new Side(sideOne), new Side(sideTwo), new Side(sideThree)]
}
Triangle.prototype = Object.create(Polygon.prototype)









