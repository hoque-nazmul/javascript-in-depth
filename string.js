// ***** String Literal ***** //
// if a string contains with '' or "" and then assign to a varieble, that is called String Literal.
const name = "Nazmul Hoque";
// console.log(name);

// ***** String Constractor ***** //
// String Constractor is used to convert anything to String - although the parameter is number, bolean or whatever.
const age = String(25);
// console.log(typeof age);
// We can also use to convert string - 5 + '' or toString();

// ***** Escape Notation ***** //
// It's used for showing '' in string, new line, tab and so on.
const singleQoute = 'Hey, I am \'Nazmul Hoque\'';
const newLine = 'Hey, this is \'Nazmul Hoque\'.\nI am 25 years old';
const forTab = 'Hey,\tNazmul';
// console.log(newLine);

// ***** String Comparison ***** //
/*
String Comparision is harder then Other Data Types Comparison. That's why, Some steps are importance to know
1. JS convert every string to nemunic number for comparison.
2. Capital Letter is smaller then Small Leter.
3. a is the smallest number and z is biggest number of alpabet. By the way it's gradually working.
*/
// JS uses Laxicographic System to string comparison.
const strOne = 'abc';
const strTwo = 'bcd';
// console.log(strOne > strTwo);
// Output is false. because 'a' is smaller then 'b' not bigger.

// ***** String Concatenation ***** //
// concat() function is used for adding multiple string.
const firstName = "Jhon";
const lastName = "Doe";
const title = "2nd";
// Concatenation between two String.
const twoStr = firstName.concat(' ', lastName);
// Concatenation among three String.
const threeStr = firstName.concat(' ', lastName,' ', title);
// console.log(twoStr);
// console.log(threeStr);
// Also used for concatenation - +, ,(comma)

// ***** Sub String ***** //
// substr() is used to print spacific part of string.
const greeting = "Hello, Nazmul Hoque";
const personName = greeting.substr(7);
// console.log(personName);
// We can use char limit after index of char. E.g : greeting.substr(7, 6);

// ***** Find String Char using index of Str Char ***** //
const boy = "Apurbo"
const findChar = boy.charAt(0); //stored 'A'
// console.log(findChar);

// ***** startsWith() and endsWith() ***** //
// statsWith() is used for matching string character or characters of a certain string. And endsWith() is used for matching ending character or characters of a certain string.

const sayHi = "Hey, Nazmul";

if(sayHi.endsWith('l')){
    // console.log('True');
} else {
    // console.log("False");
}

// ***** toUpperCase() and toLowerCase() ***** //
const testing = "Hey, Programmers";
const upperCase = testing.toUpperCase();
const lowerCase = testing.toLowerCase();
// console.log(upperCase);

// ***** trim() ***** //
// trim() is used to remove white space.
const beforeTrim = '         Nazmul      ';
// console.log(beforeTrim);
const afterTrim = beforeTrim.trim();
// console.log(afterTrim);
// trimStart() & trimEnd() are also used for removing starting and ending white Space.

// ***** split() ***** //
// split() used to sparate or divide string by on the basis of different type of separators like ' ' or comma and what you want. It important to keep in mind that it returns an array as output.
// const personName = "Jhon Doe";
// const splitPersonName = personName.split(' ');
// console.log(splitPersonName); // expected output: [ 'Jhon', 'Doe' ]

// ***** String Length ***** //
const strForLength = "Code is Beauty";
let strCount = 0;
while(true) {
    if(strForLength.charAt(strCount) == '') {
        break;
    } else {
        strCount++;
    }
}
// console.log(strCount);
// It also easily solved by using length E.g. strForLength.length;


// ***** idnexOf() && lastIndexOf() ***** //
// IndexOf() returns the length of characters until serching character or characters. lastIndexOf() also returns the length of total characters until the last serching character or characters.
const paragraph = 'I am a dog lover. I love dog';
const serchTxt = 'dog';
// console.log(paragraph.lastIndexOf(serchTxt)); //Output: 25
// console.log(paragraph.indexOf(serchTxt)); //Output: 7

// ***** includes() ***** //
// includes() is used for checking a selected string elements or characters from a string, it would be a word also. And If it gets the targated thing, it returns true otherwise returns false. 
const string = "JavaScript is cool";
const lang = "JavaScript";
// string.includes(lang) ? console.log(true) : console.log(false);

// string.includes('J') ? console.log(true) : console.log(false);
// expected output: true

// string.includes('Java') ? console.log(true) : console.log(false);
// expected output: true

// string.includes('java') ? console.log(true) : console.log(false);
// expected output: false

// ***** replace() ***** //
// we can replace a word or words of a sentence using replace function.
const para = "This is a Laptop."
const changedPara = para.replace("Laptop", "Computer")
// console.log(changedPara);

// ***** slice() ***** //
// slice() is used to copy the parts of a string.
const p = "JavaScript is Beauty."
const slicePara = p.slice(4, 11)
// console.log(slicePara); //Script