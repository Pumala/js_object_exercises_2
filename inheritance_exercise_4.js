// Object Exercises 2

// Inheritance

// Given this Character type:
function Character () {
  this.speed = 7;
}

Character.prototype.attack = function(enemy) {
  enemy.health -= this.power;
};

// Four

// Write a Hero type that inherits it and overrides the attack method to randomly with 20% chance, double the dealt damage.

// create Enemy Constructor
function Enemy(name) {
  this.name = name;
  this.health = 12;
  this.power = 4;
  // Enemy gains Character's other properties (ex: speed of 7)
  Character.apply(this);
}

// Enemy inherits only Character's methods
Enemy.prototype = Object.create(Character.prototype);

// create Hero Constructor
function Hero(name) {
  this.name = name;
  this.health = 10;
  this.power = 5;
}

// Hero inherits only Character's methods
Hero.prototype = Object.create(Character.prototype);

// modify Hero's attack so that he has a 20% chance of dealing double damage to the enemy
Hero.prototype.attack = function(enemy) {
  var attackCount = 1;
  var attackProb = (Math.ceil(Math.random() * 10)) <= 2;

  if (attackProb) {
    attackCount = 2;
  }
  var attack = this.power * attackCount;
  enemy.health -= attack;
  console.log(this.name + " dealth " + attack + " damage to " + enemy.name + "!");
}

// create an instance of Hero
var hercules = new Hero('Hercules');

// create an instance of Enemy
var monster = new Enemy('Monster');

hercules.attack(monster);

console.log(monster.speed);
// console.log(hercules.name);
