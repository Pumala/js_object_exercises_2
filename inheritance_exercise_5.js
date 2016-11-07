// Object Exercises 2

// Inheritance

// Given this Person Type:
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function(other) {
  console.log('Hello ' + other.name + '! My name is ' + this.name + '.');
};

// Five
// Rewrite the above type by inlining it's greet method into it's constructor.

function Person(name) {
  this.name = name;
  this.greet = function(other) {
    console.log("Hello " + other.name + "! My name is " + this.name + ".");
  }
}

// create new instances of Person
var sally = new Person('Sally');
var malcolm = new Person('Malcolm');

sally.greet(malcolm);
malcolm.greet(sally);
