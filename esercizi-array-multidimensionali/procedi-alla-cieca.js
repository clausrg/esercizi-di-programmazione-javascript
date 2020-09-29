/*
  Procedi alla cieca
  Scrivi un programma che stampi il contenuto di una matrice i cui valori interi sono generati casualmente nel range di 0 e 100.

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/

const a = [];

for (let x=0; x<10; x++) {
	a[x] = [];
	for (let y=0; y<10; y++) {
		a[x][y] = Math.floor(Math.random() * 101);
	}
}

console.table(a);

/* Variante con i numeri ordinati da 0 a 99 */

for (let x=0; x<10; x++) {
	a[x] = [];
	for (let y=0; y<10; y++) {
		a[x][y] = x*10+y;
	}
}

console.table(a);