// 1. Напиши функцию, которая принимает строку и проверяет, является ли она палиндромом. Если да - функция возвращает true, если нет - false;


function isPalindrome(string) {
    const cleanedString = string.replace(/[^a-zA-Zа-яА-Я0-9]/g, '').toLowerCase();     // сначала удаляем из строки все неалфавитные символы и пробелы, приводим к нижнему регистру

    const stringArray = cleanedString.split('');          //  преобразуем получившуюся строку в массив

    const stringArrayRev = stringArray.reverse();  //  переворачиваем получившийся массив

    if (cleanedString === stringArrayRev.join("")) {          // ну и проверяем равняется ли наша строка новой строке, получившейся из массива
        return true;                                          // (не забываем массив вновь преобразовать в строку!)
    }

    return false;
}

console.log(isPalindrome("Дед"));      // true
console.log(isPalindrome("Папа"));     // false
console.log(isPalindrome("A man, a plan, a canal, Panama!"));     // true




// 2. Напиши функцию, которая принимает строку (предложение) и находит первое самое короткое слово в ней и возвращает его;

function getFirstShortWord(sentence) {
    const sentenceArray = sentence.split(' ');     //преобразуем строку в массив

    let firstShortWord = sentenceArray[0];     //присваиваем переменной firstShortWord значение из массива под индексом 0

    sentenceArray.forEach((word) => {                      // проходимся по массиву и находим самое короткое слово - 
        if (word.length < firstShortWord.length) {         // оно оказывает в переменной firstShortWord
            firstShortWord = word;
        }
    })

    return firstShortWord;        // возвращаем переменную, в которой содержится самое короткое слово
}


console.log(getFirstShortWord('Найди самое короткое слово в этом предложении'));
console.log(getFirstShortWord('Найди самое короткое слово'));
console.log(getFirstShortWord('The curious cat explored my mysterious garden under the bright moonlight'));



// 3. Напиши функцию, которая форматирует строку с цифрами в телефонный номер. Пример: createPhoneNumber(123456789) → 8 (123) 456-789;

function createPhoneNumber(number) {
    const numberAsString = String(number).padStart(9, "123456789");  // преобразовываем числовое значение в строку, попутно убеждаемся,что у нас в строке точно будет 9 цифр

    return ` 8 (${numberAsString.slice(0, 3)}) ${numberAsString.slice(3, 6)}-${numberAsString.slice(6)}`;        // функция возвращает строку с номером телефона вида 8 (***) ***-***
}

console.log(createPhoneNumber(123456789));   //  8 (123) 456-789




// 4. Напиши функцию, которая ищет минимальное и максимальное значение в массиве;

const arrrayOfNumbers = [3, 1, 4, 1, 5, 9, 2, 6, -1];

// первый способ решения задачи
function findMinMax(arr) {
    const arr2 = arr.sort((a, b) => a - b);  //сортируем в порядке возрастания значений

    let min = arr2[0];                       // таким образом минимальное значение займет место в массиве с индексом 0
    let max = arr2[arr2.length - 1];         // а максимальное значение займет место в конце массива с индексом равным длине массива - 1

    return [min, max];
}

console.log(findMinMax(arrrayOfNumbers));  // [-1, 9]


// второй способ решения задачи
function findMinMax(arr) {
    if (arr.length === 0) {    // Проверка на пустой массив
        return [null, null];
    }

    let minValue = arr[0];   //3  Присваиваем переменным minValue и maxValue значение из массива под индексом 0
    let maxValue = arr[0];   //3

    arr.forEach((num) => {            // с помощью метода .forEach() перебираем массив arr, сравнивая minValue и maxValue(а по сути первый элемент массива)
        if (num < minValue) {         // с каждым элементом массива последовательно
            minValue = num;
        }
        if (num > maxValue) {
            maxValue = num;
        }
    });

    return [minValue, maxValue];        // возвращаем минимальное и максимальное значение из массива в виде нового массива
}

console.log(findMinMax(arrrayOfNumbers));     //  [-1, 9]




// 5.Напиши функцию, которая на вход принимает массив, а на выходе возвращает новый, отсортированный в порядке возрастания, массив. 
// Попробуй реализовать алгоритм сортировки самостоятельно. Если не получается - почитай про bubble sort и попробуй реализовать её.

// это мой вариант решения:
const someArray = [12, 45, 7, 89, 23, 56, 34, 78, 90, 11];

function sortArray(arr) {
    const newArray = arr.slice(0).sort((a, b) => a - b);     // сортируем массив в порядке возрастания значений

    return newArray;
}

const someSortArray = sortArray(someArray);

console.log(sortArray(someArray));   //  [7, 11, 12, 23, 34, 45, 56, 78, 89, 90]


console.log(someArray);  // [12, 45, 7, 89, 23, 56, 34, 78, 90, 11]
console.log(someSortArray);  //  [7, 11, 12, 23, 34, 45, 56, 78, 89, 90]


// а это решение с помощью bubble sort:

function bubbleSort(array) {
    const n = array.length;
    let swapped;               // переменная нужна для оптимизации работы цикла, для досрочного выхода из него

    for (let i = 0; i < n - 1; i++) {       // Проходим по массиву n раз
        swapped = false;                              // Флаг для отслеживания, были ли обмены во время итерации

        for (let j = 0; j < n - 1 - i; j++) {      // Сравниваем соседние элементы
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                swapped = true;     // Устанавливаем флаг, что был обмен
            }
        }

        if (!swapped) {       // Если не было обменов, массив уже отсортирован, то досрочно выходим из цикла
            break;
        }

    }

    return array;            // Возвращаем отсортированный массив
}

const sortedArray = bubbleSort(someArray);

console.log(sortedArray);  // [7, 11, 12, 23, 34, 45, 56, 78, 89, 90]












// доп задача с Доки
// Cтрелочная функция принимает несколько аргументов. 
// Она содержит корректный, но частично закомментированный код. Например:

// const sourceFn = (a, b) => {
//     // const c = a + 2
//     // return c * b
//     return a + b
// };

// Напишите функцию createFn(), которая:

// принимает в качестве аргумента исходную функцию;
// на основе исходной функции создаёт и возвращает новую функцию, которая, 
// будучи вызванной, получит те же параметры, что и исходная, и выполнит закомментированный в исходной функции код.

// function createFn(sourceFunction) {
//     return function newFn(a, b) {
//         const c = a + 2
//         return c * b
//     }
// };

// console.log(sourceFn(2, 2));  //4

// const performOperation = createFn(sourceFn);

// console.log(performOperation(2, 2));  //8


const sourceFn = (a, b) => {        // сразу раскомментируем код
    const c = a + 2
    return c * b
};

function createFn(sourceFunction) {        // новая функция createFn() принимает параметром функцию и возвращает еще одну функцию
    return function newFn(a, b) {          // newFn(), которая в свою очередь принимает те же параметры, что и наша исходная (a, b)
        return sourceFunction(a, b);       // и возвращает результат исходной функции
    }
};

console.log(sourceFn(2, 2));  //8

const performOperation = createFn(sourceFn);  // создание новой функции performOperation

console.log(performOperation(2, 2));   // 8



