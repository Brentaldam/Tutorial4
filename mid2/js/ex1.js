// Given the following Array of employee objects
const employees = [
  {
      name: "Alan",
      examScores: []
  },
  {
      name: "Betty",
      examScores: []
  },
  {
      name: "Cindy",
      examScores: []
  },
  {
      name: "Dana",
      examScores: []
  },
  {
      name: "Ellen",
      examScores: []
  },
  {
      name: "Frank",
      examScores: []
  },
  {
      name: "Glenda",
      examScores: []
  },
  {
      name: "Hank",
      examScores: []
  }
];

// PART I - Populate the EXISTING array.  Do NOT create a new array.
// Overview
// In order to obtain certification, employees must pass an exam with a minimum score of 90 (90 or higher)
// History shows that exam scores are uniformaly distributed between 50 and 100.
//
// Task
// Write code to populate the employee's exam scores.
// Notes:
//   For each employee, generate a random number between 50 and 100 (exam score)
//   Populate the employees score with the random number
//   Continue populating the employee scores until the employee earns a 90 or higher
//     (can be on the first attempt or may take multiple attempts)

// Example:
//   The result for Alan may look as follows (this is an example only, your results will vary):
//    {
//      name: "Alan",
//      examScores: [ 82, 65, 89, 71, 98 ]
//    },

//  ----YOUR CODE HERE----
employees.forEach(examScores => {
  
  console.log(examScores);
  employees.pop(getRandom(50,100));
});
function getRandom (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// You could use the following to test the updated array:
// console.log(employees);

// PART II - Drop the lowest score from the EXISTING array.  Do NOT create a new array.
// Overview
// If the employee did not pass the exam on the first attempt, you want to drop the lowest score
// This is done to improve employee attempts statistics
//
// Task
// For each employee, check the number of attempts (scores)
// If the number of attempts is greater than one, drop the lowest score
// Note:
//   Optional:
//     You may create a generic function to determine the lowest score of an array
//     since you will need to do this again below
//
// Example:
//   Using the example for Alan from above, the updated result is below
//     (this is an example only, your results will vary):
//    {
//      name: "Alan",
//      examScores: [ 82, 89, 71, 98 ]
//    },

//  ----YOUR CODE HERE----

// You could use the following to test the updated array:
// console.log(employees);

// PART III - Create a NEW Array with Summary Data / Use Array Functions
// Overview
// Use array functions to create a NEW ARRAY with summary data
// DO NOT use a traditional loop with indexes, forEach loop, or for-of loop
//
// Task
// Create an array of objects, each object containing the following:
//  name
//  examScores (this is an array)
//  numberOfAttempts
//  passingScore (this is the high score)
//  avgScore
//  minScore

// Notes
//   - You must use array methods (map, reduce, filter)
//   - DO NOT write a traditional loop with indexes, forEach loop, or for-of loop
//   - You may use functions (not required)

// Sample object for "Alan"
//  This is just an example, your values will vary depending on number of tests and test scores
//   Use Alan's scores from above
//    {
//      name: "Alan",
//      examScores: [ 82, 89, 71, 98 ],
//      numberOfTests: 4,
//      passingScore: 98
//      avgScore: 85,
//      minScore: 71
//    },

//  ----YOUR CODE HERE----

// You could use the following to test the updated array:
// console.log(yourArrayName);

// PART IV - Output the results / Custom Format
//  Output the summarized data to the console.  You must use the following format:
//  (this is not a single line console.log(yourArrayName))
//  Hint: Loop through the array
//
// Name: Alan
// Exam Scores: 82, 89, 71, 98
// Number of tests: 4
// Passing Score: 98.  Average Score: 85.  Min Score: 71
// *********************************************************
// Name: Betty
// ...
//
// Note:  Include the ********************************************************* after each employee

//  ----YOUR CODE HERE----
 