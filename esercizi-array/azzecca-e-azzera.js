/*
  Azzecca e azzera
  Scrivi un programma che dato un array di 100 elementi, lo riempia con numeri interi casuali da 1 a 50.
  Permetti all'utente di inserire un numero e azzera tutti i gli elementi nell'array principale che sono suoi multipli.
  Richiedi all'utente un altro numero e così via.
  Il programma termina quando tutti gli elementi dell'array principale sono uguali a zero.

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".
  Per richiedere un numero all'utente puoi usare il comando prompt(), se vuoi saperne di più puoi controllare nella
  documentazione: https://developer.mozilla.org/it/docs/Web/API/Window/prompt

  http://www.imparareaprogrammare.it
*/

const a = [];
const numTot = 100;
const numMax = 50;

for (let i = 0; i < numTot; i++) {
  a[i] = Math.floor(Math.random() * numMax + 1);
}

console.log(`Array iniziale = ${a}`);

do {
const aNumber = Number(window.prompt(`Type a number between 1 and ${numMax}`, ''));

a.forEach(function(val,ind,arr){
  arr[ind] = (val%aNumber === 0) ? 0 : val;
})

console.log(`${a.filter(num => num !== 0)} - ${a.every(num => num === 0)}`);
} while (!(a.every(num => num === 0)))

console.log(`Array finale = ${a}`);