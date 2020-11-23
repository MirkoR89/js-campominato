//Il computer deve generare 16 numeri casuali tra 1 e 100.I numeri non possono essere duplicati.
listPcNumber = [];

while (listPcNumber.length < 16) {
  var pcNumber = Math.floor(Math.random() * (100 - 1) + 1);
  if (listPcNumber.includes(pcNumber) == false) {
    listPcNumber.push(pcNumber);
  }
}
console.log(listPcNumber);

//In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
listUserNumber = [];

wrongNumber = listPcNumber.includes(userNumber);

do {
  var userNumber = Number(prompt("Inserisci un numero da 1 a 100"));
//Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero. La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
  if (wrongNumber == true) {
    console.log("Hai perso");
  } else if (listUserNumber.includes(userNumber) == false) {
    listUserNumber.push(userNumber);
  } else if (listUserNumber.includes(userNumber) == true) {
    console.log("Numero già inserito.");
  } else {
    console.log("Hai vinto!");
  }
} while (listUserNumber.length < 84 && wrongNumber == false)
//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
console.log("il tuo punteggio è" + " " + listUserNumber.length);
