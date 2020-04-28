// ***** NaN ***** //
// If the arguments not converted into a number, then it returns NaN.
// NaN = Not a Number.
// If the argument is not a number, it returns NaN.
// isNaN is used for checking a number. If it's argument is a number, it returns true and otherwise returns false.

const add = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
        return "Arguments must a number!";
    } else {
        return a + b;
    }
}
const sum = add(2, 2);
// console.log(sum);

// ***** parseFloat ***** //
// If the arguments is NaN or string, parseFloat converts that float.
let b = '12';
let num = parseFloat(b);
// console.log(typeof num);

