// 1. Найдите с помощью break points ошибку в коде этой функции и исправьте ее:

// function hasEvenNumber(arr) {

//     let foundEven = false;

//     for (let i = 0; i < arr.length; i++) {         // breakpoint  начало цикла, следим за значением foundEven, i и arr[i]

//         if (arr[i] % 2 === 0) {                    // breakpoint  проверка условия на четность числа  

//             foundEven = true;                      // breakpoint  следим за значением foundEven и фиксируем момент когда значение изменится
// на 3 итерации foundEven = true
//         } else if (arr[i] % 2 !== 0) {             // breakpoint следим за перезаписью значения foundEven( на 4 итерации было перезаписано на true)

//             foundEven = false;

//         }

//     }

//     return foundEven;                             // breakpoint  перед возвратом результата

// }

// console.log(hasEvenNumber([1, 3, 4, 5])); // Ожидается: true, а получаем false


// function hasEvenNumber(arr) {

//     let foundEven = false;

//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] % 2 === 0) {

//             foundEven = true;            // ошибка была в том что переменная foundEven может быть перезаписана даже если верное значение найдено
//             break;                       // нам необходимо сразу выходить из цикла после верного значения

//         } else if (arr[i] % 2 !== 0) {

//             foundEven = false;

//         }

//     }

//     return foundEven;

// }

// console.log(hasEvenNumber([1, 3, 4, 5])); // true


function hasEvenNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {                  // лучший вариант исправления функции - избавиться от переменной foundEven
            return true;                         // сразу возвращаем true когда(если) значение найдено
        }
    }

    return false;
}

console.log(hasEvenNumber([1, 3, 4, 5]));  // true




// 2. Найдите с помощью debugger ошибку в коде этой функции и исправьте ее:

// function calculateAverage(numbers) {

//     let sum = 0;
//     debugger;                        // следим за переменной sum (перед 1 итерацией sum = 0)

//     for (let i = 0; i <= numbers.length; i++) {
//         sum += numbers[i];
//         debugger;                    // после 1 итерации: sum = 2, после 2 итерации: sum = 6, после 3 итерации: sum = 12
//     }                                // мы ожидаем что цикл должен закончиться, но происходит 4 итерация и мы получаем sum = NaN. Ищем ошибку в условии цикла

//     return sum / numbers.length;

// }

// console.log(calculateAverage([2, 4, 6])); // Ожидается: 4, а получаем NaN



function calculateAverage(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];                       // теперь sum  высчитавается нормально и равна 12
    }

    return sum / numbers.length;      // 12 / 3 = 4
}

console.log(calculateAverage([2, 4, 6]));  // 4




// 3. Найдите с помощью console.log ошибку в коде этой функции и исправьте ее:

// function findLargestNumber(arr) {

//     let largest = 0;
//     console.log("Инициализация largest: ", largest);                  // Инициализация largest: 0

//     for (let i = 0; i < arr.length; i++) {
//         console.log(`Сравниваем: arr[${i}] = ${arr[i]} с largest = ${largest}`);      // Сравниваем: arr[0] = -10 с largest = 0  и тд ( выводится трижды , значит условие цикла работает правильно)

//         if (arr[i] > largest) {                                 // получается что в условии мы сравниваем значения массива с переменной largest = 0, здесь не учтено,что числа могут быть меньше 0

//             largest = arr[i];
//             console.log("Новое значение largest: ", largest);         // мы видим что console.log не срабатывает на 116 строке, ищем поломку в условии if
//         }

//     }
//     console.log("Результат: ", largest);                 // Результат: 0
//     return largest;
// }

// console.log(findLargestNumber([-10, -20, -30])); // Ожидается: -10, а получаем 0


function findLargestNumber(arr) {
    if (arr.length === 0) return undefined;   // защита от пустого массива

    const newArr = arr.sort((a, b) => b - a);       //  в данной функции мы используем сортировку массива в порядке убывания(для удобства)

    let largest = newArr[0];                       // и присваиваем для переменной largest значение массива под индексом 0

    return largest;
}

console.log(findLargestNumber([-10, -20, -30]));  // -10


// второй вариант
function findLargestNumber(arr) {
    if (arr.length === 0) return undefined;    // защита от пустого массива

    let largest = arr[0];             // присваиваем largest значение массива под индексом 0

    for (let i = 1; i < arr.length; i++) {        // можем начать отрабатывать цикл с i = 1

        if (arr[i] > largest) {      //  тогда условие отработает правильно

            largest = arr[i];

        }

    }

    return largest;
}

console.log(findLargestNumber([-10, -20, -30]));  // -10