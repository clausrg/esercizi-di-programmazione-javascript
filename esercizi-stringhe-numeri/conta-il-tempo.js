/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/

let totSec = 12560;
const secInMinute = 60;
const secInHour = secInMinute*60;
const h = Math.floor(totSec/secInHour);
const m = Math.floor((totSec-h*secInHour)/secInMinute);
const s = (totSec-h*secInHour)%secInMinute;

console.log(`Input: 12560
Output: ${h} ore, ${m} minuti e ${s} secondi`);