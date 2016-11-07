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

// One
// Write code using __proto__ to make daughter inherit properties from mom. Print out each property that daughter has. What are they and what are their values?

// daughter inherits properties from mom
daughter.__proto__ = mom;

// loop through daughter object and print out her properties
for (prop in daughter) {
  console.log(prop + ": " + daughter[prop]);
}
