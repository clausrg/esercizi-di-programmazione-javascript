/*
  Il sottosopra
  Scrivi un programma che prenda in input un array multidimensionale e stampi in output la sua trasposta.

  Esempio:
    Input: 
      [
        [1, 2],
        [3, 4],
        [5, 6]
      ]
    Output:
      [
        [1, 3, 5],
        [2, 4, 6],
      ]

  http://www.imparareaprogrammare.it
*/

const rows = 3;
const cols = 2;

const max = rows*cols;
const min = 1;

const a = [];
const b = [];

for (let x=0; x<rows; x++) {
  a[x] = [];

  for (let y=0; y<cols; y++) {
    a[x][y] = (cols*x) + (y+1);
  }
}

for (let x=0; x<cols; x++) {
  b[x] = [];

  for (let y=0; y<rows; y++) {
    b[x][y] = a[y][x];
  }
}

// console.table(a);
// console.table(b);

console.log(`\tInput:
  \t\t[
  \t\t\t[${a.join('],\n\t\t\t[')}]
  \t\t]
  \tOutput:
  \t\t[
  \t\t\t[${b.join('],\n\t\t\t[')}]
  \t\t]`);