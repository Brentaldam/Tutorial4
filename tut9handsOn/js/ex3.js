// Anonymous function for retrieving and displaying a random beer
const grabRandomBeer = () => {
  // Fetching random beer data from API
  fetch("https://api.punkapi.com/v2/beers/random")
    .then(response => response.json())
    .then(beers => {
      // API returns an array containg only one element: we get it
      const beer = beers[0];
      // Creating DOM element for some beer properties
      const nameElement = document.createElement("h2");
      nameElement.textContent = beer.name;
      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = beer.description;

      // Ex 3 Added
      // Create a paragraph and add the ABV, volum, and first brewed
      // test
      //console.log(beer.volume); // Returns an object
      //console.log(beer.volume.value); // Return the value
      const additionalInfoElement = document.createElement("p");
      additionalInfoElement.textContent = `Alcohol By Volume: ${beer.abv}. Volume: ${beer.volume.value} ${beer.volume.unit}.  First brewed on ${beer.first_brewed}`;

      // Clear previous beer data
      const beerElement = document.getElementById("beer");
      beerElement.innerHTML = "";
      // Add beer info to the page
      beerElement.appendChild(nameElement);
      beerElement.appendChild(descriptionElement);
      beerElement.appendChild(additionalInfoElement);
    })
    .catch(err => {
      console.error(err.message);
    });
};

// Grab a new beer when clicking the button
document.getElementById("grabButton").addEventListener("click", grabRandomBeer);