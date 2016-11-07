// Object Exercises 2

// Inheritance

// Given this Person Type:
function Person(name) {
  this.name = name;
  this.greet = function(other) {
    console.log("Hello " + other.name + "! My name is " + this.name + ".");
  }
}

// Six
// Take the previous Person type and rewrite it in factory function form.

function createPerson(name) {
  var person = {
    name: name
  };

  person.greet = function(other) {
    console.log('Hello ' + other.name + '! My name is ' + this.name + '.');
  };

  return person;
}
