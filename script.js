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
const facts = [

"Paarden herkennen mensen aan hun stem en gezicht.",
"Een paard heeft een bijna 360-graden gezichtsveld.",
"Veulens kunnen binnen uren na geboorte al lopen.",
"Paarden communiceren met oren, ogen en houding.",
"De tanden van een paard blijven hun leven groeien.",
"Een paard drinkt ongeveer 38 tot 45 liter water per dag.",
"Wilde paarden bestaan nog steeds in bepaalde wereldgebieden.",
"Paarden hebben een beter geheugen dan olifanten.",
"Het oudste geregistreerde paard leefde tot 62 jaar.",
"Paarden kunnen emoties van andere paarden nabootsen.",
"Paarden zweten net zoals mensen om af te koelen.",
"Een groep paarden wordt een kudde genoemd.",
"Paarden hebben een ongelooflijk krachtig perifeer zicht.",
"De hoefijzers van paarden moeten regelmatig worden vervangen.",
"Paarden kunnen niet overgeven door de bouw van hun maag.",
"De snelheid van een galopperend paard kan 44 km/u bereiken.",
"Paarden hebben ongeveer 205 botten in hun lichaam.",
"Een paard kan kort na de geboorte al zien.",
"Paarden kunnen direct na de geboorte staan en lopen.",
"De hartslag van een rustend paard is 30 tot 40 slagen per minuut."
  // Voeg meer weetjes toe
];

function showFact() {
  const factIndex = Math.floor(Math.random() * facts.length);
  document.getElementById("fact").innerText = facts[factIndex];
}

let currentIndex = 0;

const horses = [
    { name: "Fries", description: "Een elegant en krachtig paard uit Friesland.", image: "fries.jpg" },
    { name: "Arabier", description: "Bekend om hun uithoudingsvermogen en snelheid.", image: "arabier.jpg" },
    { name: "Shetlandpony", description: "Een klein maar sterk paardenras.", image: "shetland.jpg" },
	{ name: "Andalusisch paard", description: "Een edel en temperamentvol paardenras uit Spanje.", image: "andalusier.jpg" },
	{ name: "Haflinger", description: "Een robuust en betrouwbaar paardenras uit de bergen van Oostenrijk en Italië.", image: "haflinger.jpg" },
	{ name: "Fjord", description: "Een sterk en stoer paardenras uit Noorwegen, herkenbaar aan zijn karakteristieke gestreepte manen.", image: "fjord.jpg" },
	{ name: "Clydesdale", description: "Groot en sterk trekpaard, oorspronkelijk afkomstig uit Schotland.", image: "clydesdale.jpg" },
    // Voeg meer paardenrassen toe
];

function changeHorse(direction) {
    currentIndex += direction;
    if (currentIndex >= horses.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = horses.length - 1;
    }
    document.getElementById('horseImage').src = horses[currentIndex].image;
    document.getElementById('horseName').innerText = horses[currentIndex].name;
    document.getElementById('horseDescription').innerText = horses[currentIndex].description;
}

// Initialiseer de eerste weergave
changeHorse(0);

