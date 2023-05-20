let submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  let otpInput = document.getElementById("otpInput").value;
  console.log(otpInput);
  try {
    const response = await axios.post("http://127.0.0.1:3000/api/validateOtp", {
      otpInput,
    });
    console.log(response);
    console.log(response.data.msg);
    // alert("login successful");
    if (response.data.msg === "Success") {
      alert("login successful");
      window.location.href = "../Dashboard/dashboard.html";
      localStorage.setItem("Token", response.data.token);
    } else {
      alert("Wrong Otp Entered");
      // window.location.href = './loginEmail.html';
    }
  } catch (error) {
    console.log(error);
    console.log("Pls.enter the valid otp");
  }
});
