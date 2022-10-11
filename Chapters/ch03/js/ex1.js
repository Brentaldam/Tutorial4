// Validate data entry
// Don't convert input to a Number upon entry so you can display it to the user
//  Test the following:
//  - Remove the comment from line 10 and comment out line 11 
//    That is, keep the Number conversion.
//    When running the program, enter a text: e.g. "Hello" istead of a number.
//    Note that the Number("Hello") = NaN, this will be shown in the console.
//    You can use isNaN to validate that a number was entered

// const inNumber = Number(prompt("Enter a number:"));  //Test - Remove this comment
const inNumber = prompt("Enter a number:"); // Test - Comment this line
console.log(inNumber);  //If you convert to a Number and text is extered, you'll see NaN

if (isNaN(inNumber)) {
  console.log(`You entered ${inNumber}.  That is not a valid number.  Try again!!!`)
} else {
  // Convert to a number
  number = Number(inNumber);

  if (number > 0) {
    console.log(`${number} is positive`);
  } else if (number < 0) {
    console.log(`${number} is negative`);
  } else {
    console.log(`${number} is zero`);
  }

}