/* The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

For example, this can be useful when:

    Clicking on a "Submit" button, prevent it from submitting a form
    Clicking on a link, prevent the link from following the URL

Note: Not all events are cancelable. Use the cancelable property to find out if an event is cancelable.

Note: The preventDefault() method does not prevent further propagation of an event through the DOM. Use the stopPropagation() method to handle this. 
 document.getElementById("myAnchor").addEventListener("click", function(event){
  event.preventDefault()
});
*/


/* 
JavaScript Example
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
<button type="button" onclick="myFunction()">Submit</button>

<p id="demo"></p>

<script>
function myFunction() {
  // Get the value of the input field with id="numb"
  let x = document.getElementById("numb").value;
  // If x is Not a Number or less than one or greater than 10
  let text;
  if (isNaN(x) || x < 1 || x > 10) {
    text = "Input not valid";
  } else {
    text = "Input OK";
  }
  document.getElementById("demo").innerHTML = text;
}
The function can be called when the form is submitted:
HTML Form Example
<form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
Name: <input type="text" name="fname">
<input type="submit" value="Submit">
</form>  */



// Given the following Array of employee objects
const employeeList = [
  {
      name: "Amy",
      scores: []
  },
  {
      name: "Beth",
      scores: []
  },
  {
      name: "Chuck",
      scores: []
  },
  {
      name: "Dave",
      scores: []
  },
  {
      name: "Eric",
      scores: []
  },
  {
      name: "Fran",
      scores: []
  },
  {
      name: "Gina",
      scores: []
  },
  {
      name: "Henry",
      scores: []
  }
];

// PART I - Populate Array (EXISTING array, not a new array)
// Write code to populate the employee's scores.
// Notes:
//   Employees must take at least 3 tests
//   Employees may take 7 tests
//  
// Task
// For each employee, generate a random number between 3 and 7 (number of tests taken)
//   For each test, assign a random score between 61 and 100
//
// Example:
//   Assume Amy took 4 tests.  The result for Amy may look as follows:
//    {
//      name: "Amy",
//      scores: [75, 98, 82, 93]
//    },

// Hint (Use a nested loop: outer and inner loops):
//  Loop through the employeeList Array
//    For each iteration, generate a random number between 3 to 7 (number of tests)
//    Iterate through the number of tests, adding a value to the scores between 61 and 100.

//  ----YOUR CODE HERE----
for(let i=0; i<employeeList.length;i++){
  for(let j=0; j< 3+ Math.floor(Math.random() * 6);j++){
    var rand = 60 + Math.floor(Math.random() * 41);
  
  employeeList[i].scores[j] = rand;
  }
console.log(employeeList[i]);
}
// You could use the following to test the updated array:
// console.log(employeeList);

// PART II - Summary Data (Create a NEW array)
// Create an array of objects, each object containing the following:
//  name
//  scores
//  numberOf Tests
//  avgScore
//  minScore

// Notes
//   - You must use array methods (map, reduce, filter)
//   - DO NOT write a traditional loop with indexes, forEach loop, or for-of loop
//   - You may use functions (not required)

// Sample object for "Amy" 
//  This is just an example, your values will vary depending on number of tests and test scores
//   As above, Assume Amy took 4 tests
//    {
//      name: "Amy",
//      scores: [75, 98, 82, 93],
//      numberOfTests: 4,
//      avgScore: 87,
//      minScore: 75
//    },

//  ----YOUR CODE HERE----
const newArray = employeeList.map(obj => ({...obj}));
console.log(newArray);
/* for(let i=0; i<employeeList.length;i++){
var numberOfTests = employeeList.filter(employeeList[i].scores);
} */
/* let sum = newArray.reduce((Sum, a) => Sum + a, 0);
console.log(sum); */

//avgScore = 
//console.log(numberOfTests);
for (let i = 0; i < newArray.length; i++) {

      let minScore = newArray[i].scores[0], maxScore = newArray[i].scores[0]; 
      
      let avgScore = 0;

      let sum = 0;
for (let j = 0; j < newArray[i].scores.length; j++) {

  let val = newArray[i].scores[j];

  sum += val;

  if (val < minScore)

      minScore = val;

  if (maxScore < val)

      maxScore = val;



avgScore = sum / newArray[i].scores.length;

newArray.minScore = (minScore);


newArray.avgScore = (avgScore);
  }
}

// You could use the following to test the updated list:
// console.log(yourArrayName);

// PART III - Output the results
//  Output the summarized data to the console.  Must use the following format:
//  (this is not a single line console.log(yourArrayName))
//  Hint: Loop through the array
// Name: Amy
// Scores: 75, 98, 82, 93
// Number of tests: 4
// Average score: 87
// Min score: 75
// ***************************
//
// Note:  Include the *************************** after each employee
for (let i = 0; i < employeeList.length; i++) {
newArray.forEach(myFunc);

function myFunc(){
  newArray.star ='***************************';
}}