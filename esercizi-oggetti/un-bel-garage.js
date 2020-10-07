/*
  Un bel garage
  Scrivi un programma per la gestione di un garage.
  Definisci un oggetto che rappresenti un automobile, dovrà contenere almeno marca del veicolo e nome del modello.
  Scrivi una funzione che prenda in input una marca e stampi i modelli presenti nel garage di quella stessa marca.

  Consigli:
  Puoi usare un array come base per salvare le automobili.

  http://www.imparareaprogrammare.it
*/


let cars = [
	{make: 'volvo', model: 'v40'},
	{make: 'fiat', model: 'punto'},
	{make: 'volvo', model: '840'},
	{make: 'volkswagen', model: 'polo'},
	{make: 'volkswagen', model: 'maggiolino'},
	{make: 'volvo', model: 'xc40'},
	{make: 'dacia', model: 'duster'},
];

function printCar(make) {
	let models = [];
	cars.forEach(function(item){
		if (item.make===make) models.push(item.model);
	}); 
	return models.join('\n')
}

const make = prompt('Inserisci una marca di automobili');

console.log(printCar(make));