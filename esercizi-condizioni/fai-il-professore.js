/*
  Fai il professore
  Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
    v < 18: insufficiente
    18 <= v < 21: sufficiente
    21 <= v < 24: buono
    24 <= v < 27: distinto
    27 <= v <= 29: ottimo
    v = 30: eccellente
  Utilizza costrutto If.

  Esempio:
    Input: v = 29
    Output: Distinto

  Variante
  Realizzare una versione con il costrutto Switch-Case. In questo caso gestire anche il caso in cui il voto inserito non sia valido.

  http://www.imparareaprogrammare.it
*/


const vote = Math.floor(Math.random()*50);
let output;

/* Variante A: costrutto if. */

if ((vote < 0) || (vote > 30)) {
  output = `${vote}: voto non valido`;
} else if (vote < 18) {
  output = `${vote}: insufficiente`;
} else if ((vote >= 18) && (vote < 21)) {
  output = `${vote}: sufficiente`;
} else if ((vote >= 21) && (vote < 24)) {
  output = `${vote}: buono`;
} else if ((vote >= 24) && (vote < 27)) {
  output = `${vote}: distinto`;
} else if ((vote >= 27) && (vote < 30)) {
  output = `${vote}: ottimo`;
} else if (vote === 30) {
  output = `${vote}: eccellente`;
}

console.log(`Output: variante A: ${output}`);


/* Variante B: costrutto switch-case. */

switch (vote) {
  case 0 :
  case 1 :
  case 2 :
  case 3 :
  case 4 :
  case 5 :
  case 6 :
  case 7 :
  case 8 :
  case 9 :
  case 10 :
  case 11 :
  case 12 :
  case 13 :
  case 14 :
  case 15 :
  case 16 :
  case 17 :
  output = `${vote}: insufficiente`;
  break;

  case 18 :
  case 19 :
  case 20 :
  output = `${vote}: sufficiente`;
  break;

  case 21 :
  case 22 :
  case 23 :
  output = `${vote}: buono`;
  break;

  case 24 :
  case 25 :
  case 26 :
  output = `${vote}: distinto`;
  break;

  case 27 :
  case 28 :
  case 29 :
  output = `${vote}: ottimo`;
  break;

  case 30 :
  output = `${vote}: eccellente`;
  break;

  default :
  output = `${vote}: voto non valido`;
}

console.log(`Output: variante B: ${output}`);