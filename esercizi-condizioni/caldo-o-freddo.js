/*
  Caldo o freddo
  Scrivi un programma che dati sette valori relativi alle temperature della settimana
  stabilisca la giornata più calda e quella più fredda.

  Esempio:
    Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
    Output: giornata più calda = 31, giornata più fredda = -6

  http://www.imparareaprogrammare.it
*/

/* È sicuramente più semplice risolvere con gli array */
const a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7;

let min;
let max;

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

if (e>=f) {
	var efMax = e;
	var efMin = f;
} else {
	var efMax = f;
	var efMin = e;
}

if (efMax>=max) {
	max = efMax;
}

if (efMin<=min) {
	min = efMin;
}

if (g>=max) {
	max = g;
}

if (g<=min) {
	min = g;
}

console.log(`Input: a = ${a}, b = ${b}, c = ${c}, d = ${d}, e = ${e}, f = ${f}, g = ${g}
    Output: giornata più calda = ${max}° C, giornata più fredda = ${min}° C`);