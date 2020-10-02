/*
  La funzione che sembra difficile
  Scrivi una funzione che prenda in input due numeri N e K e restituisca la k-esima cifra (partendo da destra) di N.
  Se K è maggiore del numero delle cifre di N, la funzione restituirà 0.

  Esempio:
    Input : N = 123456, K = 3
    Output: 4

    
  http://www.imparareaprogrammare.it
*/


function digitK(n, k) {
	let s = Array.from(n);
	return ((k > 0)&&(k <= s.length)) ? s[k-1] : 0;
}

const N = prompt('Inserisci N');
const K = parseInt(prompt('Inserisci K'));

console.log(`Input : N = ${N}, K = ${K}\nOutput: ${digitK(N, K)}`);