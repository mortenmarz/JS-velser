const input_pass = document.getElementById("input_pass");
const btn_enter = document.getElementById("btn_enter");

const venstreport = document.getElementById("venstreport");
const hoejreport = document.getElementById("hoejreport");


btn_enter.onclick = gaaInd;

function gaaInd(){
    /* Skriv en if-sætning, der spørger om værdien (value) af input_pass er lig med "locked" (en string, du kan også vælge et andet password :)). Hvis det er, så sæt animationName for venstreport til "udTilVenstre" og for hoejreport til "udTilHoejre". Ellers skal der bare vises en alert. */
    
    if(input_pass.value === "locked") {
        venstreport.style.animationName = "udTilVenstre";
        hoejreport.style.animationName = "udTilHoejre";
    } else {
        alert("Forkert adgangskode. Prøv igen!");
    }
}

