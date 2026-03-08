// ===============================
// Leden database (voorbeeld data)
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
// Wordt alleen uitgevoerd als
// localStorage nog leeg is
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
// Lid zoeken functie
// ===============================

function zoekLid(){

// input veld ophalen
let input = document.getElementById("zoekInput").value.toLowerCase();

// resultaat lijst ophalen
let resultaat = document.getElementById("resultaat");

resultaat.innerHTML = "";

if(input === ""){

resultaat.innerHTML = "<li>Voer eerst een achternaam in.</li>";
return;

}

let gevonden = false;

// door alle leden heen lopen
leden.forEach(function(lid){

if(lid.achternaam.toLowerCase().includes(input)){

// li element maken
let li = document.createElement("li");

li.textContent = lid.voornaam + " " + lid.achternaam;

resultaat.appendChild(li);

gevonden = true;

}

});

if(!gevonden){

resultaat.innerHTML = "<li>Geen lid gevonden.</li>";

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

// bestaande reserveringen ophalen
let reserveringen = JSON.parse(localStorage.getItem("reserveringen")) || [];

let nieuweReservering = naam + " - " + les;

// controleren of reservering al bestaat
if(reserveringen.includes(nieuweReservering)){

alert("Deze reservering bestaat al.");
return;

}

// reservering toevoegen
reserveringen.push(nieuweReservering);

// opslaan in localStorage
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

// opnieuw laden
toonReserveringen();

}


// ===============================
// Reserveringen tonen
// ===============================

function toonReserveringen(){

let lijst = document.getElementById("reserveringLijst");

// als element niet bestaat stoppen
if(!lijst) return;

lijst.innerHTML = "";

let reserveringen = JSON.parse(localStorage.getItem("reserveringen")) || [];

// aantal reserveringen tonen
let aantal = document.getElementById("aantal");

if(aantal){
aantal.textContent = reserveringen.length;
}

if(reserveringen.length === 0){

lijst.innerHTML = "<li>Er zijn nog geen reserveringen.</li>";

return;

}

// door reserveringen lopen
reserveringen.forEach(function(res,index){

let li = document.createElement("li");

li.textContent = res + " ";

// verwijder knop maken
let knop = document.createElement("button");

knop.textContent = "Verwijder";

knop.onclick = function(){

verwijderReservering(index);

};

li.appendChild(knop);

lijst.appendChild(li);

});

}


// ===============================
// automatisch laden bij openen
// ===============================

toonReserveringen();