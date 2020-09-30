/*
  Sommali tutti
  Scrivi un programma che:
    - Prenda in input due numeri, N e M.
    - Generi una matrice di NxM popolata di valori casuali da 1 a 100.
    - Stampi la matrice e la somma di tutti i valori contenuti.

    Esempio:
      Input: N = 2, M = 3
      Output:
        matrice =
        [
          [1, 50, 100],
          [1, 20, 40],
        ]
        somma = 212

  http://www.imparareaprogrammare.it
*/

const N = 2;
const M = 3;

const a = [];

for (let x=0; x<N; x++) {
  a[x] = [];

  for (let y=0; y<M; y++) {
    a[x][y] = Math.floor(Math.random() * 100+1);
  }
}

const b = a.flat();

console.log(`Input: N = ${N}, M = ${M}
      Output:
        matrice =
        [
          [${a.join('],\n[')}]
        ]
        somma = ${b.reduce((acc,num) => acc + num)}`);