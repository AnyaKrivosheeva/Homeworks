const a = 2;
const b = 2;
const c = 2;
const result = a * b + c;

console.log(result);
/*
const result01 = 2 * 2 + 2;
console.log(result01);
*/

const a1 = Math.sin(54);
const b2 = Math.cos(16);
const result2 = (a1 * b2) ** 2;

console.log(result2.toFixed(3));
/*
const result02 = (Math.sin(54) * Math.cos(16)) **2;
console.log(result02.toFixed(3));
*/

const a3 = 16 * Math.sqrt(13.2 * 71.90);
const b3 = 2.4 / 7 ** 4;
const c3 = 3 ** Math.sqrt(49);
const d3 = 2 ** 7;
const result3 = (a3 / b3 + c3) * d3;

console.log(Math.round(result3));
/*
const result4 = (16 * Math.sqrt(13.2 * 71.90) / (2.4 / 7 ** 4) + 3 ** Math.sqrt(49)) * 2 ** 7;
console.log(Math.round(result4)); 
*/



const number1 = 23;
const number2 = 10;
const number3 = 159;

if (number1 % 2 === 0) {
    console.log("Число четное")
} else {
    console.log("Число нечетное")
}

if (number2 % 2 === 0) {
    console.log("Число четное")
} else {
    console.log("Число нечетное")
}

if (number3 % 2 === 0) {
    console.log("Число четное")
} else {
    console.log("Число нечетное")
}

// Можно сократить запись через функцию.

function Check(number) {
    if (number % 2 === 0) {
        console.log("Число четное")
    } else {
        console.log("Число нечетное")
    }
}

Check(number1)
Check(number2)
Check(number3)



let name = "Anna";

console.log(`Hello, ${name || "Guest!"}`);