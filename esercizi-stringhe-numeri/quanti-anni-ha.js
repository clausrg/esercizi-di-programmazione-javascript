/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/

const currentYear = 2020;
const birthYear = 1991;

const currentAge = currentYear - birthYear;
const to100 = 100 - currentAge;

console.log(`Input: anno corrente = ${currentYear}, anno di nascita = ${birthYear}
Output: età = ${currentAge}, anni mancanti = ${to100}`);