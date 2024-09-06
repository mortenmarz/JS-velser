/* VARIABLE:*/
/* 
Opret en variabel, der tager fat i modalet. 
Du kan bruge document.querySelector("div") til at få fat i den første div, der dukker op, i stedet for at bruge id.
Brug 'const', fordi elementet ikke kommer til at ændre sig.
*/

const modal = document.querySelector("div");

/* EVENT LISTENERS: */
/*
Lav en event listener med onclick, der kalder en funktion med navnet 'lukModal'
*/

modal.onclick = lukModal;

/* FUNCTIONS / EVENT HANDLERS: */
/*
Lav funktionen 'lukModal', der bruger style.display = "none" til at fjerne modalet helt fra HTML.
*/

function lukModal() {
    modal.style.display = "none";
}

/* Velkomsttekst: */
/* VARIABLE TIL OVERSKRIFT OG BRØDTEKST */
/*
Opret variable, der tager fat i h1 og p i modalet. Du kan bruge variabelnavnene 'h1_overskrift' og 'p_takketekst' så du kan se, det er HTML tags, de peger på.
Brug document.querySelector("div h1") og ("div p").
*/

const h1_overskrift = document.querySelector("div h1");
const p_takketekst = document.querySelector("div p");

/* TEKSTSTRENGE: */
// - Opret en stringvariabel med dit navn som indhold. Brug 'let' og kald den 'navn'.

let navn = "Fissehans";  // Erstat med dit eget navn

// - Lav en stringvariabel med indholdet til overskriften. Brug igen let og skriv en god overskrift. Du kan give variablen dette navn: "txt_overskrift".

let txt_overskrift = "Nøj for et køb!";

// - Lav en stringvariabel med en takketekst, der tilføjer indholdet af variablen 'navn' således: "Tak for dit køb " + navn +"!". Du kan give variablen dette navn: "txt_takketekst".

let txt_takketekst = "Vi er glade for dine penge, " + navn + "! Vi håber, du bliver skuffet. Get scammed bitch.";

// - Brug innerHTML til at indsætte de to tekster i HTML.

h1_overskrift.innerHTML = txt_overskrift;
p_takketekst.innerHTML = txt_takketekst;

// - Lav derefter en numbervariabel med en samlet pris (kopier kode fra tidligere opgave) og vis hvor meget, der blev købt for.

const pris1 = 1336;
const pris2 = 1;
const samletPris = pris1 + pris2;

// Tilføj information om den samlede pris til takketeksten
p_takketekst.innerHTML += "<br><br>Du har købt for i alt " + samletPris + " kr.";