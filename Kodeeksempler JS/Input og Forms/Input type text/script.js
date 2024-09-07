/* Det her suger værdien ud af tekstfeltet: */
let besked = document.getElementById("besked");
let output = document.getElementById("output");
const button = document.getElementById("button");

button.onclick = visTekst;

function visTekst(){
   output.innerHTML = besked.value; 
}


// button.addEventListener("click", visTumpetTekst )

