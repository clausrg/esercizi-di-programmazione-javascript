/*
  La funzione banale
  Scrivi una funzione di uguaglianza che prenda in input due argomenti e restituisca TRUE se i due argomenti sono IDENTICI,
  FALSE altrimenti.

  Esempi:
    Input: n = 2, m = 3
    Output: FALSE

    Input: n = 2, m = '2'
    Output: FALSE

    Input: n = 2, m = 2
    Output: TRUE

    
  http://www.imparareaprogrammare.it
*/

function equality(a, b) {
  console.log(`Input: n = ${a}, m = ${b}
    Output: ${(a === b) ? 'TRUE' : 'FALSE'}`);
}

// let equality = (a, b) => {
//   console.log(`Input: n = ${a}, m = ${b}
//     Output: ${(a === b) ? 'TRUE' : 'FALSE'}`);
// }

equality(2,3);
equality(2,'2');
equality(2,2);

