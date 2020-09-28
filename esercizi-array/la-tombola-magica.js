/*
  La tombola magica
  Scrivi un programma che dato:
  - un array di 10 elementi di numeri casuali interi (compresi tra 1 e 90 senza ripetizioni),
  - un array di 10 numeri interi a tuo piacimento (compresi tra 1 e 90 senza ripetizioni)
  Verifichi quanti numeri scelti da te sono presenti nell'array principale e restituisca un risultato del tipo:
    2 numeri uguali => ambo
    3 numeri uguali => terna
    4 numeri uguali => quaterna
    5 numeri uguali => cinquina
    tutti i numeri uguali => tombola

  In caso di vittoria dovrà essere stampato un messaggio "Hai fatto X",
  in caso di perdita dovrà essere mostrato il messaggio "Mi dispiace, hai perso!".


  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/

const chooNum = [3, 23, 73, 11, 90, 7, 88, 69, 17, 34];
const randNum = [];
let randNumber, double, equality;
let result =  0;

i = 0;
do {
  randNumber = Math.floor(Math.random() *90 +1);
  double = randNum.some(num => randNumber === num);
  equality = chooNum.some(num => randNumber === num);

  if (!double) {
    if (equality) {
      result++;
    }
    randNum[i] = randNumber;
    i++;
  }
} while(i<10)

switch(result) {
  case 2:
  console.log(`Hai fatto ambo!`);
  break;
  case 3:
  console.log(`Hai fatto terna!`);
  break;
  case 4:
  console.log(`Hai fatto quaterna!`);
  break;
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  console.log(`Hai fatto cinquina!`);
  break;
  case 10:
  console.log(`Hai fatto tombola!!!`);
  break;

  default:
  console.log(`Mi dispiace, hai perso!`);
}

console.log(`${chooNum.sort((a,b) => a-b)}
  ${randNum.sort((a,b) => a-b)}`);

