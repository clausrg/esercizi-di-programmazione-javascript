/*
  Indovina il giorno
  Scrivi un programma con due funzioni, la prima prende in ingresso un intero e verifica se sia compreso nel range da 1 a 7.
  Se è compreso, la funzione restituirà TRUE, se non è compreso restituirà FALSE.

  La seconda funzione:
  - nel caso la prima restituisca TRUE visualizza il giorno della settimana corrispondente,
    considerando la seguente corrispondenza:
        1 = Lunedì
        ...
        7 = Domenica
  - nel caso il giorno non sia compreso nel range, la funzione dovrà restituire un messaggio d'errore simile a questo: 'Peccato, non posso indovinare il giorno.'


  http://www.imparareaprogrammare.it
*/

function controlNum(n) {
  return (n>=1)&&(n<=7);
}

function returnDay(n) {
  if (controlNum(n)) {
    switch (n) {
      case 1:
      return `${n} = Lunedì`

      case 2:
      return `${n} = Martedì`

      case 3:
      return `${n} = Mercoledì`

      case 4:
      return `${n} = Giovedì`

      case 5:
      return `${n} = Venerdì`

      case 6:
      return `${n} = Sabato`

      case 7:
      return `${n} = Domenica`
    }
  } else {
    return 'Peccato, non posso indovinare il giorno.'
  }
}

let num = parseInt(prompt('Inserisci un numero'));

console.log(returnDay(num));