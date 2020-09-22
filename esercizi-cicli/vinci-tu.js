/*
  Vinci tu!
  Scrivi un programma che dato il numero dei tiri da effettuare per ciascun giocatore (N),
  simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizza più punti.
  Supponendo che ogni dado abbia al massimo 6 facce.

  Ogni giocatore tirerà il dado N volte, ciò significa che verrà generato un numero casuale
  ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore.


  Consigli:
  Il numero casuale generato, deve essere convertito nel tuo intervallo (min = 1, max = 6).
  Se non ti ricordi come si fa puoi rivedere l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/


const n = 3;
let dice, player1=0, player2=0, winner, points;
const min=1, max=6;

for (let i = 0; i < (n * 2); i++) {
  dice = Math.floor(Math.random() * (max-min+1)+min);
  if (i < n) {
    player1 += dice;
  } else {
    player2 += dice;
  }
  console.log(dice);
}

if (player1 > player2) {
  winner = 'player1';
  points = player1;
} else if (player1 < player2) {
  winner = 'player2';
  points = player2;
} else {
  winner = 'nessuno';
  points = 'pari';
}

console.log(`Output: player1 = ${player1}, player2 = ${player2}
  ${winner} ha vinto totalizzando ${points} punti`);