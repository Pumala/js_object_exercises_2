// Object Exercises 2

// Inheritance

// Given the following function:
var mom = {
  firstName: 'Alice',
  lastName: 'Wong',
  eyeColor: 'brown',
  hairColor: 'black'
};
var daughter = {
  firstName: 'Ilene',
  hairColor: 'brown'
};

// Two
// Add a method called showInfo to mom by attaching a function to it. Calling this method will print out all four properties.

// daughter inherits properties from mom
daughter.__proto__ = mom;

// loop through object and print out properties
function showInfo() {
  for (var prop in this) {
    console.log(prop + ": " + this[prop]);
  }
}

// assign showInfo to mom
mom.showInfo = showInfo;

// print out mom's prop
mom.showInfo();

// assign showInfo to daughter
daughter.showInfo = showInfo;

// print out daughter's prop
daughter.showInfo();
