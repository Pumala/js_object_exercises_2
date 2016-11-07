// Object Exercises 2

// Plain Objects

// Given the following function:
function hate() {
  this.timesLiked--;
}

var pic1 = {
  url: 'lolcat.jpg',
  timesLiked: 0
};
var pic2 = {
  url: 'chucknorris.jpg',
  timesLiked: 0
};

// Two
// Apply it to the `pic1` and `pic2` without attaching the function to the objects themselves, using either the `apply` or `call` method.

// using the apply method
hate.apply(pic1);
hate.apply(pic2);
// using the call method
hate.call(pic2);
hate.call(pic2);
hate.call(pic2);

console.log(pic1);
console.log(pic2);

console.log("Pic 1 was disliked " + -(pic1.timesLiked) + " times!");
console.log("Pic 2 was disliked " + -(pic2.timesLiked) + " times!");
