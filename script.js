// ===============================
// Leden database (simulatie)
// ===============================

const leden = [

{voornaam:"Jan", achternaam:"Jansen"},
{voornaam:"Lisa", achternaam:"Pieters"},
{voornaam:"Ahmed", achternaam:"Ali"},
{voornaam:"Sophie", achternaam:"Bakker"},
{voornaam:"Tom", achternaam:"De Vries"}

];


// ===============================
// Lid zoeken op achternaam
// ===============================

function zoekLid(){

let input = document.getElementById("zoekInput").value.toLowerCase();

let resultaat = document.getElementById("resultaat");

resultaat.innerHTML = "";

// UNHAPPY SCENARIO
// gebruiker heeft niets ingevuld

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
// lid bestaat niet

if(!gevonden){

let li = document.createElement("li");

li.textContent = "Geen lid gevonden met deze achternaam.";

resultaat.appendChild(li);

}

}


// ===============================
// Les reserveren
// ===============================

function reserveerLes(les){

let reserveringen = JSON.parse(localStorage.getItem("reserveringen")) || [];

// UNHAPPY SCENARIO
// les is al gereserveerd

if(reserveringen.includes(les)){

alert("Je hebt deze les al gereserveerd.");

return;

}

// HAPPY SCENARIO
// reservering toevoegen

reserveringen.push(les);

localStorage.setItem("reserveringen", JSON.stringify(reserveringen));

alert("Les succesvol gereserveerd: " + les);

}


// ===============================
// Reserveringen tonen
// ===============================

function toonReserveringen(){

let lijst = document.getElementById("reserveringLijst");

if(!lijst) return;

let reserveringen = JSON.parse(localStorage.getItem("reserveringen")) || [];

// UNHAPPY SCENARIO
// geen reserveringen

if(reserveringen.length === 0){

let li = document.createElement("li");

li.textContent = "Er zijn nog geen reserveringen.";

lijst.appendChild(li);

return;

}

// HAPPY SCENARIO
// reserveringen tonen

reserveringen.forEach(function(les){

let li = document.createElement("li");

li.textContent = les;

lijst.appendChild(li);

});

}

toonReserveringen();