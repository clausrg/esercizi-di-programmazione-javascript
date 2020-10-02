/*
  I primi numeri…primi!
  Scrivi una funzione che prenda in input un numero e restituisca TRUE se è un numero primo, FALSE altrimenti.
  Scrivi una seconda funzione, che prenda in input un numero N e stampi i primi N numeri primi.

  Esempio:
    Input: n = 5
    Output:
          TRUE

            2
            3
            5
            7
            11


  Consigli:
  Per non ripetere il codice, nella seconda funzione puoi richiamare la prima funzione ;)

  http://www.imparareaprogrammare.it
*/

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false;
    return num > 1;
}

const printPrimes = num => {
  let arr = [];
  let i = 2;
  while (arr.length<num) {
    if (isPrime(i)) arr.push(i);
    i++;
  }

  return `\t\t\t\t${arr.join('\n\t\t\t\t')}`
}

const N = prompt('Inserisci un numero');

console.log(`Input: n = ${N}
Output: \n\t\t\t${(isPrime(N)) ? 'PRIME' : 'NOT PRIME'}\n\n${printPrimes(N)}`);