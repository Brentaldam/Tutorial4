// Given the following Array of employee objects
const employeeScores = [
    {
      fname: 'Amy',
      lname: 'Adams',
      scores: [90, 95, 100],
      numberOfTests: 3,
      avgScore: 95,
      minScore: 90
    },
    {
      fname: 'Beth',
      lname: 'Anderson',
      scores: [74, 87, 99, 83, 95, 97, 95],
      numberOfTests: 7,
      avgScore: 90,
      minScore: 74
    },
    {
      fname: 'Chuck',
      lname: 'Choi',
      scores: [89, 83, 65, 67, 89],
      numberOfTests: 5,
      avgScore: 78.6,
      minScore: 65
    },
    {
      fname: 'Dave',
      lname: 'Chambers',
      scores: [100, 98, 83, 65, 78, 65],
      numberOfTests: 6,
      avgScore: 81.5,
      minScore: 65
    },
    {
      fname: 'Eric',
      lname: 'Edelman',
      scores: [96, 78, 91, 70, 80],
      numberOfTests: 5,
      avgScore: 83,
      minScore: 70
    },
    {
      fname: 'Fran',
      lname: 'Edison',
      scores: [100, 88, 76, 67],
      numberOfTests: 4,
      avgScore: 82.75,
      minScore: 67
    },
    {
      fname: 'Gina',
      lname: 'Gonzalez',
      scores: [94, 93, 98, 64, 66],
      numberOfTests: 5,
      avgScore: 83,
      minScore: 64
    },
    {
      fname: 'Henry',
      lname: 'Heart',
      scores: [61, 64, 69, 76],
      numberOfTests: 4,
      avgScore: 67.5,
      minScore: 61
    }
  ];
  
  // Given the following array of average score options (used to populate drop down list options)
  const avgScoreOptions = [60, 70, 80, 90];
  
  //  ----YOUR CODE HERE----
  
  // Hints:
  // 1. Populate drop down options
  // 2. Write a generic Display Function
  //     Input: The array to display
  //     Return: Nothing
  //     Task: Display results to the HTML page
  //     You can test it with the full array
  // 3. Write code to handle displaying scores for last name criterion (clicking the Display button)
  //    - Generate a filtered array meeting criterion in the text box
  //        I recommend using array methods rather than a loop
  //    - Send the filtered array to the generic display function
  // 4. Write code to handle displaying scores for average score criterion (selecting an average)
  //    - Generate a filtered array meeting the selected criterion
  //        I recommend using array methods rather than a loop
  //    - Send the filtered array to the generic display function