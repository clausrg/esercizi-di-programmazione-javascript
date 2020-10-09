/*
  La mia rubrica
  Scrivi un programma per la gestione di una rubrica telefonica.

  Definisci un oggetto che rappresenti un contatto e, visto che stai diventando bravo/a, le proprietà dell'oggetto sono a tua discrizione.
  L'unico vincolo che hai è di inserire almeno il nome e il numero di telefono come stringhe.

  Definisci un altro oggetto che rappresenti la lista dei contatti, quindi sarà formato da un array di contatti.
  Implementa i metodi dell'oggetto per le seguenti operazioni:
      - Visualizzazione dell'intera lista contatti
      - Inserimento di un nuovo contatto
      - Modifica di uno contatto passando in input l'indice dell'array
      - Cancellazione di un contatto passando in input l'indice dell'array
      - Ricerca passando il nome e restituendo il singolo contatto.

  Variante:
  Migliora i metodi di Modifica e Cancellazione, al posto di prendere in input l'indice dell'array passa in input il nome
  e ricava l'indice sul quale applicare l'operazione.

  http://www.imparareaprogrammare.it
*/

let contacts = [
  {name: 'Paolo', surname: 'Rossi', gen: 'M', age: 23, tel: '+39 02 6101885'},
  {name: 'Beatrice', surname: 'Lago', gen: 'F', age: 53, tel: '+39 349 3603251'},
  {name: 'Claudio', surname: 'Saragozza', gen: 'M', age: 47, tel: '+39 347 5233715'},
  {name: 'Andrea Mario', surname: 'Russo', gen: 'M', age: 54, tel: '+39 349 1234567'}
];

const phoneBook = {
  contacts,
  promptProps: function() {
    const name = prompt('Write the name');
    const surname = prompt('Write the surname');
    const gen = prompt('Write the gender');
    const age = prompt('Write the age');
    const tel = prompt('Write the phone number');

    const checkProps = (!name)||(!surname)||(!gen)||(!age)||(!tel) ? false : true;
    if (checkProps) {
      const newContact = {name,surname,gen,age,tel};
      return newContact;
    } else {
      return false;
    }
  },
  search: function(toFind) {
    if(!toFind) toFind = prompt('Write the name, surname or phone number');
    
    const found = phoneBook.contacts.find(({name,surname,tel},ind) =>
      (name === toFind)||(surname === toFind)||(tel === toFind));

    if (found)
      console.log(`FOUND CONTACT:
    ${found.surname} ${found.name}
    gender: ${found.gen}
    age: ${found.age}
    phone number: ${found.tel}`);
    else
      console.log('Sorry, no contact found');

    return found;
  },
  list: function() {
    if (phoneBook.contacts.length > 0) {
      let contactList = [];

      phoneBook.contacts.forEach(function(item) {
        contactList.push(`${item.surname} ${item.name}\ntel: ${item.tel}`);
      });

      return contactList.join('\n\n');
    } else {
      return 'There are no contacts in the phone book';
    }
  },
  insert: function() {
    const newContact = phoneBook.promptProps();
    if (newContact) {
      phoneBook.contacts.push(newContact);
      return phoneBook.list();
    } else {
      return 'You entered an invalid contact!';
    }
  },
  modify: function(ind) {
    // while ((!ind)||(ind<1)||(ind>phoneBook.contacts.length))
    //   ind = parseInt(prompt(`Write a number between 1 and ${phoneBook.contacts.length}`), 10);
    
    const foundContact = phoneBook.search();
    if (foundContact) {
      const contactInd = phoneBook.contacts.findIndex(item => item === foundContact);
      const newContact = phoneBook.promptProps();

      if (newContact) {
        phoneBook.contacts[contactInd] = newContact;
        return phoneBook.list();
      } else {
        return 'You entered an invalid contact!';
      }
    }
  },
  delete: function(ind) {
    if (phoneBook.contacts.length>0) {
      // while ((!ind)||(ind<1)||(ind>phoneBook.contacts.length))
        // ind = parseInt(prompt(`Write a number between 1 and ${phoneBook.contacts.length}`), 10);
      // const newContacts = phoneBook.contacts.filter((item,index) => index !== ind-1);

      const foundContact = phoneBook.search();
      if (foundContact) {
        const newContacts = phoneBook.contacts.filter(item => item !== foundContact);

        phoneBook.contacts = newContacts;
      }
      return phoneBook.list();
    } else {
      return 'Your phoneBook is empty!';
    }
  }
};

console.log(phoneBook.list());
