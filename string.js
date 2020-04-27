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
const firstName = "Nazmul";
const lastName = "Hoque";
const test = "Jabed";
const concatStr = firstName.concat(' ', lastName,' ', test);
// console.log(concatStr);
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
// statsWith() is used for matching first Char of str. And endsWith() is used for matching the last Char of str.
const sayHi = "Hi, Nazmul";
// sayHi.startsWith('H') ? console.log("True") : console.log("False"); //Output: True
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
// split function used to sparate string to array element by ' ' or comma and so on.
const coupleName = "Nazmul Mukta";
const splitCoupleName = coupleName.split(' ');
// console.log(splitCoupleName);

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
// IndexOf() return the total char's length until serching word. lastIndexOf() also return the char's length until the last serching word.
const paragraph = 'I am a dog lover. I love dog';
const serchTxt = 'dog';
// console.log(paragraph.lastIndexOf(serchTxt)); //Output: 25
// console.log(paragraph.indexOf(serchTxt)); //Output: 7

// ***** includes() ***** //
// include function is used for checking word in sentence and it returns boolean.
const sentence = "I am Nazmul Hoque";
const word = "Nazmul";
if (sentence.includes(word)) {
    // console.log("Nazmul is Here!");
} else {
    // console.log("Nazmul is not here!");
}

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