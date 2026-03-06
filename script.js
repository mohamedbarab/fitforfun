// ===============================
// Leden database
// ===============================

const leden = [

{voornaam:"Jan", achternaam:"Jansen"},
{voornaam:"Lisa", achternaam:"Pieters"},
{voornaam:"Ahmed", achternaam:"Ali"},
{voornaam:"Sophie", achternaam:"Bakker"},
{voornaam:"Tom", achternaam:"De Vries"}

];


// ===============================
// Voorbeeld reserveringen laden
// ===============================

if(!localStorage.getItem("reserveringen")){

let voorbeeldReserveringen = [

"Jan Jansen - Yoga",
"Lisa Pieters - Spinning",
"Ahmed Ali - Bootcamp",
"Sophie Bakker - Zumba"

];

localStorage.setItem("reserveringen", JSON.stringify(voorbeeldReserveringen));

}


// ===============================
// Lid zoeken
// ===============================

function zoekLid(){

let input = document.getElementById("zoekNaam").value.toLowerCase();
let resultaat = document.getElementById("resultaat");

resultaat.innerHTML = "";

if(input === ""){

resultaat.innerHTML = "Voer eerst een achternaam in.";
return;

}

let gevonden = false;

leden.forEach(function(lid){

if(lid.achternaam.toLowerCase().includes(input)){

let p = document.createElement("p");

p.textContent = lid.voornaam + " " + lid.achternaam;

resultaat.appendChild(p);

gevonden = true;

}

});

if(!gevonden){

resultaat.innerHTML = "Geen lid gevonden.";

}

}


// ===============================
// Les reserveren
// ===============================

function reserveerLes(les){

let naam = prompt("Voer je naam in voor de reservering:");

if(!naam){

alert("Je moet een naam invullen.");
return;

}

let reserveringen = JSON.parse(localStorage.getItem("reserveringen")) || [];

let nieuweReservering = naam + " - " + les;

if(reserveringen.includes(nieuweReservering)){

alert("Deze reservering bestaat al.");
return;

}

reserveringen.push(nieuweReservering);

localStorage.setItem("reserveringen", JSON.stringify(reserveringen));

alert("Reservering succesvol!");

}


// ===============================
// Reservering verwijderen
// ===============================

function verwijderReservering(index){

let reserveringen = JSON.parse(localStorage.getItem("reserveringen")) || [];

reserveringen.splice(index,1);

localStorage.setItem("reserveringen", JSON.stringify(reserveringen));

toonReserveringen();

}


// ===============================
// Reserveringen tonen
// ===============================

function toonReserveringen(){

let lijst = document.getElementById("reserveringLijst");

if(!lijst) return;

lijst.innerHTML = "";

let reserveringen = JSON.parse(localStorage.getItem("reserveringen")) || [];

if(reserveringen.length === 0){

lijst.innerHTML = "<li>Er zijn nog geen reserveringen.</li>";

return;

}

reserveringen.forEach(function(res,index){

let li = document.createElement("li");

li.textContent = res + " ";

let knop = document.createElement("button");

knop.textContent = "Verwijder";

knop.onclick = function(){

verwijderReservering(index);

};

li.appendChild(knop);

lijst.appendChild(li);

});

}


// automatisch uitvoeren
toonReserveringen();