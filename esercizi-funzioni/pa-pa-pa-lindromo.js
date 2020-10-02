/*
  Pa-pa-pa lindomo
  Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
  Nel controllo scarta gli spazi e i segni di punteggiatura.

  Esempio:
    Input: i topi non avevano nipoti
    Output: TRUE


  Consigli:
  Puoi eliminare spazi e segni di punteggiatura usando le espressioni regolari o il metodo del tipo stringa chiamato replace,
  in questo modo: str.replace(/\W/g, "").

  http://www.imparareaprogrammare.it
*/

/* Metodo più complesso confronta la prima metà della stringa
con l'inverso della seconda metà e se sono uguali la stringa iniziale è palindroma */

function checkPal1(str) {
  const a = str.replace(/\W/g, "");
  let b = a.slice(0, Math.floor(a.length/2));
  let c = a.slice(Math.ceil(a.length/2), a.length).split("").reverse().join("");

  return ((b===c) ? 'TRUE' : 'FALSE')
}

/* Metodo più semplice confronta la stringa con la copia invertita */
function checkPal2(str) {
  const a = str.replace(/\W/g, "");
  let b = a.split("").reverse().join("");

  return ((a===b) ? 'TRUE' : 'FALSE')
}

const str = 'i topi non avevano nipoti';

console.log(`Input: ${str}
  Output:${checkPal2(str)}`);