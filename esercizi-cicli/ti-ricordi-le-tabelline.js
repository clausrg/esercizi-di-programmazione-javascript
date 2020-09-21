/*
  Ti ricordi le tabelline?
  Scrivi un programma che dato un numero stampi la tabellina corrispondente.

  Esempio:
    Input: 5
    Output: 0 5 10 15 20 25 30 35 40 45 50

  http://www.imparareaprogrammare.it
*/

const numMin = 1;
const numMax = 10;
const input = Math.floor(Math.random() * (numMax - numMin +1) + numMin);

let output = `Output: La tabellina del ${input}\n`;

for (let i = 0; i <= 10; i++) {
	output += `${input} x ${i} = ${input * i}\n`;
}

console.log(output);