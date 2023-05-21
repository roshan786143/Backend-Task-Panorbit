const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

// Event listener for search button click
// searchButton.addEventListener("click", async function () {
//   const searchTerm = searchInput.value.toLowerCase();
//   try {
//     const { data } = await axios.get(
//       `http://127.0.0.1:3000/api/search/${searchTerm}`
//     );
//     showSuggestions(data.msg);
//   } catch (error) {
//     console.log(error);
//   }
// });

// Event listener for input changes
searchInput.addEventListener("input", async function () {
    const searchTerm = searchInput.value.toLowerCase();
    const token = localStorage.getItem('Token');
    try {
      const { data } = await axios.get(
        `http://127.0.0.1:3000/api/search/${searchTerm}`,
        {
          headers: {
            Authorization: `${token}`
          }
        }
      );
      showSuggestions(data.msg);
    } catch (error) {
      console.log(error);
      alert('Invalid Token');
      window.location.href = '../login/loginEmail.html';
    }
  });
  

// Event listener for click on search results
// searchResults.addEventListener("click", function (event) {
//   if (event.target && event.target.matches("li")) {
//     const selectedValue = event.target.textContent;
//     searchInput.value = selectedValue;
//     console.log("Selected:", selectedValue);
//   }
// });

// Event listener for Enter key press
// searchInput.addEventListener("keydown", function (event) {
//   if (event.key === "Enter") {
//     const searchTerm = searchInput.value;
//     console.log(searchTerm);
//   }
// });

// Display the suggestions in the dropdown
function showSuggestions(filteredSuggestions) {
  searchResults.innerHTML = "";

  if (!Array.isArray(filteredSuggestions) || filteredSuggestions.length === 0) {
    searchResults.style.display = "none";
    return;
  }

  filteredSuggestions.forEach(function (suggestion) {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.href = `country-details.html?country=${encodeURIComponent(
      suggestion
    )}`;
    link.textContent = suggestion;
    li.appendChild(link);
    searchResults.appendChild(li);
  });

  searchResults.style.display = "block";
  searchResults.firstChild.classList.add("active");
}

const logoutButton = document.getElementById("logout-button");

logoutButton.addEventListener("click", function () {

    console.log("Logout button clicked");
    localStorage.removeItem('Token');
    window.location.href = '../login/loginEmail.html';
});