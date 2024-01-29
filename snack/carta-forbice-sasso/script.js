    const userChoice = prompt("Scegli fra: carta, forbice o sasso");

    const options = ["carta", "forbice", "sasso"];


    const computerChoice = options[Math.floor(Math.random() * 3 + 1)];

    if (userChoice === computerChoice) {

        document.getElementById(`results`).innerHTML = `Hai pareggiato!`;

    } else if ((userChoice === "sasso" && computerChoice === "forbice") || (userChoice === "carta" && computerChoice === "sasso") || (userChoice === "forbice" && computerChoice === "carta")) {

        document.getElementById(`results`).innerHTML = `HAI VINTO!`;

    } else {

        document.getElementById(`results`).innerHTML = `Hai perso :(`;
    }

