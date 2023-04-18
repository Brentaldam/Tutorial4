const employees = [
  {
    firstName: 'Amy',
    lastName: 'Adams',
    countries: ['Aruba', 'Austrailia', 'Argentina'],
    numberOfCountries: 3,
    numberOfTravelers: 4,
    totalCost: 32500
  },
  {
    firstName: 'Beth',
    lastName: 'Anderson',
    countries: ['Belize', 'Belgium', 'Barbados', 'Belarus'],
    numberOfCountries: 4,
    numberOfTravelers: 5,
    totalCost: 41000
  },
  {
    firstName: 'Chuck',
    lastName: 'Choi',
    countries: ['Canada', 'Cambodia', 'Cameroon'],
    numberOfCountries: 3,
    numberOfTravelers: 2,
    totalCost: 16300
  },
  {
    firstName: 'Dave',
    lastName: 'Chambers',
    countries: ['Denmark'],
    numberOfCountries: 1,
    numberOfTravelers: 1,
    totalCost: 4250
  },
  {
    firstName: 'Eric',
    lastName: 'Edelman',
    countries: ['Ecuador', 'Egypt', 'El Salvador'],
    numberOfCountries: 3,
    numberOfTravelers: 2,
    totalCost: 19750
  },
  {
    firstName: 'Fran',
    lastName: 'Edison',
    countries: ['Finland', 'France'],
    numberOfCountries: 2,
    numberOfTravelers: 3,
    totalCost: 23500
  },
  {
    firstName: 'Gina',
    lastName: 'Gonzalez',
    countries: ['Germany', 'Greece'],
    numberOfCountries: 2,
    numberOfTravelers: 4,
    totalCost: 26000
  },
  {
    firstName: 'Henry',
    lastName: 'Heart',
    countries: ['Hungary'],
    numberOfCountries: 1,
    numberOfTravelers: 1,
    totalCost: 3250
  }
];

const totalCostOptions = [10000, 20000, 30000, 999999];

// Get the output div element
const outputDiv = document.getElementById("output");

// Populate drop down options for average TotalCost filter
const filterTotalCostSelect = document.getElementById("filterTotalCost");
const uniqueTotalCosts = [...new Set(employees.map(object => object.totalCost))];
uniqueTotalCosts.sort((a, b) => a - b);
uniqueTotalCosts.forEach(TotalCost => {
  let i =0;
  const option = document.createElement("option");
  option.value = TotalCost;
  option.textContent = `${totalCostOptions}`;

  filterTotalCostSelect.appendChild(option);
  
});


function displayResults(arr) {
  outputDiv.innerHTML = "";
  arr.forEach(object => {
      const para = document.createElement("p");
      para.textContent = `First Name: ${object.firstName}, LastName: ${object.lastName}, Total Cost: ${object.totalCost}`;
      outputDiv.appendChild(para);
  });
}

// Handle displaying last name 
const btnFilterLastName = document.getElementById("btnFilterLastName");
const filterLastNameInput = document.getElementById("filterLastName");
btnFilterLastName.addEventListener("click", function() {
  const filterLastName = filterLastNameInput.value.trim();
  const filteredArray = employees.filter(object => object.lastName.toLowerCase() === filterLastName.toLowerCase());
  displayResults(filteredArray);
});

// Handle displaying TotalCosts for Travel Cost
const btnFilterTotalCost = document.getElementById("btnFilterTotalCost");
filterTotalCostSelect.addEventListener("change", function() {
  const filterTotalCost = Number(filterTotalCostSelect.value);
  const filteredArray = employees.filter(object => object.totalCost >= filterTotalCost);
  displayResults(filteredArray);
});