/*
  Che giorno è oggi?
  Scrivi un programma che dato un numero intero compreso tra 1 a 7
  visualizzi il corrispondente giorno della settimana. Sapendo che:
    1 = lunedì
    2 = martedì
    3 = mercoledì
    ...
    7 = domenica
  Utilizza il costrutto Switch-case e prevedi anche il caso in cui il valore immesso non sia valido
  (nel caso stampare un messaggio di errore a tua scelta).

  Esempi:
    Input: numero = 6
    Output: "Sabato"

    Input: numero = 10
    Output: "Errore! Giorno della settimana non valido!"

  Variante:
  Scrivere una versione che anziché i giorni della settimana, visualizzi i nomi dei mesi.

  http://www.imparareaprogrammare.it
*/

const numDay = 9;
const day1 = 'Lunedì';
const day2 = 'Martedì';
const day3 = 'Mercoledì';
const day4 = 'Giovedì';
const day5 = 'Venerdì';
const day6 = 'Sabato';
const day7 = 'Domenica';

switch (numDay) {
  case 1 :
  console.log(`Input: numero = ${numDay}
    Output: \"${day1}\"`);
  break;
  case 2 :
  console.log(`Input: numero = ${numDay}
    Output: \"${day2}\"`);
  break;
  case 3 :
  console.log(`Input: numero = ${numDay}
    Output: \"${day3}\"`);
  break;
  case 4 :
  console.log(`Input: numero = ${numDay}
    Output: \"${day4}\"`);
  break;
  case 5 :
  console.log(`Input: numero = ${numDay}
    Output: \"${day5}\"`);
  break;
  case 6 :
  console.log(`Input: numero = ${numDay}
    Output: \"${day6}\"`);
  break;
  case 7 :
  console.log(`Input: numero = ${numDay}
    Output: \"${day7}\"`);
  break;
  default :
  console.log(`Input: numero = ${numDay}
    Output: \"Errore! Giorno della settimana non valido!\"`);
}