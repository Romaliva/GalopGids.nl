function searchSite() {
    var input = document.getElementById('searchInput').value.toLowerCase();
    var output = document.getElementById('searchResults');
    var foundIn = document.querySelectorAll('p'); // Zoek in alle <p>-tags, pas dit aan voor andere elementen

    output.innerHTML = ''; // Maak de vorige zoekresultaten leeg

    // Doorloop alle gevonden elementen
    foundIn.forEach(function(item) {
        if(item.textContent.toLowerCase().includes(input)) {
            var resultItem = document.createElement('div');
            resultItem.classList.add('search-result');
            resultItem.textContent = item.textContent;
            output.appendChild(resultItem);
        }
    });

    if(output.innerHTML === '') {
        output.innerHTML = '<p>Geen resultaten gevonden.</p>';
    }
}