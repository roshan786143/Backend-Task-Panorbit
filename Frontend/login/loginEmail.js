// Get the login button element
let loginBtn = document.getElementById("loginBtn");

// Add click event listener to the login button
loginBtn.addEventListener("click", async (event) => {
  event.preventDefault();

  // Get the email input value
  let email = document.getElementById("email").value;
  console.log(email);

  try {
    // Send a POST request to the server to send OTP
    const response = await axios.post("http://127.0.0.1:3000/api/sendOtp", {
      email,
    });
    console.log(response);

    // Show success message and redirect after a delay
    setTimeout(() => {
      alert("OTP sent to your email successfully");
      window.location.href = "./loginOtp.html";
    }, 2000);
  } catch (error) {
    console.log(error);
    console.log("There's an error while posting the data");
  }
});
