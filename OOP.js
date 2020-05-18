/***  Object Literal  ***/  
const square = {
    length: 12,
    getSquare() {
        return this.length * this.length;
    }
}
console.log(square.getSquare());

/***  this  ***/ 
// there are three cases of this keyword. If we keep in our mind that cases, It would be quite easier to deal with that.

// first
// only this keyword refers window object
function getThis() {
    console.log(this);
}
getThis();

// if this is used in a class or object, it will refer that property or method.
const person = {
    name: 'John Kit',
    salary: 15000,
    cost: 12000,
    depositMoney(){
        return this.salary - this.cost
    },
    getYearlyDeposit() {
        return `${this.name}'s yearly deposit is ${this.depositMoney() * 12}`;
    }
}
console.log(person.depositMoney());
// expected output: 3000
console.log(person.getYearlyDeposit());
// output: John Kit's yearly deposit is 36000

// finally, if this is used after an object, this refers that object property.
const person2 = {
    salary: 30000,
    cost: 22000,
    deposit: person.depositMoney
}
console.log(person2.deposit());
// expected output: 8000
// we see that, In that position this keyword have used the properties of person2 object. 

// before es6, followed two Pattern to maintain a class
// 1. Factorial 2. Constructor.
// Factorial Pattern
const personName =  function() {
    return {
        firstName: 'John',
        lastName: 'Kit',
        getFullName: function () {
            return `${this.firstName} ${this.lastName}`
        }
    }
}
console.log(personName());
/*
    {
        firstName: 'John',
        lastName: 'Kit',
        getFullName: [Function: getFullName]
    }
*/

// Constructor Pattern
function Address(city, country) {
    this.city = city;
    this.country = country;
    this.getAddress = function() {
        return `${this.city}, ${this.country}`;
    }
}
const ads = new Address('Chittagong', 'Bangladesh');
console.log(ads);
/*
    expected output: 
    Address {
        city: 'Chittagong',
        country: 'Bangladesh',
        getAddress: [Function]
    }
*/
console.log(ads.getAddress());
// expected output: Chittagong, Bangladesh

// function is special type of object in javascript. We can prove that by doing several things. such as... 
// 1. every object must have a constructor. If we want to access that, of course we do that. 
const testing = function() {
    console.log("something");
}
console.log(testing.constructor);
// output: ƒ Function() { [native code] }

// 2. we use a function like an object in the time of implementing call(), apply(), bind();


