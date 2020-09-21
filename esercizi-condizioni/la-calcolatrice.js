/*
  La calcolatrice
  Scrivi un programma che dati:
    - Due numeri
    - Una stringha che identifichi l'operazione da eseguire, es: "somma"
  Restituisca il valore ottenuto calcolando l'operazione tra i due numeri.

  Le operazioni supportate sono le suguenti:
    somma
    sottrazione
    moltiplicazione
    divisione
    modulo (solo tra interi)
    potenza
    media


  Esempi:
    Input: a = 5, b = 6, operazione = "somma"
    Output: 11

    Input: a = 5, b = 6, operazione = "media"
    Output: 5.5


  Utilizza il costrutto Switch-Case, gestire anche il caso di operazione non valida (non presente tra le operazioni consentite).


  http://www.imparareaprogrammare.it
*/

const operation = 'potenza';
const a = 2;
const b = 3;

let output;

switch (operation) {
  case 'somma' :
  output = `${operation} tra ${a} e ${b}: il risultato è ${a + b}`;
  break;

  case 'sottrazione' :
  output = `${operation} tra ${a} e ${b}: il risultato è ${a - b}`;
  break;

  case 'moltiplicazione' :
  output = `${operation} tra ${a} e ${b}: il risultato è ${a * b}`;
  break;

  case 'divisione' :
  output = `${operation} tra ${a} e ${b}: il risultato è ${a / b}`;
  break;

  case 'modulo' :
  output = `resto della divisione tra ${a} e ${b} (solo tra interi): il risultato è ${Math.floor(a) % Math.floor(b)}`;
  break;

  case 'potenza' :
  output = `${operation} di ${a} alla ${b}°: il risultato è ${a ** b}`;
  break;

  case 'media' :
  output = `${operation} tra ${a} e ${b}: il risultato è ${(a + b) / 2}`;
  break;

  default :
  output = `${operation}: operazione non valida`;
}

console.log(output);