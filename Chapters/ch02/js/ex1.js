// Experiment with scope
let num1 = 0;
{
  let num1 = 1; // OK : num1 is declared in the parent block
  console.log(num1);
  //const num2 = 0;
}
console.log(num1); // OK : num1 is declared in the current block
//console.log(num2); // Error! num2 is not visible here

// Use back tick for a template
let firstName = "John";
let lastName = "Smith";

console.log(`The full name is: ${firstName} ${lastName}`);

// Explicit conversion
const h = "5";
console.log(h + 1); // Concatenation: show the string "51"
const i = Number("5");
console.log(i + 1); // Numerical addition: show the number 6

// Test Input Output
// Commented out below to test a different use case with user input
// const userName = prompt("Please enter your first name");
// alert(`Hello, ${userName}`);

// Enter a number: must convert because all entries via the prompt are string

const favNumber = prompt("Enter your favorite number");
alert(`Your favorite number is: ${favNumber}, add two to it and you get ${favNumber + 2}`);
// Fix above by explicitly converting favNumber to a number
alert(`Your favorite number is: ${favNumber}, add two to it and you get ${Number(favNumber) + 2}`);


