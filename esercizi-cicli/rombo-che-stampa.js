/*
  Rombo che stampa!
  Scrivi un programma che dato un numero dispari stampi un rombo di lettere.

  Esempio:
    Input : 5
    Output:
            X
           XXX
          XXXXX
           XXX
            X

  Consiglio:
  Per indentare puoi usare il tab con '\t'.
  
  http://www.imparareaprogrammare.it
*/


const n = 17; // solo numeri dispari
const maxRow = n;
const minRow = 1;
const middleRow = (minRow + maxRow) / 2;

const tabs = '\t'+'\t';
const fullChar = 'X';
const emptyChar = ' ';

let numFull, numEmpty, full, empty;

let i = minRow;

console.log(`Input: ${n}\nOutput:`);

while (i <= maxRow) {
  numFull = n - Math.abs(i - middleRow) * 2;
  numEmpty = (n - numFull) / 2;

  full = '';
  for (let i1=0; i1<numFull; i1++) {
    full += fullChar;
  }

  empty = '';
  for (let i1=0; i1<numEmpty; i1++) {
    empty += emptyChar;
  }
  console.log(`${i}${tabs}${empty}${full}`);

  i++;
}
