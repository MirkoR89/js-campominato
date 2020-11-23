//Il computer deve generare 16 numeri casuali tra 1 e 100.I numeri non possono essere duplicati.
for (i=1; i<=16; i++) {
  var pcNumber = Math.floor(Math.random() * (100 - 1) + 1);
  console.log(pcNumber);
}
listPcNumber = [];
listPcNumber.push(pcNumber);
console.log(listPcNumber);

//In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
for (i=1; i<=16; i++) {
  var userNumber = Number(prompt("Inserisci il tuo numero"))
  console.log(userNumber);
}
listUserNumber = [];
listUserNumber.push(userNumber);
console.log(listUserNumber);
//Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// if (userNumber == pcNumber) {
//   console.log("You lose the match!");
// }

//La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.

//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
