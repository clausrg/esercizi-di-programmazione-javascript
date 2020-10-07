/*
  Verifica la data
  Scrivi un programma che definisca un oggetto per la rappresentazione di una data e verifichi se è valida o meno.
  L'oggetto sarà composto da giorno, mese e anno (input a piacere).

  Esempio:
    Input:
      day: 18
      month: 19
      year: 2016
    Output:
      "La data non è valida!"

  http://www.imparareaprogrammare.it
*/

function checkDate(d,m,y) {
  const mDays = [31,29,31,30,31,30,31,31,30,31,30,31];
  const numDays = mDays[m-1];
  if ((m>0)&&(m<=12)&&(d>0)&&(d<=numDays)&&(y>0)) {
    var date = `${d}/${m}/${y}`;
  } else {
    var date = 'La data non è valida!';
  }
  const printDate = `Input:\n\tday: ${d}\n\tmonth: ${m}\n\tyear: ${y}\nOutput: \n\t${date}`;

  return printDate
}

const d = prompt('Inserisci un giorno');
const m = prompt('Inserisci un mese');
const y = prompt('Inserisci un anno');

console.log(checkDate(d,m,y));