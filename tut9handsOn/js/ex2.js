fetch(
  "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/languages.txt"
)
  .then(response => response.text()) // Access and return response's text content
  .then(text => {
    //console.log(text); // Display file content in the console
    // Convert the string to an array using split on ";"
    // Loop through the array creating a li for each element
    //  then add it to the ul
    const languages = text.split(";");
    // Test
    //console.log(languages);
    languages.forEach(language => {
      // Create an li element and assign text
      const liElement = document.createElement("li");
      liElement.textContent = language;
      // Add it to the ul in the html page
      document.getElementById("languageList").appendChild(liElement);
    })
  })
  .catch(err => {
    // Test by changing the URL
    //console.log(err.message)
    // Place the error in the body element
    // Can create a Paragraph (or other element) and append or simply use a text node
    document.body.appendChild(document.createTextNode(err.message)); 
  }); 
