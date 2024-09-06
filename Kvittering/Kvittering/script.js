// Dette henter dato og tid 1 gang og putter det i en variabel:
const dato = new Date();
// Her tages fat i <p> med id'et 'dato':
const p_dato = document.getElementById("dato");
// Her skrives indholdet af variablen 'dato' ind i <p>:
p_dato.innerHTML = dato;

// VARIABLE:

// - Opret en variabel, der henter <p id="beloeb">. Brug const.

const p_beloeb = document.getElementById("beloeb");

// - Opret en numbervariabel med navnet 'pris1' og sæt den til et eller andet tal.

const pris1 = 1336;

// - Opret en numbervariabel til med navnet 'pris2' og sæt også den til et tal.

const pris2 = 1;

// - Opret en variabel med navnet 'samletPris' og gør den lig med pris1 + pris2.

const samletPris = pris1 + pris2;

// - Skriv indholdet af variablen 'samletPris' i <p id="beloeb"> med innerHTML.

p_beloeb.innerHTML = samletPris + " kr"; // Bruger toFixed(2) for at begrænse til 2 decimaler
