// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


const distance = prompt("Quanti chilometri vuoi percorrere?");

document.getElementById(`km`).innerHTML = distance;

let basePrice = distance * 0.21;

const age = prompt("Quanti anni hai?")

document.getElementById(`age`).innerHTML = age;

if (age < 18) {

    basePrice = (basePrice * 0.20)
}

if (age > 64) {

    basePrice = (basePrice * 0.40)
}

document.getElementById(`finalPrice`).innerHTML = `Il prezzo del tuo biglietto è di ${basePrice.toFixed(2)}`;

