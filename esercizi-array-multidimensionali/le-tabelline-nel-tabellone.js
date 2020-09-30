/*
  Le tabelline nel tabellone
  Scrivi un programma che stampi il tabellone delle tabelline, da 0 a 10.
  In questo modo:
    x | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0
    1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    2 | 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20
    ...
    10 | 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100
    
  http://www.imparareaprogrammare.it
*/


const a = [];
const rows = 10;
const cols = 10;
const minRow = 0;
const minCol = 0;

for (let x=minRow; x<=rows; x++) {
  a[x] = [];
  for (let y=minCol; y<=cols; y++) {
    a[x][y] = x*y;
  }
}
console.table(a);

/* Stampo esattamente come da esempio */

const sep = '\t|\t';
const b = [];
let head = 'x';

for (let i=0; i<=rows; i++) {
  head += `${sep}${i}`;
  if (i>=minRow) {
    b[i] = `${i}${sep}${a[i].join(sep)}`;
  }
}

console.log(`${head}\n${b.join('\n')}`);