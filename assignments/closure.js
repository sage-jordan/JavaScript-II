// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let closure = () => {
  return function() {console.log("Returns a function!")}
}
console.log(closure);
/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return function() {
    return ++count;
  }
};
let newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = (increment, decrement) => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  newObj = [];
//   function var1(increment) {
//     return ++increment;
//   }
//   function var2(decrement) {
//     return --decrement;
//   }
//   newObj.push(var1);
//   newObj.push(var2);
//   return newObj
};
// // let countNums = counterFactory(1, 10);
// console.log(counterFactory(1, 10));