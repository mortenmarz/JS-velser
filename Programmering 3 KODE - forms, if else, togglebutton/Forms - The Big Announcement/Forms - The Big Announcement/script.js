// VARIABLE:
// - Til <p> så vi kan putte HTML ind i den. Kald den 'p_output'.
// - Til knappen, så vi kan gøre den trykbar.
// - Til inputfeltet, så vi kan hente indholdet af den.

// EVENT LISTENER:
// Knappen skal have en onclick event listener og kalde funktionen "visBesked"

// FUNCTIONS / EVENT HANDLERS:
// Opret funktionen visBesked, der putter indholdet af inputfeltet ind i <p>
// Du kan bruge denne kode:     
//      p_output.innerHTML = besked.value;

// VARIABLE:
// Hent elementer fra DOM
const p_output = document.getElementById('p_output');
const sendButton = document.getElementById('send');
const beskedInput = document.getElementById('besked');

// EVENT LISTENER:
// Tilføj en click event listener til knappen
sendButton.addEventListener('click', visBesked);

// FUNCTIONS / EVENT HANDLERS:
// Funktion der viser beskeden
function visBesked() {
    p_output.innerHTML = beskedInput.value;
}