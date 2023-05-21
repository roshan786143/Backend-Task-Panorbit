// Get the signup button element
let signupBtn = document.getElementById("signupBtn");

// Add a click event listener to the signup button
signupBtn.addEventListener("click", async (event) => {
  event.preventDefault(); // Prevent form submission

  // Get the form input values
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  let gender = document.getElementById("gender").value;
  
  // Create a user object with the input values
  const user = { firstName, lastName, email, phoneNumber, gender };
  console.log(user);

  try {
    // Send a POST request to the server with the user data
    const response = await axios.post("http://127.0.0.1:3000/api/signup", user);
    console.log(response);
    console.log(response.data.msg);

    // Handle the response
    if (response.data.msg === "Success") {
      // If signup is successful, show a success message and redirect to the login page
      setTimeout(() => {
        alert("Signup successful");
        window.location.href = "../login/loginEmail.html";
      }, 2000);
    } else {
      // If the email is already in use, show an error message
      alert("Email already in use. Please use another email.");
    }
  } catch (err) {
    console.log(err);
    console.log("An error occurred while posting the user signup details");
  }
});
