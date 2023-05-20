let signupBtn = document.getElementById("signupBtn");

signupBtn.addEventListener("click", async (event) => {
  event.preventDefault();

  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  let gender = document.getElementById("gender").value;
  
  const user = { firstName, lastName, email, phoneNumber, gender };
  console.log(user);
  try {
    const response = await axios.post("http://127.0.0.1:3000/api/signup", user);
    console.log(response);
    console.log(response.data.msg);
    if (response.data.msg === "Succuss") {
      setTimeout(() => {
        alert("signup successful");
        window.location.href = "../login/loginEmail.html";
      }, 2000);
    } else {
      alert("Email already in use,Pls.use another Email");
    }
  } catch (err) {
    console.log(err);
    console.log("There's an error while posting the user signup details");
  }
});
