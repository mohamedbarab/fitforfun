// Lijst met leden van de sportschool
// Dit is een array met objecten
const leden = [

{voornaam:"Jan", achternaam:"Jansen"},
{voornaam:"Lisa", achternaam:"Pieters"},
{voornaam:"Ahmed", achternaam:"Ali"},
{voornaam:"Sophie", achternaam:"Bakker"},
{voornaam:"Tom", achternaam:"De Vries"}

];

// Functie die wordt uitgevoerd als op de knop "Zoeken" wordt geklikt
function zoekLid(){

// De tekst die de gebruiker heeft ingevoerd ophalen
let input = document.getElementById("zoekInput").value.toLowerCase();

// De lijst waar de resultaten in komen
let resultaat = document.getElementById("resultaat");

// Resultaten eerst leeg maken
resultaat.innerHTML = "";

// Door alle leden heen lopen
leden.forEach(function(lid){

// Controleren of de ingevoerde tekst in de achternaam zit
if(lid.achternaam.toLowerCase().includes(input)){

// Nieuw lijst item maken
let li = document.createElement("li");

// Naam tonen
li.textContent = lid.voornaam + " " + lid.achternaam;

// Toevoegen aan de resultaten lijst
resultaat.appendChild(li);

}

});

}