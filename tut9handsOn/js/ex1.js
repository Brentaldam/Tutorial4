console.log("This code is before the fetch()");

fetch(
  "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/languages.txt"
)
  .then(response => response.text()) // Access and return response's text content
  .then(text => {
    //console.log(text); // Display file content in the console
    console.log("Second console.log() in fetch()", text); // Display file content in the console
  });


  console.log("This code is after the fetch()");