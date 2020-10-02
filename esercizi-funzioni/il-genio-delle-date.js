/*
  Il genio delle date
  Scrivi una funzione che prenda in input due argomenti: il giorno e il mese.
  La funzione deve restituire a quale giorno dell'anno corrisponde (compreso tra 1 e 366).

  Esempio:
    Input : giorno = 5, mese = 2
    Output:
            36

  Consigli:
  Puoi definire un array con i giorni di ogni mese e ciclarlo.

          
  http://www.imparareaprogrammare.it
*/

/* Soluzione complessa */

// function wDay(d,m) {
//   const cal = [];
//   let numDays;
//   let sumM = 0;

//   for (let x=0; x<12; x++) {
//     cal[x] = [];

//     switch (x) {
//       case (2-1):
//       numDays = 29;
//       break;

//       case (4-1):
//       case (6-1):
//       case (9-1):
//       case (11-1):
//       numDays = 30;
//       break;

//       default:
//       numDays = 31;
//     }

//     for (let y=0; y<numDays; y++) {
//       cal[x][y] = y+1;
//     }
//   }

//   for(let i=0; i<(m-1); i++) {
//     sumM += cal[i].length;
//   }

//   return d+sumM
// }

/* Soluzione semplice */

function wDay(d,m) {
  const cal = [31,29,31,30,31,30,31,31,30,31,30,31];
  let sumM = 0;

  for(let i=0; i<(m-1); i++) {
    sumM += cal[i];
  }

  return d+sumM
}


console.log(`Input : giorno = 23, mese = 9\nOutput: ${wDay(23, 9)}`);

