//**************************** MY SOLUTION ***************************
//Utility Functions
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function includes(array, number) {
  return array.includes(number);
}

function requestNumber(text) {
  return Number(prompt(text));
}

function html(id, text) {
  return document.getElementById(id).innerHTML = text;
}

var levelChoose, levelEasy, levelHard, maxNumber, listPcNumber, pcNumber, listUserNumber, probability, userNumber, wrongNumber, lose, win, score;
// --------------------------- BONUS TRACK --------------------------
levelChoose = requestNumber("Scegli il livello di difficoltò: FACILE = [0] - MEDIO = [1] - DIFFICILE = [2]");
levelEasy = 0;
levelMedium = 1;
levelHard = 2;

switch (levelChoose) {
  case levelEasy:
    maxNumber = 100;
    break;
  case levelMedium:
    maxNumber = 80;
    break;
  case levelHard:
    maxNumber = 50;
    break;
}

/*if (levelChoose === levelEasy) {
   maxNumber = 100;
} else if (levelChoose === levelMedium) {
   maxNumber = 80;
} else if (levelChoose === levelHard) {
   maxNumber = 50;
}*/

// __________________________________________________________________

//Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati.
listPcNumber = [];

while (listPcNumber.length < 16) {
  pcNumber = randomNumber(1, maxNumber);
  if (includes(listPcNumber, pcNumber) == false) {
    listPcNumber.push(pcNumber);
  }
}
console.log(listPcNumber);

//In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
listUserNumber = [];
probability = maxNumber - 16;

while (listUserNumber.length < probability) {
  userNumber = requestNumber("Inserisci un numero da 1 a" + " " + maxNumber);
  //La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
  if (includes(listUserNumber, userNumber)) {
    wrongNumber = alert("Hai già usato questo numero! Inserisci un altro numero, premi ok e riprova.");
    userNumber = requestNumber("Inserisci un numero da 1 a" + " " + maxNumber);
  } else if (includes(listPcNumber, userNumber) == true) {
    lose = html("win_or_lose", "Game Over");
    break;
    //Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
  } else if (includes(listUserNumber, userNumber) == false) {
    listUserNumber.push(userNumber);
    win = html("win_or_lose", "YOU WIN");
  }
  score = html("score", "Il tuo punteggio è" + " " + (listUserNumber.length));
}
console.log(listUserNumber);
