/*
  Maggiore e minore
  Scrivi un programma che dati quattro numeri in input,
  restituisca in output il maggiore e il minore.

  Esempio:
    Input: a = 3, b = -1, c = 4, d = -2
    Output: maggiore = 4, minore = -2
    

  http://www.imparareaprogrammare.it
*/


const a = 132, b = -284, c = 34, d = 41;
let max;
let min;

/* Questo metodo è complesso ma ha il pregio di mettere in ordine tutti i valori.
Ha senso solo se il numero delle variabili da ordinare è piccolo */
if (b>=a) {
	// b,a
	if (c>=b) {
		// c,b,a
		if (d>=c) {
			// d,c,b,a
			max = d;
			min = a;
		} else if (d>=b) {
			// c,d,b,a
			max = c;
			min = a;
		} else if (d>=a) {
			// c,b,d,a
			max = c;
			min = a;
		} else {
			// c,b,a,d
			max = c;
			min = d;
		}
	} else if (c>=a) {
		// b,c,a
		if (d>=b) {
			// d,b,c,a
			max = d;
			min = a;
		} else if (d>=c) {
			// b,d,c,a
			max = b;
			min = a;
		} else if (d>=a) {
			// b,c,d,a
			max = b;
			min = a;
		} else {
			// b,c,a,d
			max = b;
			min = d;
		}
	} else {
		// b,a,c
		if (d>=b) {
			// d,b,a,c
			max = d;
			min = c;
		} else if (d>=a) {
			// b,d,a,c
			max = b;
			min = c;
		} else if (d>=c) {
			// b,a,d,c
			max = b;
			min = c;
		} else {
			// b,a,c,d
			max = b;
			min = d;
		}
	}
} else {
	// a,b
	if (c>=a) {
		// c,a,b
		if (d>=c) {
			// d,c,a,b
			max = d;
			min = b;
		} else if (d>=a) {
			// c,d,a,b
			max = c;
			min = b;
		} else if (d>=b) {
			// c,a,d,b
			max = c;
			min = b;
		} else {
			// c,a,b,d
			max = c;
			min = d;
		}
	} else if (c>=b) {
		// a,c,b
		if (d>=a) {
			// d,a,c,b
			max = d;
			min = b;
		} else if (d>=c) {
			// a,d,c,b
			max = a;
			min = b;
		} else if (d>=b) {
			// a,c,d,b
			max = a;
			min = b;
		} else {
			// a,c,b,d
			max = a;
			min = d;
		}
	} else {
		// a,b,c
		if (d>=a) {
			// d,a,b,c
			max = d;
			min = c;
		} else if (d>=b) {
			// a,d,b,c
			max = a;
			min = c;
		} else if (d>=c) {
			// a,b,d,c
			max = a;
			min = c;
		} else {
			// a,b,c,d
			max = a;
			min = d;
		}
	}
}

console.log(`Input: a = ${a}, b = ${b}, c = ${c}, d = ${d}
	Output: maggiore = ${max}, minore = ${min}`);


/* questo metodo è più semplice ma retituisce solo il valore max e quello min
senza curarsi dell'ordine di tutti i valori */

if (a>=b) {
	var abMax = a;
	var abMin = b;
} else {
	var abMax = b;
	var abMin = a;
}

if (c>=d) {
	var cdMax = c;
	var cdMin = d;
} else {
	var cdMax = d;
	var cdMin = c;
}

if (abMax>=cdMax) {
	max = abMax;
} else {
	max = cdMax;
}

if (abMin<=cdMin) {
	min = abMin;
} else {
	min = cdMin;
}

console.log(`Input: a = ${a}, b = ${b}, c = ${c}, d = ${d}
	Output: maggiore = ${max}, minore = ${min}`);


/* È sicuramente più semplice risolvere con gli array */
const numArray = [a,b,c,d];
numArray.sort((a,b)=>a-b);
max = numArray[numArray.length-1];
min = numArray[0];

console.log(`Input: a = ${a}, b = ${b}, c = ${c}, d = ${d}
	Output: maggiore = ${max}, minore = ${min}`);