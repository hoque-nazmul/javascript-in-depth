// ***** Object Literal & Object Constructor ***** //
// Object Literal is preferable for that.
// Object Literal Example
// const person = {
//     name: "Mukta Hoque",
//     profession: 'Family Planner',
//     age: 20,
//     address: 'Broklyn, NY'
// }
// console.log(person);

// Object Constructor Example
const objConstructor = new Object();
objConstructor.name = "Towhid";
objConstructor.age = 23
// console.log(objConstructor);


// ***** Accessing Object ***** //
/*
    Threre are two ways to access a object property. such as
    1. Dot Notation
    2. Array Notation or Bracket Notation
*/
// Dot Notation Example: 
// console.log(person.name);
// console.log(person.age);

// Array or Bracket Notation Example: 
// console.log(person['name']);


// ***** What Notation do you work with? ***** //
const person = {
    name: "Mukta Hoque",
    profession: 'Family Planner',
    age: 20,
    address: 'Broklyn, NY'
}
// It's a very important question and tricky also. Normally, we use Dot Notation in our daily programming. But the situation is like that, When we didn't know which object property or method we should explore or if the Object property or method come from user dynamically, then we can easily handle that using Array or Object Notation. 
// Suppose, user wants to access the age of person but we didn't know what he wants or what's his input. We can assign a varible what user wants. For Example:
const userInput = 'age';
// If we access that user's input via Dot Notation, It gives us undefined value of age Property. But It's not like that.
// console.log(person.userInput); //undefined

// we can easily solve that type of problem through using Array or Bracket Notation.
// console.log(person[userInput]); //20


// ***** CRUD | Object Property ***** //
// It would't be difficult to play with object property for creating, Reading, Updating and Deleting.

// For creating property, We must use that property name which wasn't included before in the object. For Example:
person.email = "mukta@gmail.com";
// console.log(person);

// Simply we can read the object property by using 'object.object.property'
// console.log(person.name);

// For updating property, we have to select an property which used before in our existing object. 
person.age = 22;
// console.log(person);

// To delete the object property, we have to use 'delete operator'. It's an cool operator which using we delete any object property.
delete person.profession;
// console.log(person);


// ***** Object Comparison ***** //
// We can easiy compare string, number, boolean etc. But it's not a same thing to compare object. When a object would be compared, javascript compare them by their memory location. That's why we couldn't compare object data type via traditional system.
// Dont' worry, I must describe the way.
/*
    Threre are simple two ways to compare object. 
    1. Comparing every propery of object. // thats's actually not a good solution.
    2. Comparing object after coverting the object to JSON using JSON.stringify(); 
*/
// For Example: 
const objOne = {a : 2, b : 3, c : 4}
const objTwo = {a : 2, b : 3, c : 4}
// First Way
// if (objOne.a === objTwo.x && objOne.b === objTwo.y && objOne.c === objTwo.z) {
//     console.log('Equal');
// }
// else {
//     console.log('Not Equal');
// }

// Seccond Way
const objOneJson = JSON.stringify(objOne);
const objTwoJson = JSON.stringify(objTwo);
// console.log(objOneJson);
// console.log(objTwoJson);
// console.log(objOneJson === objTwoJson);

// ***** in Operator ***** //
// Through in Operator we can easily check the existance of property or method of an Object. For Example:
// console.log('age' in person);

// ***** Object Iteration ***** //
for (property in person) {
    // property means object's key
    // console.log(property + ' : ' + person[property]);
}


// ***** Most Used Build=in-Methods of Object ***** //

// ***** Object.keys(obj) ***** //
// It's return an array including the object's kyes;
// console.log(Object.keys(person)); //[ 'name', 'age', 'address', 'email' ]

// ***** Object.values(obj) ***** //
// It's return an array including the object's values.
// console.log(Object.values(person)); //[ 'Mukta Hoque', 22, 'Broklyn, NY', 'mukta@gmail.com' ]

// ***** Object.entries(obj) ***** //
// It's a object method which return a two dimentional array by pairing object key with object value.
// console.log(Object.entries(person));
/*
    Output: 
    [
        [ 'name', 'Mukta Hoque' ],
        [ 'age', 22 ],
        [ 'address', 'Broklyn, NY' ],
        [ 'email', 'mukta@gmail.com' ]
    ]
*/

// ***** Object.assign(obj) & Object.assign({}, obj) ***** //
// It's used to copy a object by value not reference.
const newPerson = Object.assign(person);
// console.log(person);
// When newPerson object is changed, person object not be changed.

// It's used to copy a object not only value but also reference.
const copiedPerson = person;
// console.log(person);
// When copiedPerson object is changed, person object is changed automitaclly.


// ***** Object.freeze() ***** //
// After Freezing the Object we cann't create, delete, update the Object elements
const personAges = {towhid: 32, john: 22, justin: 25}
Object.freeze(personAges);
delete personAges.towhid;
/*
    Don't Do that after Freezing Object
    personAges.john = 32;
    personAges.clark = 50;
    delete personAges.towhid;
*/
// console.log(personAges);

// ***** Object.seal() ***** //
// Object.seal() is used to protect object properties to delete and add. It doesn't give any obstacle to update.
const personSalary = {sakib: 3000, rubel: 5000, sabbir: 1000}
Object.seal(personSalary);
// Don't Do that
// personSalary.mohsin = 500;
// delete personSalary.sabbir;
// console.log(personSalary);