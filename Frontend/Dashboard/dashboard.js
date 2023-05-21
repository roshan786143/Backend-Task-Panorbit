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
    // console.log(error.response.data.error);
    console.log(error);
    if (error.response.data.error === "Invalid token") {
      alert("Invalid Token");
      window.location.href = "../login/loginEmail.html";
    } else {
      console.log("Pls.check your internet connection");
    }
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

  let cities = filteredSuggestions.cities;
  let countries = filteredSuggestions.countries;
  let languages = filteredSuggestions.languages;

  if(!Array.isArray(cities)){
    cities = []
  }

  if(!Array.isArray(countries)){
    countries = []
  }

  if(!Array.isArray(languages)){
    languages = []
  }

  console.log(cities);
  console.log(countries);
  console.log(languages);

  const array = [...cities, ...languages];

  if ([...cities, ...countries, ...languages].length === 0) {
    searchResults.style.visibility = "hidden";
    return;
  }

  countries.forEach(function (suggestion) {
    const li = document.createElement("li");
    const link = document.createElement("a");
    // link.href = `country-details.html?country=${encodeURIComponent(
    //   suggestion
    // )}`;
    link.textContent = suggestion;
    // console.log(suggestion);
    // console.log(link);
    // link.setAttribute('id','coountry-link');
    link.addEventListener('click',()=>{
        // alert(suggestion);
        localStorage.setItem('country',suggestion);
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
