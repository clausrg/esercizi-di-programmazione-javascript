/*
  Il conta cifre
  Scrivi un programma che dato un numero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

  http://www.imparareaprogrammare.it
*/

const num = -1;

const numString = num.toString();
const numChar = numString.length;

const output = (num>=0) ? numChar : numChar-1;
const charCifr = (num > 9)||(num<-9) ? 'e' : 'a';

console.log(`Input: numero = ${num}
	Output: ${output} cifr${charCifr}`);