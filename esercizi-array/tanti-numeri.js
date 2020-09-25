/*
  Tanti numeri
  Scrivi un programma che dato array di numeri, calcoli la media dei valori e
  restituisca in output la media e tutti i valori minori della media.

  Esempio:
    Input: a = [3, 5, 10, 2, 8]
    Output: media = 5.6, valori minori = [3, 5, 2]

  Variante:
  Stampa anche quanti sono i valori monori della media e quanti quelli maggiori.

  http://www.imparareaprogrammare.it
*/

const numbers = [3, 5, 10, 2, 8];
let numSum = 0;
numbers.forEach((num) => numSum+=num);
const numAvg = numSum/numbers.length;
const subAvg = numbers.filter(num => num<numAvg);

console.log(`Input: numbers = ${numbers}`);
console.log(`Output: media = ${numAvg},
	valori minori = ${subAvg}`);