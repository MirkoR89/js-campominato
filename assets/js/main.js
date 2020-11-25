//**************************** MY SOLUTION ***************************
//Utility Functions
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function includes(array, number) {
  return array.includes(number);
}

function requestNumber() {
  return Number(prompt("Inserisci un numero da 1 a" + " " + maxProbability));
}
// --------------------------- BONUS TRACK --------------------------
var levelChoose = Number(prompt("Iserisci: 0 = Livello FACILE, 1 = Livello MEDIO, 2 = Livello DIFFICILE"));
var levelEasy = 0;
var levelMedium = 1;
var levelHard = 2;

// if (levelChoose === levelEasy) {
//   var maxNumber = 100;
//   var maxProbability = 100;
// } else if (levelChoose === levelMedium) {
//   var maxNumber = 80;
//   var maxProbability = 80;
// } else if (levelChoose === levelHard) {
//   var maxNumber = 50;
//   var maxProbability = 50;
// }

switch (levelChoose) {
  case levelEasy:
    var maxProbability = 100;
    var maxNumber = 100;
    break;
  case levelMedium:
    var maxProbability = 80;
    var maxNumber = 80;
    break;
  case levelMedium:
    var maxProbability = 80;
    var maxNumber = 80;
    break;
}
// __________________________________________________________________
//Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati.

var listPcNumber = [];

while (listPcNumber.length < 16) {
  var pcNumber = randomNumber(1, maxNumber);
  if (includes(listPcNumber, pcNumber) == false) {
    listPcNumber.push(pcNumber);
  }
}
console.log(listPcNumber);

//In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
var listUserNumber = [];
var probability = maxProbability - 16;

while (listUserNumber.length < probability) {
  var userNumber = requestNumber();
//La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
  if (includes(listUserNumber, userNumber)) {
    var wrongNumber = alert("Hai già usato questo numero! Inserisci un altro numero, premi ok e riprova.");
    var userNumber = requestNumber();
  } else if (includes(listPcNumber, userNumber) == true) {
    var lose = document.getElementById("win_or_lose").innerHTML = "Game Over";
    break;
//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
  } else if (includes(listUserNumber, userNumber) == false) {
      listUserNumber.push(userNumber);
      var win = document.getElementById("win_or_lose").innerHTML = "YOU WIN!";
  }
  var score = document.getElementById("score").innerHTML = "Il tuo punteggio è" + " " + (listUserNumber.length);
}
console.log(listUserNumber);

//************************** FABIO SOLUTION **************************

//Il computer deve generare 16 numeri casuali tra 1 e 100.I numeri non possono essere duplicati.
/*function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var listPcNumber = [];
while (listPcNumber.length < 16) {
  var pcNumber = getRndInteger(1, 100);
  if (! inArray(listPcNumber, pcNumber)) {
    listPcNumber.push(pcNumber)
  }
}

function inArray(array, number) {
  var i = 0;
  while (i < array.length) {
    if (number === array[i]) {
      return true;
    }
    i++
  }
}
console.log(listPcNumber);

//In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.

var listUserNumber = [];
var probability = 100 - 16;
for (var i = 0; i <= probability; i++) {
  var userNumber = Number(prompt("Inserisci un mumero tra 1 e 100"));
  if (inArray(listPcNumber, userNumber)) {
    var lose = document.getElementById("win_or_lose").innerHTML = "GAME OVER!";
    break;
  }

//Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero. La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.

  while (inArray(listUserNumber, userNumber)) {
    alert("Hai già usato questo numero! Inserisci un altro numero, premi ok e riprova.");
    var userNumber = Number(prompt("Inserisci un mumero tra 1 e 100"));
  }
  listUserNumber.push(userNumber);
}
console.log(listUserNumber);

//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
var score = document.getElementById("score").innerHTML = "Il tuo punteggio è" + " " + (listUserNumber.length);*/
