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

leden.forEach(function(lid){

if(lid.achternaam.toLowerCase().includes(input)){

let li = document.createElement("li");

li.textContent = lid.voornaam + " " + lid.achternaam;

resultaat.appendChild(li);

}

});

}


// ===============================
// Les reserveren
// ===============================

function reserveerLes(les){

// Haal bestaande reserveringen op uit localStorage
let reserveringen = JSON.parse(localStorage.getItem("reserveringen")) || [];

// Voeg nieuwe reservering toe
reserveringen.push(les);

// Opslaan
localStorage.setItem("reserveringen", JSON.stringify(reserveringen));

// Bericht tonen
alert("Les gereserveerd: " + les);

}


// ===============================
// Reserveringen tonen
// ===============================

function toonReserveringen(){

let lijst = document.getElementById("reserveringLijst");

if(!lijst) return;

let reserveringen = JSON.parse(localStorage.getItem("reserveringen")) || [];

reserveringen.forEach(function(les){

let li = document.createElement("li");

li.textContent = les;

lijst.appendChild(li);

});

}

// Automatisch laden
toonReserveringen();