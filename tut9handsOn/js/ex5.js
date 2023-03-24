// Call the api when the form is submitted
document.querySelector("form").addEventListener("submit", e => {
  // Prevent default behavior
  e.preventDefault();
  // Test
  //console.log("form submitted");
  // Call the API with the form data
  const formData = new FormData(e.target);

  // TESTING to learn about the key/value pairs in formData
  // Method 1
  console.log("=============  METHOD 1 ==================");
  formData.forEach((val, key) => {
    console.log(`key: ${key}, val: ${val}`);
  });
  // Method 2
  console.log("=============  METHOD 2 ==================");
  for ([key, val] of formData.entries()) {
    console.log(`key: ${key} value: ${val}`);
  }


  fetch("https://thejsway-server.herokuapp.com/articles", {
    method: "POST",
    body: formData
  })
    .then(response => response.text())
    .then(feedback => {
      // Test
      //console.log(feedback);
      // Display feedback on the page
      // Paragraph already exists.  Change it's text content
      document.getElementById("result").textContent = feedback;

    })
})