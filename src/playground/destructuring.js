//Destructuring

const person = {
    name: 'Haine',
    age: 21,
    location: {
        city: 'NJ',
        temperature: 80
    }
};

const {name, age} = person;

//console.log(`${name} is ${age}.`);

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name:publisherName='Self-Published'} = book.publisher;

//console.log(publisherName); //default 'Self-Published

//Array destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [, city, state = 'NY', zip] = address;
console.log(`You are in ${city}, ${state}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemDrink, , medium] = item;
console.log(`A medium ${itemDrink} costs ${medium}.`)