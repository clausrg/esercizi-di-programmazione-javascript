/*
  Chi l'azzecca?
  Scrivi un programma che dati due numeri di due ipotetici giocatori,
  generi un numero casuale compreso tra 1 e 100 (zero escluso),
  verifichi se uno dei due giocatori ha azzeccato il numero casuale,
  e in caso contrario quale dei due si è avvicinato di più al numero.

  Esempio:
    Input: giocatore 1 = 5, giocatore 2 = 10
    Output: Numero casuale generato = 7
            "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!"

  Consigli:
  Per generare un numero casuale utlizza la funzione javascript Math.random() che restituisce un intervallo compreso tra 0 e 1.
  Il valore ottenuto dovrà essere convertito per ottenere un valore valido per il tuo intervallo, in questo modo:
    (Math.random() * (max-min) + min) ovvero, nel tuo caso:
    (Math.random() * (100-1) + 1)
  Ricordati che il valore dovrà essere intero quindi dovrai arrontondarlo usando Math.floor()

  http://www.imparareaprogrammare.it
*/

const player1 = 73;
const player2 = 23;

const min = 1;
const max = 100;

const roulette = Math.floor(Math.random() * (max-min)+min);

const delta1 = Math.abs(roulette - player1);
const delta2 = Math.abs(roulette - player2);

const winner = (delta1 < delta2) ? 1 
             : (delta2 < delta1) ? 2
             : 0;
let message;

switch (winner) {
  case 1 :
  case 2 :
  message = `ma il giocatore ${winner} si è avvicinato di più!`;
  break;
  
  default :
  message = 'i giocatori sono ugualmente vicini al numro uscito!';
}

if ((player1<min)||(player1>max)||(player2<min)||(player2>max)) {
  console.log(`Input: giocatore 1 = ${player1}, giocatore 2 = ${player2}
    Output: È uscito il numero ${roulette}
    La giocata non è valida!`);
} else {
  if ((roulette != player1) && (roulette != player2)) {
    console.log(`Input: giocatore 1 = ${player1}, giocatore 2 = ${player2}
      Output: È uscito il numero ${roulette}
      Nessun giocatore ha vinto, ${message}`);
  } else if ((player1 != player2) && (roulette === player1)) {
    console.log(`Input: giocatore 1 = ${player1}, giocatore 2 = ${player2}
      Output: È uscito il numero ${roulette}
      Il giocatore 1 ha vinto!`);
  } else  if ((player1 != player2) && (roulette === player2)) {
    console.log(`Input: giocatore 1 = ${player1}, giocatore 2 = ${player2}
      Output: È uscito il numero ${roulette}
      Il giocatore 2 ha vinto!`);
  } else {
    console.log(`Input: giocatore 1 = ${player1}, giocatore 2 = ${player2}
      Output: È uscito il numero ${roulette}
      Tutti i giocatori hanno vinto!`);
  }
}
