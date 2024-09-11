// VARIABLE:
/*
- Til knappen
- Til menuen (vi skal vise og skjule den)

- En booleanvariabel (let, ikke const) med navnet menuSynlig. Skal sættes til false til at starte med.

*/

// EVENT LISTENERS:
/*
- Knappen skal kunne klikkes og starte funktionen 'visMenu'
*/

// EVENT HANDLERS:
/*
- Funktionen visMenu:
    Hvis menuSynlig == false, så 
    - sæt animationName til "runIn"
    - sæt menuSynlig til "true"
    Ellers:
    - sæt animationName til "runOut"
    - sæt menuSynlig til "false"

*/

// VARIABLE:
let knap = document.getElementById('knap');   // Til knappen
let menu = document.getElementById('menu');   // Til menuen
let menuSynlig = false;                       // Booleanvariabel, starter som false

// EVENT LISTENERS:
knap.addEventListener('click', visMenu);      // Klik på knappen udløser visMenu

// EVENT HANDLER:
function visMenu() {
    if (menuSynlig == false) {
        menu.style.animationName = 'runIn';   // Sæt animation til "runIn"
        menuSynlig = true;                    // Opdater menuSynlig til true
    } else {
        menu.style.animationName = 'runOut';  // Sæt animation til "runOut"
        menuSynlig = false;                   // Opdater menuSynlig til false
    }
}
