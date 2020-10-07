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

function checkDate(day,month,year) {
  const date = {day,month,year};
  const mDays = [31,29,31,30,31,30,31,31,30,31,30,31];
  const numDays = mDays[date.month-1];
  if ((date.month>0)&&(date.month<=12)&&(date.day>0)&&(date.day<=numDays)&&(date.year>0)) {
    return `${date.day}/${date.month}/${date.year}`
  } else {
    return 'La data non è valida!'
  }
}

const d = prompt('Inserisci un giorno');
const m = prompt('Inserisci un mese');
const y = prompt('Inserisci un anno');

console.log(`Input:
\tday: ${d}
\tmonth: ${m}
\tyear: ${y}
Output:
\t${checkDate(d,m,y)}`);