// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


const distance = prompt("Quanti chilometri vuoi percorrere?");

document.getElementById(`km`).innerHTML = distance;

let basePrice = distance * 0.21;

const age = prompt("Quanti anni hai?");

document.getElementById(`age`).innerHTML = age;

if (!isNaN(age) && Number.isInteger(Number(age)) && (age > 0 && age < 110) && !isNaN(distance) && Number.isInteger(Number(distance)) && distance > 0){
    
    if (age < 18) {
    
        document.getElementById(`yourDiscount`).innerHTML = `Hai i requisiti per uno sconto del 20%`
    
        basePrice = (basePrice * 0.20)
    }

    if (age > 17 && age < 65) {

        document.getElementById(`yourDiscount`).innerHTML = `Non hai i requisiti per uno sconto`
    }
    
    if (age > 64) {
    
        document.getElementById(`yourDiscount`).innerHTML = `Hai i requisiti per uno sconto del 40%`
    
        basePrice = (basePrice * 0.40)
    }
    
    document.getElementById(`finalPrice`).innerHTML = `Il prezzo del tuo biglietto è di ${basePrice.toFixed(2)}`;

} else {

    document.getElementById(`finalPrice`).innerHTML = `Non hai inserito i dati in maniera corretta!`;
}


