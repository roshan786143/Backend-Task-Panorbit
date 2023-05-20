let loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  let email = document.getElementById("email").value;
  console.log(email);
  try {
    const response = await axios.post("http://127.0.0.1:3000/api/sendOtp", {
      email,
    });
    console.log(response);
    setTimeout(() => {
      alert("OTP sent to your email succussfully");
      window.location.href = "./loginOtp.html";
    }, 2000);
  } catch (error) {
    console.log(error);
    console.log("There's an error while posting the data");
  }
});
