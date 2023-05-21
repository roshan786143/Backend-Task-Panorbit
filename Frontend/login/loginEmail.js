// Get the login button element
const loginBtn = document.getElementById("loginBtn");

// Add click event listener to the login button
loginBtn.addEventListener("click", async (event) => {
  event.preventDefault();

  // Get the email input value
  const email = document.getElementById("email").value;

  try {
    // Send a POST request to the server to send OTP
    const response = await axios.post("http://127.0.0.1:3000/api/sendOtp", {
      email,
    });

    if (response.data.check === false) {
      alert("User Not Found, Please Sign up");
    } else {
      // Show success message and redirect after a delay
      setTimeout(() => {
        alert("OTP sent to your email successfully");
        window.location.href = "./loginOtp.html";
      }, 2000);
    }
  } catch (error) {
    console.log(error);
  }
});
