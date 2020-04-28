const rootArr = [22, 43, 54, 65, 76, 87, 98, 100, 43]
const extArr = [112, 143, 123, 63, 65]

// ***** concat ***** //
const concatedArr = rootArr.concat(extArr);
// console.log(concatedArr);

// ***** map() ***** //
const arrObj = [{name: "Nazmul Hoque"}, {name: "Anayet Ullah"}]
const arrMap = arrObj.map(person => person.name);
// console.log(arrMap);

// ***** every ***** //
const findEvan = (num) => num % 2 === 0;
// console.log(rootArr.every(findEvan));
const isEvan = rootArr.every(num => num%2 === 0)  
// console.log(isEvan);

// ***** filter ***** //
const filteredArr = rootArr.filter(num => num > 50);
// console.log(filteredArr);

// ***** Find ***** //
const foundArr = rootArr.find(num => num > 50);
// console.log(foundArr);

// ***** Reduce ***** //
const total = rootArr.reduce((total, num) => total + num, 0)
// console.log(total);

// ***** Sort ***** //
// String - Sort
const names = ['Nazmul', 'Anayet', 'Towhid', 'Rifat']
const sortedName = names.sort();
// console.log(sortedName);
// Number - Sort
const sortedNum = rootArr.sort((a, b) => a - b);
// console.log(sortedNum);

// ***** Find Index ***** //
const foundIndex = rootArr.findIndex(element => element > 60);
// console.log(foundIndex);

// ***** indexOf() ***** //
const numIndex = rootArr.indexOf(100);
// console.log(numIndex);

// ***** lastIndexOf() ***** //
const lastIndex = rootArr.lastIndexOf(43);
// console.log(lastIndex);

// ***** Array Join ***** //
const arrStr = rootArr.join(' ');
// console.log(arrStr);

// ***** Array Element - Insert, Remove ***** //
// Insert
rootArr.splice(3, 0, 200);
console.log(rootArr);
// Remove
rootArr.splice(3, 1);
console.log(rootArr);

// slice, reverse, pop(), push(), shift(), unshift() etc