/*function range(start, end, step) {
  let someArray = [];
  //the function should return a blank array given these incorrect parameters
  if (start > end || step <= 0) {
    return someArray;
  } else if (start === undefined || end === undefined || step === undefined) {
    return someArray;
  } else { 
    //otherwise create a new array that begins with 'start', stops at 'end', and increments by 'step'
    for (let i = start; i <= end; i += step) {
      someArray.push(i);
    } return someArray;
  } 
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
*/

function lastIndexOf (arr, value) {
  //return the index of the last time the value occurs in the array
  let index;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (value === arr[i]) {
      index = i;
      return index;  
  } 
} return -1;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);