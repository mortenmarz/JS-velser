// VARIABLE:
/* 
- Til knappen 'knap_beregn', brug querySelector
- Til inputfeltet til budget
- Til inputfeltet til pris
*/

// EVENT LISTENERS:
/*
- Gør knappen 'knap_beregn' klikbar, og aktiver funktionen 'beregn'
*/

// FUNCTIONS / EVENT HANDLERS:
/*
- Lav funktioen 'beregn'. 
- Hvis værdien i prisfeltet er større end værdien i budgetfeltet --> popup der siger man ikke har råd.
- Ellers: Popup, der siger man har råd.
*/

// VARIABLE:
const knap_beregn = document.querySelector('.knap_beregn');
const budgetInput = document.getElementById('budget');
const prisInput = document.getElementById('pris');

// EVENT LISTENERS:
knap_beregn.addEventListener('click', beregn);

// FUNCTIONS / EVENT HANDLERS:
function beregn() {
    const budget = (budgetInput.value);
    const pris = (prisInput.value);
    
    if (pris > budget) {
        alert("Du har ikke råd!");
    } else {
        alert("Du har råd!");
    }
}