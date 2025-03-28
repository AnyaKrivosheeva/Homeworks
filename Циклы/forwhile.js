
// Напиши программу, которая использует цикл for, чтобы вывести числа от 1 до 10;

for (let i = 1; i <= 10; i++) {
    console.log(i);
}



//Напиши программу, которая использует цикл while, чтобы посчитать сумму чисел от 1 до 100;

let i = 1;
let sum = 0;

while (i <= 100) {
    sum += i;
    i++;
}

console.log(sum);  //5050



//Выведи в консоль все простые числа от 0 до 100.


//Метод перебора. Мы точно знаем что 2,3,5,7 это простые числа.

const primeArr = [2, 3, 5, 7];
for (let number of primeArr) {
    console.log(number);
}

for (let num = 2; num <= 100; num++) {
    if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {
        continue;
    } else {
        console.log(num);
    }
}

//Простое число отлично от единицы и делится только на себя и единицу.
//Сначала пишем функцию которая будет проверять простое число или нет. 
// Цикл внутри функции проверяет делится ли число(num) на любое число, начиная с 2 и до квадратного корня из num. 
// Если делится без остатка, то число составное, возвращает false.
//Если делится с остатком, то число простое, возвращает true.

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

//Cледующий цикл проверяет все числа от 0 до 100 с помощью функции isPrime и выводит в консоль все подходящие(простые числа).
for (let num = 0; num <= 100; num++) {
    if (isPrime(num)) {
        console.log(num);
    }
}

/*
for (let num = 0; num <= 100; num++) {
    function isPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    if (isPrime(num)) {
        console.log(num);
    }
}
*/

//Этот алгоритм предложила нейросеть.

for (let num = 2; num <= 100; num++) {                 //Начинаем сразу с числа 2, тк 0 и 1 заведомо не являются простыми.
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {        //Проверяем делится ли число(num) на любое число, начиная с 2 и до квадратного корня из num. 
        if (num % i === 0) {                           //Если число делится, то оно не является простым и мы приравниваем переменную к false и  выходим из цикла.
            isPrime = false;
            break;
        }
    }
    if (isPrime) {                                    //Далее выводим в консоль все подходящие числа.
        console.log(num);
    }
}


