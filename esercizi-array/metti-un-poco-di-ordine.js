/*
  Metti un po' d'ordine
  Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

  Esempio:
    Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
    Output: [8, 7, 6, 5, 5, 3, 2, 1, -4, -2]

  Variante:
  Prova ad ordinali in modo crescente.

  Consigli:
  Ti consiglio di non usare il metodo sort per questo esercizio ma di provare a scrivere tu il codice per ordinare gli array,
  usando if e cicli ;)

  http://www.imparareaprogrammare.it
*/

const a = [];

for (let i=0; i<10; i++) {
  a[i] = Math.floor(Math.random() * 21-10);
}

console.log(`Ordine crescente (sort) = ${a.sort((a,b) => a-b)}`);
console.log(`Ordine decrescente (sort) = ${a.reverse()}`);


/* Soluzione senza usare il metodo sort() */

const b = [];

for (let i=0; i<10; i++) {
  b[i] = Math.floor(Math.random() * 21-10);

  b.forEach(function(num,ind,arr){
    if ((i>0)&&(ind<i)&&(num>arr[i])) { // ordine crescente per invertire usare num<arr[i]
      arr[ind] = arr[i];
      arr[i] = num;
    }
  });
}

console.log(`Ordine crescente = ${b}`);
console.log(`Ordine decrescente = ${b.reverse()}`);