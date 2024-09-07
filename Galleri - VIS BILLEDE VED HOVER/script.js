// Hent det store billede element
const galleryBig = document.getElementById('gallery_big');

// Hent alle thumbnail billeder
const thumbnails = document.querySelectorAll('#gallery_thumbs img');

// Funktion til at vise det store billede
function showLargeBigImage(imgSrc, imgAlt) {
    galleryBig.innerHTML = `<img src="${imgSrc}" alt="${imgAlt}">`;
}

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

// Tilføj event listeners til alle thumbnails
thumbnails.forEach(thumbnail => {
    // Mouseover event for at vise stort billede
    thumbnail.addEventListener('mouseover', () => {
        showLargeBigImage(thumbnail.src, thumbnail.alt);
    });

    // Click event for at vise lightbox
    thumbnail.addEventListener('click', () => {
        showLightbox(thumbnail.src, thumbnail.alt);
    });
});

// Luk lightbox når man klikker på luk-knappen
closeLightbox.onclick = closeLightboxFunc;

// Luk lightbox når man klikker udenfor billedet
lightbox.onclick = function(event) {
    if (event.target === lightbox) {
        closeLightboxFunc();
    }
};