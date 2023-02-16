// Uses console.log to print statement 
const sayHello1 = function(name) {
  console.log("Hello, " + name);
}

sayHello1("Adam");

//Uses return in function then console.log outside the function
const sayHello2 = function(name) {
  //returns the string "Hello, Tara" to the variable sayHello
  return "Hello, " + name;
}

const greeting = sayHello2("Tara");
console.log(greeting)