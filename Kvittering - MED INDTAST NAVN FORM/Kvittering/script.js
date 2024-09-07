// Hent elementer
const p_dato = document.getElementById("dato");
const p_beloeb = document.getElementById("beloeb");
const p_kundeInfo = document.getElementById("kundeInfo");
const modal = document.getElementById("modal");
const form = document.getElementById("kundeForm");

// Sæt dato
const dato = new Date();
p_dato.innerHTML = dato.toLocaleDateString();

// Priser
const pris1 = 1336;
const pris2 = 1;
const samletPris = pris1 + pris2;

// Vis samlet pris
p_beloeb.innerHTML = samletPris.toFixed(2) + " kr";

// Vis modal når siden loader
window.onload = function() {
    modal.style.display = "block";
};

// Håndter formular indsendelse
form.onsubmit = function(e) {
    e.preventDefault();
    const navn = document.getElementById("navn").value;
    const adjektiv = document.getElementById("adjektiv").value;
    
    // Opdater kundeinfo på kvitteringen
    p_kundeInfo.innerHTML = `Tak for dit køb, ${adjektiv} ${navn}!`;
    
    // Skjul modal
    modal.style.display = "none";
};