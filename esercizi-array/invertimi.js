/*
  Invertimi
  Scrivi un programma che dato un numero N, generi un array di N numeri casuali
  e stampi sia l'array ottenuto che quello invertito.

  Esempio:
    Input: N = 5
    Output: array ottenuto = [3, 5, 10, 2, 8], array invertito = [8, 2, 10, 5, 3]

  Variante:
  Non utilizzare array/variabili di appoggio per l'inversione.

  Consigli:
  Per la variante ricordati l'uso degli indici del ciclo ;)

  http://www.imparareaprogrammare.it
*/

const N = 5;
const numbers = [];

for (let i=0; i<N; i++) {
  numbers[i] = Math.floor(Math.random() * (10+1));
}

/* questo metodo inverte l'array numbers */
console.log(`array ottenuto = ${numbers}
  array invertito = ${numbers.reverse()}`);

/* questo metodo aggiunge gli elementi in ordine inverso in coda all'array
e stampa separatamente le due metà */

for (let i=N-1; i>=0; i--) {
  let count = numbers.push(numbers[i]);
}

console.log(`array ottenuto = ${numbers.filter((item,index) => index<N)}
  array invertito = ${numbers.filter((item,index) => index>=N)}`);