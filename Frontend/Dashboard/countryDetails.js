document.addEventListener("DOMContentLoaded", function () {
  // Get the stored country and token from localStorage
  const country = localStorage.getItem("country");

  const token = localStorage.getItem("Token");
  // Make a POST request to fetch country details
  axios
    .post(
      `http://127.0.0.1:3000/api/country`,
      { country },
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    )
    .then((res) => {
      let keys = Object.keys(res.data.msg[0]);
      let details = document.getElementById("details");

      // Loop through the keys and create table rows dynamically
      for (let i = 0; i < keys.length; i++) {
        let row = document.createElement("tr");

        let columnKey = document.createElement("td");
        columnKey.textContent = keys[i];
        row.appendChild(columnKey);

        let columnValue = document.createElement("td");
        columnValue.textContent = res.data.msg[0][keys[i]];
        row.appendChild(columnValue);

        details.appendChild(row);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

const logoutButton = document.getElementById("logout-button");

logoutButton.addEventListener("click", function () {
  // Handle logout button click event
  localStorage.removeItem("Token");
  window.location.href = "../login/loginEmail.html";
});
