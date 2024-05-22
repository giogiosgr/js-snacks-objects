"use strict";

//creazione array con gli oggetti che rappresentano persone
const people =
    [
        { firstName: 'Mario', lastName: 'Rossi', age: 35 },
        { firstName: 'Young', lastName: 'Boy', age: 16 },
        { firstName: 'Ajeje', lastName: 'Brazorf', age: 3 },
        { firstName: 'Ximenes', lastName: 'Uzeda', age: 200 }
    ]

//inizializzazione nuovo array, come vuoto, che conterrà gli oggetti con i dati delle persone, più la info aggiuntiva
const peopleInfo = [];

//ciclo for per iterare per tutto l'array degli oggetti di tipo persona
for (let i = 0; i < people.length; i++) {
    //creazione oggetto di appoggio, inizializzato con l'oggetto di tipo persona corrente dell'array
    //utilizzo dello spread operator per creazione di un nuovo oggetto (anziché una reference)
    const temp = { ...people[i] };
    //condizione in cui valutiamo se l'attributo età dell'oggetto di tipo persona è idonea o meno per avere la patente
    if (temp.age >= 18) {
        //creiamo l'attributo info con stringa che indica che la persona può guidare
        temp.info = `${temp.firstName} ${temp.lastName} può guidare`
    } else {
        //altrimenti l'attributo info avrà indicazione che la persona non può guidare
        temp.info = `${temp.firstName} ${temp.lastName} NON può guidare`
    }
    //push dell'oggetto di appoggio nell'array dedicato a contenere tutti gli oggetti con le info
    peopleInfo.push(temp);
}

//stampa del nuovo array
console.log(peopleInfo);

//stampa dell'array originale (invariato)
console.log(people)