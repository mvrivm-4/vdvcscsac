document.getElementById("loginForm").addEventListener("submit", function (event) {
          event.preventDefault(); // Prevent form submission

          // Get input values
          const firstName = document.getElementById("firstName").value;
          const lastName = document.getElementById("lastName").value;
          const username = document.getElementById("username").value;
          const password = document.getElementById("password").value;

          // Validate input fields
          if (firstName === "" || lastName === "" || username === "" || password === "") {
                    document.getElementById("error-message").textContent = "Please fill in all fields.";
          } else {
                    // Here you can send the data to the server to verify the credentials
                    // For example, make an API call to validate user credentials
                    console.log("First Name:", firstName);
                    console.log("Last Name:", lastName);
                    console.log("Username:", username);
                    console.log("Password:", password);

                    // Example of a success message
                    alert("Login successful!");
          }
});
