// ... eksisterende kode ...

// Hent lightbox elementerne
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.getElementById('close-lightbox');

// Funktion til at vise lightbox
function showLightbox(imgSrc, imgAlt) {
    lightboxImg.src = imgSrc;
    lightboxImg.alt = imgAlt;
    lightbox.style.display = 'flex';
}

// Funktion til at lukke lightbox
function closeLightboxFunc() {
    lightbox.style.display = 'none';
}

// EVENT LISTENER:
gal_clouds.onclick = () => showLightbox('images/cloudsFromRoof.jpg', 'Clouds from the Roof');
gal_forelf.onclick = () => showLightbox('images/forestAndElf.jpg', 'Forest and Elf');
gal_kirke.onclick = () => showLightbox('images/hasleKirke.jpg', 'Hasle Kirke');
gal_swans.onclick = () => showLightbox('images/swans.JPG', 'Swans');

// Luk lightbox når man klikker på luk-knappen
closeLightbox.onclick = closeLightboxFunc;

// Luk lightbox når man klikker udenfor billedet
lightbox.onclick = function(event) {
    if (event.target === lightbox) {
        closeLightboxFunc();
    }
};

// Vi behøver ikke længere changeImage funktionen eller de separate funktioner for hvert billede, 
// så de kan fjernes eller kommenteres ud
// function changeImage() { ... }
// function visStoerreClouds() { ... }
// function visStoerreForelf() { ... }
// function visStoerreKirke() { ... }
// function visStoerreSwans() { ... }