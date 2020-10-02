/*
  Tick, tack, timer!
  Scrivi una funzione che dato un numero in input, stampi il conto alla rovescia a partire dal numero passato.

  Esempio:
    Input: n = 5
    Output:
            4
            3
            2
            1
            0

            
  http://www.imparareaprogrammare.it
*/

function timer(n) {
  let a = `Input: n = ${n}\nOutput:\n`;

  do {
    a += `\t\t\t\t${n-1}\n`;
    n--;
  } while (n > 0)

  console.log(a);
}

num = prompt('Inserisci un numero positivo');

timer(num);