/* Det her suger værdien ud af tekstfeltet: */
let output = document.getElementById("output");
const button = document.getElementById("button");
const checkbox = document.getElementById("checkbox");

button.onclick = seOmChecked;

function seOmChecked(){
   if(checkbox.checked){
      output.innerHTML = "Checked, dvs. krydset af.";
   } else{
      output.innerHTML = "Ikke checked";
   }
   
}


// button.addEventListener("click", visTumpetTekst )

