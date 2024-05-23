"use strict";

//creiamo l'array contenente i vari oggetti, uno per animale
const animals =
    [
        { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
        { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
        { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
        { nome: 'gatto', famiglia: 'felidi', classe: 'mammiferi' },
        { nome: 'iguana', famiglia: 'iguanidi', classe: 'rettili' },
        { nome: 'topo', famiglia: 'muridi', classe: 'mammiferi' },
    ];

/* LOGICA ORIGINALE

//inizializziamo un nuovo array, come vuoto, per contenere successivamente la lista dei mammiferi
const mammals = [];

//ciclo for per iterare ogni elemento dell'array
for (let i = 0; i < animals.length; i++) {
//condizione in cui valutiamo l'oggetto corrispondente all'indice attuale
//accediamo alla key classe dell'oggetto utilizzando la dot notation
if (animals[i].classe === 'mammiferi') {
    //se ha mammifero come classe, pushiamo l'oggetto per l'animale corrente nell'array dedicato
    mammals.push(animals[i])
}
}
*/

/*Logica post lezione sui metodi degli array */
//inizializziamo il nuovo array assegnandogli il risultato del metodo filter (con arrow function) sull'array originale
const mammals = animals.filter((animal) => animal.classe === 'mammiferi');

//stampiamo in console l'array risultato
console.log(mammals);