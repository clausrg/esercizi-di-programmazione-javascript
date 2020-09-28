/*
  Operazioni tra array
  Scrivi un programma che dati:
  - 2 array di 10 elementi interi casuali compresi tra 1 e 10,
  - il tipo di operazione aritmetica da effettuare, una delle seguenti:
    addizione
    sottrazione
    moltiplicazione
    divisione
  Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array di appoggio.

  Esempio:
    Input: a = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione"
    Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".


  http://www.imparareaprogrammare.it
*/

const a = [];
const b = [];
const op = ['addizione','sottrazione','moltiplicazione','divisione'];
const randOp = op[Math.floor(Math.random() * 4)];
const result = [];

for (let i=0; i<10; i++) {
  a[i] = Math.floor(Math.random() * 10 + 1);
  b[i] = Math.floor(Math.random() * 10 + 1);
  result[i] = (randOp === 'addizione') ? a[i]+b[i]
  : (randOp === 'sottrazione') ? a[i]-b[i]
  : (randOp === 'moltiplicazione') ? a[i]*b[i]
  : +(a[i]/b[i]).toFixed(2); // Il metodo toFixed converte il numero in stringa, per avere solo i decimali necessari il + riconverte la stringa in numero.
}

console.log(`Input: a = ${a}, b = ${b}, operazione = \"${randOp}\"
  Output: c = ${result}`);