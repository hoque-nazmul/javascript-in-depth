// Function is like a machine, which reduces our repeated task in our programming. It has three parts like input, proccessing and output. In input, we will provide our data or value. In proccessing, that machine will process or manipulate our providing data to give out expected result. After completing proccessing, It will return an cool output for what we used it.

// ***** return Statement ***** //
// It's tricky question that when i will use return statement. The answer is, When you want to store your function in a variable, another function or whatever for further using, then you have to use return statement.

// function sayHi(name) {
//     const greetMsg = 'Hi, ' + name;
//     console.log(greetMsg);
// }
// sayHi('John Doe');  // it works absolutely fine.
// expected output: Hi, John Doe

// We didn't want to call that function but want to store it with a varieble.
// In that case, we face an problem.
// const greetings = sayHi; 
// console.log(greetings('John'));
/*
    expected output: 
    Hi, John
    undefined
*/

// Solution
function sayHi(name) {
    const greetMsg = 'Hi, ' + name;
    return greetMsg; // retrun greetMsg not console.log(). That's it
}
const greetings = sayHi; 
// console.log(greetings('John'));

// ***** Inner Function ***** //
// When a function is declered inside another function, that's called inner function. 
function sayWelcome (personEmail) {
        function getName () {
            if (personEmail) {
                const splitedEmail = personEmail.split('@');
                const name = splitedEmail[0];
                return name;
            } else {
                return '';
            }
        }
    const welcomeMsg = 'Welcome, ' + getName();
    return welcomeMsg;
}
// console.log(sayWelcome('john@gmail.com'));

// Absolute beginner can skip it.
// We can't access the inner function except its immidiate parent function. If we need to  access the inner function outside its parent function, we must call or return it, inside its parent function.

// ***** Functional Programming ***** //
// Functional Programming is newer paradigm than OOP which has made easier life of a programer to organize and manage his code. By using that, We can easily maintain DRY(Don't Repeat Yourself) principle in our code. Thinking every solution of a single coding problem like a function is the main concept of functional programming.
/*
    Three Main Terms of Functional Programming:
    1. Pure Function
    2. First Class Function
    3. Higher Order Function
*/

// ***** Pure Function ***** //
// When a funciton returns same ouput if you provide the same arguments and doesn't have any side effect (doesn't have any effect in outer code), it's called pure function.

var name = "Justin Clark";

function sayHello(name) {
    return 'Hello, ' + name;
}

// same output when provided same arguments.
console.log(sayHello("Jhon Doe")); // expected output: Hello, Jhon Doe
console.log(sayHello("Jhon Doe")); // expected output: Hello, Jhon Doe
console.log(sayHello("Jhon Doe")); // expected output: Hello, Jhon Doe

// nothing change in name varieble which is outer of that function.
console.log(name); // expected output: Justin Clark

// Impure Function
function printPerson(person) {
    person.name= 'Mr. Foo';
    person.age = 40;
    return person;
}

// Before function invocation
var person = { name: 'John Doe', age: 32 }
console.log(person);

// invoking the Function 
console.log(printPerson(person)); 
// expected output: Hello, Jhon Doe { name: 'Mr. Foo', age: 40 }

// // After function invocation
console.log(person);
// expected output: Hello, Jhon Doe { name: 'Mr. Foo', age: 40 }

// After invoking the function person object is changed by printPerson function. That's why it's not a pure function.

// ***** First Class Function ***** //
// When a funciton can be stored in varieble, object, array, a function can be created weherever you want, a function can be passed as a argument of another function, can be returned  from another function, That's called First Class Function.

/*
    The features of First Class Function
    1. can be stored in variable, object and array.
    2. can be created wherever you want.
    3. can be passed as an argument of another function.
    4. can be returned from another function.
*/

// our function
function multifly(a, b) {
    return a * b;
}

// can be stored in variable, object and array (Feature No: 1)
// stored in a varieble
var mul = multifly;
console.log(mul(5, 2)); 
// expected output: 10

// stored in an array
var arr = [ multifly ]
console.log(arr[0](5, 2));
// expected output: 10

// stored in an object
var obj = { numOne: 5, numTwo: 5, multifly }
console.log(obj.multifly(5, 5));


// can be created wherever you want  (Feature No: 2)
// created in an Object
const personData = {
    firstName : "John",
    lastName : "Doe",
    getFullName : function () {
        return this.firstName + ' ' + this.lastName;
    }
}
console.log(personData.getFullName());
// expected output: John Doe 

// created in an Array
const namesArr = [
    'Justin',
    'Clark',
    function fullName() {
        return namesArr[0] + ' ' + namesArr[1];
    }
];
console.log(namesArr[2]());
// expected output: Justin Clark 

// can be passed as an argument of another function (Feature No: 3)

// anonymous function passed as an argument of setTimeout() function.
setTimeout(function() {
    console.log("Hello World");
}, 3000)

// can be returned from another function
function printNum () {
    var num = 2;

    return function () {
        return num;
    }

}
console.dir(printNum());





// When a function can take one or one more function as his argument or can return another function as his result, that's called higher order funciton.

function sum(a, b) {
    return a + b;
}

function getMultifliedNumber (a, b, func) {
    var sub = a - b;

    return function (){
        var sum = func(a, b);
        return sum * sub;
    } 
    // returned a function
}

var multifliedNumber = getMultifliedNumber(5, 3, sum);
// sum function is passed as an argument/
console.log(multifliedNumber());

// if a scope can access the data which is come from his parent scope, we can call that closure.

function printNum () {
    var num = 2;

    return function () {
        return num;
    }

}
console.dir(printNum());

// Callback function is one of the most popular and coolest terms of JavaScript. When a function is passed as an argument of another function for a specific task what we want to do, that's called callback function.

function calculate(a, b, callbackFunc) {
    var sum = a + b; // 8
    var sub = a - b; // 2
    var result = callbackFunc(sum, sub);
    return result;
}

const addition = calculate(5, 3, function (a, b) {
    return a + b;
});
console.log(addition);
// expected output: 10

const subtraction = calculate(5, 3, function (numOne, numTwo) {
    return numOne - numTwo;
});
console.log(subtraction);
// expected output: 6

const multiplication = calculate(5, 3, function (numOne, numTwo) {
    return numOne * numTwo;
});
console.log(multiplication);
// expected output: 16

const division = calculate(5, 3, function (numOne, numTwo) {
    return numOne / numTwo;
});
console.log(division);
// expected output: 4