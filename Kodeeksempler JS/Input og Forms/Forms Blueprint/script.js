// Hent elementer fra DOM
const navnInput = document.getElementById("navn");
const beskedInput = document.getElementById("besked");
const sendKnap = document.getElementById("sendKnap");
const output = document.getElementById("output");
const modal = document.getElementById("modal");
const modalBesked = document.getElementById("modalBesked");
const sendEndeligt = document.getElementById("sendEndeligt");
const lukModal = document.getElementById("lukModal");

// Event listeners
sendKnap.addEventListener("click", visModal);
lukModal.addEventListener("click", skjulModal);
sendEndeligt.addEventListener("click", sendBesked);

// Funktioner
function visModal() {
    const navn = navnInput.value;
    const besked = beskedInput.value;
    
    if (navn && besked) {
        modalBesked.innerHTML = `<strong>Navn:</strong> ${navn}<br><strong>Besked:</strong> ${besked}`;
        modal.style.display = "block";
    } else {
        alert("Udfyld venligst både navn og besked.");
    }
}

function skjulModal() {
    modal.style.display = "none";
}

function sendBesked() {
    const navn = navnInput.value;
    const besked = beskedInput.value;
    
    output.innerHTML = `<strong>Besked sendt:</strong><br>
                        <strong>Navn:</strong> ${navn}<br>
                        <strong>Besked:</strong> ${besked}`;
    
    skjulModal();
    navnInput.value = "";
    beskedInput.value = "";
}