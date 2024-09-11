// alert("JEG ER I LIVE!");

// VARIABLE:
const knap = document.getElementById("knap");
// Inputfelt: navn
const input_navn = document.getElementById("navn");
// Inputfelt: adjektiv
const input_adjektiv = document.getElementById("adjektiv");
// Outputfeltet:
const p_output = document.getElementById("output");


// EVENT LISTENERS:
knap.onclick = visHistorie;


// EVENT HANDLERS:
function visHistorie(){
    //alert("visHistorie blev kaldt, skåååååål!");
    let navn = input_navn.value;
    let adjektiv = input_adjektiv.value;
    // let samletBesked = "Hej " + navn + "! Fedt at se dig her :) Du er da bare så " + adjektiv;
    // alert(samletBesked);
    let historie = "Der var en gang en, der hed " + navn + ". Hen gik en tur, og så straks en meget " + adjektiv + " skabning. Den sagde: " + navn + ", skal du have en på dækslet?" + navn + " sagde: Hvad sulen betyder det? Du er godt nok " + adjektiv;
    p_output.innerHTML = historie;
}