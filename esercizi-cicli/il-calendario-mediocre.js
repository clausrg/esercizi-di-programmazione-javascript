/*
  Il calendario mediocre
  Scrivi un programma che dato:
    - Il numero di giorni nel mese
    - Il giorno della settimana in cui questo comincia (0: lunedì ... 6: domenica)
  Stampi il calendario di un mese.

  Esempio:
    Input: numero giorni = 31, giorno settimana = 0
    Output: Lun 1
            Mar 2
            Mer 3
            Gio 4
            Ven 5
            Sab 6
            Dom 7
            Lun 8
            Mar 9
            Mer 10
            Gio 11
            Ven 12
            Sab 13
            Dom 14
            Lun 15
            Mar 16
            Mer 17
            Gio 18
            Ven 19
            Sab 20
            Dom 21
            Lun 22
            Mar 23
            Mer 24
            Gio 25
            Ven 26
            Sab 27
            Dom 28
            Lun 29
            Mar 30
            Mer 31


  Variante:
  Piuttosto che avere in input il numero dei giorni del mese passa direttamente il mese e calcola tu da quanti giorni è formato.

  http://www.imparareaprogrammare.it
*/

const numMonth = Math.floor(Math.random() * 12);
let numDay = Math.floor(Math.random() * 7);
let month, mon, dayPerMonth, day;

switch (numMonth) {
    case 0:
    month = 'Gennaio';
    mon = 'GEN';
    dayPerMonth = 31;
    break;

    case 1:
    month = 'Febbraio';
    mon = 'FEB';
    dayPerMonth = 28;
    break;

    case 2:
    month = 'Marzo';
    mon = 'MAR';
    dayPerMonth = 31;
    break;

    case 3:
    month = 'Aprile';
    mon = 'APR';
    dayPerMonth = 30;
    break;

    case 4:
    month = 'Maggio';
    mon = 'MAG';
    dayPerMonth = 31;
    break;

    case 5:
    month = 'Giugno';
    mon = 'GIU';
    dayPerMonth = 30;
    break;

    case 6:
    month = 'Luglio';
    mon = 'LUG';
    dayPerMonth = 31;
    break;

    case 7:
    month = 'Agosto';
    mon = 'AGO';
    dayPerMonth = 31;
    break;

    case 8:
    month = 'Settembre';
    mon = 'SET';
    dayPerMonth = 30;
    break;

    case 9:
    month = 'Ottobre';
    mon = 'OTT';
    dayPerMonth = 31;
    break;

    case 10:
    month = 'Novembre';
    mon = 'NOV';
    dayPerMonth = 30;
    break;

    case 11:
    month = 'Dicembre';
    mon = 'DIC';
    dayPerMonth = 31;
}

console.log(`Calendario di ${month}:`);

for (let i=1; i<=dayPerMonth; i++) {
    switch (numDay) {
        case 0:
        day = 'Lun';
        break;

        case 1:
        day = 'Mar';
        break;

        case 2:
        day = 'Mer';
        break;

        case 3:
        day = 'Gio';
        break;

        case 4:
        day = 'Ven';
        break;

        case 5:
        day = 'Sab';
        break;

        case 6:
        day = 'Dom';
    }

    console.log(`${day}, ${i} ${mon}`);
    
    if (numDay<6) {
        numDay++;
    } else {
        numDay = 0;
    }
}