//simple conditionals
const temperature = 15;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

//Logical operators example
//ex 1
const isCitizen = true;
const age = 27;

if (isCitizen && age>18) {
  console.log("You are eligible to vote")
}

//Ex 2
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}
//Ex 3 
let raining = false

if (!raining) {
  console.log("Leave your umbrella at home!");
}

//whichschool example
const whichSchool  = function (age) {
  if (age < 13) {
    return "Elementary School"
  } else if ((age >= 13) && (age <= 18)) {
    return "Secondary School";
  } else if (age>18) {
    return "Lighthouse Labs";
  }
}


console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));