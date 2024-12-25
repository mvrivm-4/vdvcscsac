// Get all accordion buttons
var accordions = document.getElementsByClassName("accordion");

// Add event listener to each accordion button
for (var i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function() {
        // Toggle the "active" class
        this.classList.toggle("active");

        // Get the next element (the panel that holds the answer)
        var panel = this.nextElementSibling;

        // Toggle between showing and hiding the panel
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validate input fields
    if (username === "" || password === "") {
        document.getElementById("error-message").textContent = "Please fill in all fields.";
    } else {
        // Here you can send the data to the server to verify the credentials
        // For example, make an API call to validate user credentials
        console.log("Username:", username);
        console.log("Password:", password);

        // Example of a success message
        alert("Login successful!");
    }
});

function openNav() {
    document.getElementById("mySideNav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySideNav").style.width = "0";
}