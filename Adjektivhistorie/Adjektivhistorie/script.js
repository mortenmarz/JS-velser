let p_historie = document.querySelector("p");

// Opret to stringvariable ('let', de ændrer sig) med variabelnavnene 'navn' og 'adjektiv'.
let navn = "Alice";
let adjektiv = "spøjsommelig";

// Skriv historien hernede om til din egen historie:
let historie = "Der var en gang en kat, der hed " + navn + ". Den gik en tur, og så straks en meget " + adjektiv + " mus. Musen sagde: " + navn + ", skal du smage lidt kebab?" + navn + " sagde: Hvad sulen betyder det? Du er godt nok " + adjektiv + ".";

p_historie.innerHTML = historie;