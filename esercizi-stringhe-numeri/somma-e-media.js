/*
  Somma e media
  Scrivi un programma che dati 5 numeri restituisca in output la somma e la media.

  Esempio:
    Input: a = 1, b = 2, c = 3, d = 4, e = 5
    Output: somma = 15, media = 3
  
  http://www.imparareaprogrammare.it
*/

/* METODO SEMPLICE*/
const a = 1, b = 2, c = 3, d = 4, e = 5;

const sum = a+b+c+d+e;
const avg = (sum)/5;

console.log(`Input: a = ${a}, b = ${b}, c = ${c}, d = ${d}, e = ${e}`);
console.log(`Output: somma = ${sum}, media = ${avg}`);

/* Prova a utilizzare i tagged template e le array*/