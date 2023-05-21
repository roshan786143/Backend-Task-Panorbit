const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

// Event listener for input changes
searchInput.addEventListener("input", async function () {
  const searchTerm = searchInput.value.toLowerCase();
  const token = localStorage.getItem("Token");
  try {
    const { data } = await axios.get(
      `http://127.0.0.1:3000/api/search/${searchTerm}`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    showSuggestions(data);
  } catch (error) {
    console.log(error);
    if (error.response.data.error === "Invalid token") {
      alert("Invalid Token");
      window.location.href = "../login/loginEmail.html";
    } else {
      console.log("Please check your internet connection");
    }
  }
});

// Display the suggestions in the dropdown
function showSuggestions(filteredSuggestions) {
  searchResults.innerHTML = "";

  let cities = Array.isArray(filteredSuggestions.cities) ? filteredSuggestions.cities : [];
  let countries = Array.isArray(filteredSuggestions.countries) ? filteredSuggestions.countries : [];
  let languages = Array.isArray(filteredSuggestions.languages) ? filteredSuggestions.languages : [];

  const array = [...cities, ...languages];

  if (array.length === 0) {
    searchResults.style.visibility = "hidden";
    return;
  }

  countries.forEach(function (suggestion) {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.textContent = suggestion;
    link.addEventListener('click', () => {
      localStorage.setItem('country', suggestion);
      window.location.href = './countryDetails.html';
    })
    li.appendChild(link);
    li.style.cursor = "pointer";
    searchResults.appendChild(li);
  });

  array.forEach(function (suggestion) {
    if (suggestion != undefined) {
      const li = document.createElement("li");
      li.textContent = suggestion;
      searchResults.appendChild(li);
    }
  });

  searchResults.style.visibility = "visible";
  searchResults.firstChild.classList.add("active");
}

const logoutButton = document.getElementById("logout-button");

logoutButton.addEventListener("click", function () {
  console.log("Logout button clicked");
  localStorage.removeItem("Token");
  window.location.href = "../login/loginEmail.html";
});