// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/
function callback(item){
  return item;
}
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
// console.log(getLength(items, callback));


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length -1]);
}
// console.log(last(items, callback));


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}
// console.log(sumNums(1, 2, callback));


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x*y);
}
// console.log(multiplyNums(2, 2, callback));


function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for(let i = 0; i < list.length; i++){
    if(list[i] === item) {
      return true;
    }
  }
}
// console.log(contains("Gum", items, callback));


/* STRETCH PROBLEM */
const thisArray = [1, 1, 1, 2, 2, 3, 4, 4, 4, 5, 5];
function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  var noDups = {"bool": {}, "num":{}, "str":{}}, objs = [];
  return array.filter(function(item) {
    var type = typeof item;
    if(type in noDups)
      return noDups[type].hasOwnProperty(item) ? false : (noDups[type][item] = true);
    else  
      return objs.indexOf(item) >= 0 ? false : objs.push(item);
  });

}
let newArray = removeDuplicates(thisArray);
console.log(newArray);