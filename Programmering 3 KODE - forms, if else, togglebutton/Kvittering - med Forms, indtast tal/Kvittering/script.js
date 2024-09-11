// Hent elementer
const p_dato = document.getElementById("dato");
const p_beloeb = document.getElementById("beloeb");
const p_kundeInfo = document.getElementById("kundeInfo");
const modal = document.getElementById("modal");
const form = document.getElementById("kundeForm");

// Sæt dato
const dato = new Date();
p_dato.innerHTML = dato.toLocaleDateString();

// Vis modal når siden loader
window.onload = function() {
    modal.style.display = "block";
};

// Håndter formular indsendelse
form.onsubmit = function(e) {
    e.preventDefault();
    const navn = document.getElementById("navn").value;
    const pris1 = parseFloat(document.getElementById("pris1").value) || 0;
    const pris2 = parseFloat(document.getElementById("pris2").value) || 0;
    
    // Beregn samlet pris
    const samletPris = pris1 + pris2;
    
    // Opdater kundeinfo på kvitteringen
    p_kundeInfo.innerHTML = `Tak for dit køb, ${navn}!`;
    
    // Vis samlet pris
    p_beloeb.innerHTML = samletPris.toFixed(2) + " kr";
    
    // Skjul modal
    modal.style.display = "none";
};