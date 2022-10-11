
var rollsLeft = 1000;
var count = 0;
var sum =0;
//console.log(`Occurence of 2's: ${}, reletive frequency of 2's is: ${} `)
// Simulate 1000 Craps rolls

// Declare an empty array (this will be used to store the sums of the rolls)
const craps = [];

// Write a loop to populate the array with the outcome of 1000 rolls.
//   Two dice are used for each roll
//   Each die produces a random number between 1 - 6
//   You need to generate two random numbers between 1 - 6 and add their values (the sum).
//   Add the sum (a value between 2 - 12 into the array)
//
//   When complete, your array will have 1000 elements each having
//     a value between 2 - 12

while(rollsLeft > 0)
{
   var x = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
   var y = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
   sum = x + y;
   var total = craps.push(sum);
   rollsLeft--;
   count++;
}

// Function - Return the number of occurrences of a craps roll
// Write a function per the following requirements:
// Input:  A digit between 2 - 12 (assume valid input)
// Return: The number of occurrences of that digit in the craps[] array
//
// No other tasks are performed by the function.
//   Failure to meet these requirements, even if the output is correct, will result in an incorrect solution

const occur = function(y){
    return o = craps.filter(x => x===y).length

}

// Display results to the console

// Generate a header as follows:
//  YourLastName Craps Simulation Statistics
//  e.g. Asher's Craps Simulation Statistics

console.log("Marriott's Craps Simutation Statistics");


// Write a loop to display the statistics for each possible outcome (Count and Relative Frequency)
//   See the requirements for output format.
//     You must use the format given in the requirements
//  
// Note:
//   Use the function you created to compute the count of each outcome
//   Calculate the relative frequency as follows:  (count / total number of rolls)
var relFreq = count / rollsLeft;
for(i=2;i<13;i++)
{

var freq = occur(i) / 1000;
console.log(`Occurence of ${i}'s: ${occur(i)}, reletive frequency of ${i}'s is: ${freq} `)
}




