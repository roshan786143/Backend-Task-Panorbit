// Sample data for autosuggestion
const suggestions = [
    { value: 'New York', category: 'City' },
    { value: 'London', category: 'City' },
    { value: 'Paris', category: 'City' },
    { value: 'Tokyo', category: 'City' },
    { value: 'United States', category: 'Country' },
    { value: 'United Kingdom', category: 'Country' },
    { value: 'France', category: 'Country' },
    { value: 'Japan', category: 'Country' },
    { value: 'English', category: 'Language' },
    { value: 'French', category: 'Language' },
    { value: 'Spanish', category: 'Language' },
  ];
  
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  
  // Event listener for input changes
  searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredSuggestions = suggestions.filter(function(suggestion) {
      return suggestion.value.toLowerCase().startsWith(searchTerm);
    });
  
    showSuggestions(filteredSuggestions);
  });
  
  // Event listener for click on search results
  searchResults.addEventListener('click', function(event) {
    if (event.target && event.target.matches('li')) {
      const selectedValue = event.target.textContent;
      searchInput.value = selectedValue;
      clearSuggestions();
      // Perform search or other action based on selected value
      console.log('Selected:', selectedValue);
    }
  });
  
  // Event listener for Enter key press
  searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      const searchTerm = searchInput.value;
      // Call your backend API with the search term
      callBackendAPI(searchTerm);
    }
  });
  
  // Display the suggestions in the dropdown
  function showSuggestions(filteredSuggestions) {
    clearSuggestions();
  
    if (filteredSuggestions.length === 0) {
      return;
    }
  
    filteredSuggestions.forEach(function(suggestion) {
      const li = document.createElement('li');
      li.textContent = suggestion.value;
      searchResults.appendChild(li);
    });
  
    searchResults.firstChild.classList.add('active');
  }
  
  // Clear the suggestion dropdown
  function clearSuggestions() {
    searchResults.innerHTML = '';
  }
  
  // Call your backend API with the search term using Axios
  function callBackendAPI(searchTerm) {
    // Replace the API endpoint with your actual backend API endpoint
    const endpoint = 'https://jsonplaceholder.typicode.com/comments';
  
    // Make a request to your backend API using Axios
    axios.get(endpoint, { params: { q: searchTerm } })
      .then(response => {
        // Process the response from the backend API
        const data = response.data;
        console.log('API response:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  