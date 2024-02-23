const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

const clients = ['Cliente 1', 'Cliente 2', 'Cliente 3', 'Cliente 4', 'Cliente 5'];

searchInput.addEventListener('input', function() {
  const inputValue = this.value.toLowerCase();
  const filteredClients = clients.filter(client => client.toLowerCase().includes(inputValue));
  displayResults(filteredClients);
});

function displayResults(results) {
  searchResults.innerHTML = '';
  results.forEach(result => {
    const li = document.createElement('li');
    li.textContent = result;
    li.addEventListener('click', function() {
      searchInput.value = result;
      searchResults.innerHTML = '';
    });
    searchResults.appendChild(li);
  });
}
