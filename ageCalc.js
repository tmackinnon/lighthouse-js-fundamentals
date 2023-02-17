//Age calculator assignment 

/*function ageCalculator (name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth;
  return name + " is " + age + " years old"
} 

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
*/

//how many hundreds assigment
function howManyHundreds (totalBottles) {
let num = 0;
num = totalBottles / 100;
let numOfBox = Math.floor(num);
return numOfBox;
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);