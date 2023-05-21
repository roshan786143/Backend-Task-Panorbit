// Get the submit button element
let submitBtn = document.getElementById("submitBtn");

// Add an event listener to the submit button
submitBtn.addEventListener("click", async (event) => {
  event.preventDefault();

  // Get the OTP input value
  let otpInput = document.getElementById("otpInput").value;
  console.log(otpInput);

  try {
    // Send a POST request to validate the OTP
    const response = await axios.post("http://127.0.0.1:3000/api/validateOtp", {
      otpInput,
    });
    console.log(response);
    console.log(response.data.msg);

    // Check if the OTP validation is successful
    if (response.data.msg === "Success") {
      alert("Login successful");
      window.location.href = "../Dashboard/dashboard.html";
      localStorage.setItem("Token", response.data.token);
    } else {
      alert("Wrong OTP entered");
      // window.location.href = './loginEmail.html';
    }
  } catch (error) {
    console.log(error);
    console.log("Please enter a valid OTP");
  }
});
