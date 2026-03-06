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
"Sophie Bakker - Zumba",
"Tom De Vries - Yoga"

];

localStorage.setItem("reserveringen", JSON.stringify(voorbeeldReserveringen));

}


// ===============================
// Lid zoeken
// ===============================

function zoekLid(){

let input = document.getElementById("zoekInput").value.toLowerCase();
let resultaat = document.getElementById("resultaat");

resultaat.innerHTML = "";

// UNHAPPY SCENARIO
if(input === ""){

let li = document.createElement("li");
li.textContent = "Voer eerst een achternaam in.";
resultaat.appendChild(li);

return;

}

let gevonden = false;

leden.forEach(function(lid){

if(lid.achternaam.toLowerCase().includes(input)){

let li = document.createElement("li");
li.textContent = lid.voornaam + " " + lid.achternaam;

resultaat.appendChild(li);
gevonden = true;

}

});

// UNHAPPY SCENARIO
if(!gevonden){

let li = document.createElement("li");
li.textContent = "Geen lid gevonden.";
resultaat.appendChild(li);

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

// UNHAPPY SCENARIO
if(reserveringen.includes(nieuweReservering)){

alert("Deze reservering bestaat al.");
return;

}

// HAPPY SCENARIO
reserveringen.push(nieuweReservering);

localStorage.setItem("reserveringen", JSON.stringify(reserveringen));

alert("Reservering succesvol!");

}


// ===============================
// Reserveringen tonen
// ===============================

function toonReserveringen(){

let lijst = document.getElementById("reserveringLijst");

if(!lijst) return;

lijst.innerHTML = "";

let reserveringen = JSON.parse(localStorage.getItem("reserveringen")) || [];

// UNHAPPY SCENARIO
if(reserveringen.length === 0){

let li = document.createElement("li");
li.textContent = "Er zijn nog geen reserveringen.";

lijst.appendChild(li);

return;

}

// HAPPY SCENARIO
reserveringen.forEach(function(res){

let li = document.createElement("li");
li.textContent = res;

lijst.appendChild(li);

});

}

// automatisch uitvoeren
toonReserveringen();