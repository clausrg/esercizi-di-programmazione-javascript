/*
  Conta il numero
  Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

    
  http://www.imparareaprogrammare.it
*/

function digits(n) {
	if ((n>=0)&&(n<10000)) {
		const d = n.toString().length;
		const w = (d === 1) ? 'cifra' : 'cifre';

		return `Input: numero = ${n}\nOutput: ${d} ${w}`
	} else {
		return 'Il valore inserito non è valido. Riprova!'
	}
}

let num = parseInt(prompt('Inserisci un numero positivo minore di 10000'));

console.log(digits(num));