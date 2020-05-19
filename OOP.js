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
// console.log(testing.constructor);
// output: ƒ Function() { [native code] }

// 2. we use a function like an object in the time of implementing call(), apply(), bind();

/***  call(), apply(), bind()  ***/  

// if we want to use one function as an object method as much as possible, we can easily do that by using call(), apply(), bind(); It helps us to run function or method at different different execution context of the object.
// if we want to execute our function in a specific context of an object, we can associate that using call(), apply(), bind();

function add(c, d) {
    console.log(this.a + this.b + c + d);
}
console.log();
// console.log(add());
add.call({a:2, b:3}, 3, 4)
add.apply({a:21, b:9}, [5,5]);
const binds = add.bind({a:32, b:18});
binds(32, 43);

/***  pass by value VS pass by reference  ***/  
// if we modify an existing primitive data in a function, we can only modify the clone copy of that. for that, outer data doesn't affected by that.
// On the other hand, if we modify the non primitive data in a function, the same data which is situted out of the function, must be affected. for example:

let n = 10;
function returnNum(num) {
    num = num + 100;
    return num;
}
console.log(returnNum(n)); // 110
console.log(n); // 10

const data = {a: 10, b: 20}
function changeData (obj) {
    obj.a = 100;
    obj.b = 200;
    return obj;
}
console.log(changeData(data));
// output: { a: 100, b: 200 }
console.log(data);
// output: { a: 100, b: 200 }


/***  Prototypical Inheritence  ***/  

// everything in js is object. It's mainly maintained by prototypical inheritence. Every data like string, number, array is inheirted by object. So, I can easily called that, Object is root parent of any other data in javascript.
function Animal(name) {
    return this.name = name;    
}
const cat = new Animal("Cat");
// cat object comes from Animal() constructor, Animal() comes from function type special Object, function comes from Object. It's a root of all.

/***  Property Descriptor  ***/  

const mobile = {
    brand: "Apple",
    ram: '8gb'
}
console.log(mobile);

const brandDescriptor = Object.getOwnPropertyDescriptor(mobile, 'brand');
console.log(brandDescriptor);
/*
{value: "Apple", writable: true, enumerable: true, configurable: true}
__proto__: Object
*/
// that means, If we want, we can write, iterate, and delete that property

// if you need to edit that property, that's also possible using 
Object.defineProperty(mobile, 'brand', {
    writable: false,
    enumerable: false,
    configurable: false
})
// Now we couldn't delete, update and iterate the brand property.


/***  Constructor Prototype  ***/  
// every constructor has a prototype. we can add any property or method with that which accessible to all of his instance object. 

function Calculate(firstNum, secondNum) {
    this.firstNum = firstNum;
    this.secondNum = secondNum;
}

// we can add property or method in Calculate constructor/Object constructor. but i think, the better is add with Calculate constructor.\
// there are two member in OOP such as 1. Instance Member 2. Portotype Member
// All object of Calculate constructor can access the property and method which are created with prototype. that's called protypical inheritence. for example:

const cal1 = new Calculate(4,4);
const cal2 = new Calculate(3,5);

Calculate.prototype.multiply = function () {
    return this.firstNum * this.secondNum;
}

// we can reduce our common code reduncdancy by using Prototype.
Calculate.prototype.add = function() {
    return this.firstNum + this.secondNum;
}
// we can also override the existing prototype method and property
Calculate.prototype.toString = function() {
    return `this first number is ${this.firstNum}`
}

console.log(cal1.multiply()); // 16
console.log(cal2.multiply()); // 15
console.log(cal2.add()); // 8


console.log(cal2.toString()); // this first number is 3

// N.B. we can take access prototype members in instance member and instance members in prototype members as well.

// if we want to get the all properties (isntance & prototype) of a object, we will use for loop
for (var item in cal2) {
    console.log(item);
}
/*
firstNum
secondNum
multiply
add
toString
*/

// If we want to get only the instance property, we can use Object.keys()/Object.values
console.log(Object.keys(cal2));
// [ 'firstNum', 'secondNum' ]

// If we want to check the own property or own instance property of a object, we can use Object.hasOwnProperty();
console.log(cal2.hasOwnProperty('firstNum')); // true
console.log(cal2.hasOwnProperty('add')); // false

// N. B. In spite of having the power of modifying the prototype of built in object as like as that array or same other thing, we didn't change that.
// we only change  our created constructor.