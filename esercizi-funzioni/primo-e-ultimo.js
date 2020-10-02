/*
  Primo e ultimo
  Scrivi due funzioni una che prenda in input tre numeri e restituisca il maggiore,
  l'altra che restituisca il minore.

  Esempio:
    Input: a = 1, b = -10, c = 4
    Output: minore = -10, maggiore = 4

  Variante:
  Scrivi due funzioni che prendano in input un array di numeri, una funzione deve restituire il valore maggiore contenuto nell'array,
  l'altra il valore minore.

  http://www.imparareaprogrammare.it
*/

/* variante con una funzione e un array in input */

function minMax(arr) {
  arr.sort((x, y) => x - y);
  console.log(`Input: array = ${arr}
    Output: minore = ${arr[0]}, maggiore = ${arr[arr.length-1]}`);
}

minMax([1, -10, 4, 20, 8, -13, 33, 5, -3]);


/* versione 1 */

function min1 (a, b, c) {
  let arr = [a, b, c].sort((x, y) => x - y);
  return arr[0]
}

function max1 (a, b, c) {
  let arr = [a, b, c].sort((x, y) => x - y);
  return arr[arr.length-1]
}

console.log(`Input: a = 1, b = -10, c = 4
    Output: minore = ${min1(1, -10, 4)}, maggiore = ${max1(1, -10, 4)}`);

/* versione 2 */

function min2 (arr) {
  arr.sort((x, y) => x - y);
  return arr[0]
}

function max2 (arr) {
  arr.sort((x, y) => x - y);
  return arr[arr.length-1]
}

let array = [1, -10, 4, 20, 8, -13, 33, 5, -3];

console.log(`Input: array = ${array}
    Output: minore = ${min2(array)}, maggiore = ${max2(array)}`);