// VARIABLE TIL HVER THUMBNAIL:
// Opret variable (const, ikke let) til hvert billede.
// Det må gerne være samme navn som id'et i det her tilfælde.

// VARIABLE TIL HVER THUMBNAIL:
const gal_clouds = document.getElementById('gal_clouds');
const gal_forelf = document.getElementById('gal_forelf');
const gal_kirke = document.getElementById('gal_kirke');
const gal_swans = document.getElementById('gal_swans');

// VARIABEL TIL DET STORE BILLEDE:
// Opret en variabel der peger på div'en, der har billederne i sig. 

// VARIABEL TIL DET STORE BILLEDE:
const galleryBig = document.getElementById('gallery_big');

// EVENT LISTENER:
// Lav en event listener for hvert billede med onclick.
// Husk at funktionskaldet ikke skal have paranteser!

// EVENT LISTENER:
gal_clouds.onclick = changeImage;
gal_forelf.onclick = changeImage;
gal_kirke.onclick = changeImage;
gal_swans.onclick = changeImage;

// FUNCTIONS:
// Lav en function for hvert billede, der går ind og indsætter et nyt <img> tag
// i div'en med innerHTML. Brug camel casing så der fx. står visStoerreClouds.

// FUNCTIONS:
function visStoerreClouds() {
    galleryBig.innerHTML = '<img src="images/cloudsFromRoof.jpg" alt="Clouds from the Roof">';
}

function visStoerreForelf() {
    galleryBig.innerHTML = '<img src="images/forestAndElf.jpg" alt="Forest and Elf">';
}

function visStoerreKirke() {
    galleryBig.innerHTML = '<img src="images/hasleKirke.jpg" alt="Hasle Kirke">';
}

function visStoerreSwans() {
    galleryBig.innerHTML = '<img src="images/swans.JPG" alt="Swans">';
}

/* NB: Du tænker det her er ineffektivt og du har ret. Men det kræver nogle lidt mere avancerede værktøjer at effektivisere det :) */