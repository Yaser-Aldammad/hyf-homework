class Circle {
  constructor(radius) {
    this._radius = radius;
  }
  get diameter() {
    return this._radius * 2;
  }
  get circumference() {
    return this.diameter * 3.14;
  }
  get area() {
    return this._radius * this._radius;
  }

  set diameter(x) {
    this._radius = x;
  }
  set circumference(x) {
    this.diameter = x;
  }
  set area(x) {
    this.area = x;
  }
}

const circleClac = new Circle(5);

const diameter = circleClac.diameter;
console.log("diameter " + diameter);

const area = circleClac.area;
console.log("area " + area);

const circumference = circleClac.circumference;
console.log("circumference " + circumference.toFixed(2));
