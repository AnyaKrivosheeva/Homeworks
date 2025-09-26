// 1. Напиши функцию, которая добавляет два числа. 
// Включи строгий режим и попробуй создать переменную внутри функции без использования ключевого слова.
//  Исправь код, чтобы он работал в строгом режиме;

function sumNums(a, b) {
    "use strict";

    result = a + b;
    return result;
};

// console.log(sumNums(2, 3));  // Uncaught ReferenceError: result is not defined

// Консоль выдает ошибку , тк строгий режим предотвращает появление неявных переменных.

// Исправляем код.
// Нам нужно просто объявить переменную с помощью ключевого слова let или const.
function sumNums2(a, b) {
    "use strict";

    let result = a + b;
    return result;
};

console.log(sumNums2(2, 3));  //5



// 2. Создай функцию, которая принимает два параметра с одинаковыми именами. 
// Включи строгий режим и исправь ошибку, чтобы функция работала корректно;

// function multiplyNums(x, x) {
//     "use strict";

//     return x * x;
// };

// console.log(multiplyNums(2, 2)); // SyntaxError: Duplicate parameter name not allowed in this context

//Исправляем код.
// Нужно поменять название одного из параметров, чтобы функция работала корректно.

function multiplyNums2(x, y) {
    "use strict";

    return x * y;
};

console.log(multiplyNums2(2, 2));  //4



// 3. Напиши код, в котором функция выводит значение this в консоль.
//  Включи строгий режим и проанализируй, как изменилось значение this;

function showThis() {
    console.log(this);
};

showThis(); // Object [global] 
// This указывает на глобальный объект(в браузере это window, в node это global), тк функция была вызвана в глобальном контексте.

// включим строгий режим
function showThis2() {
    "use strict";

    console.log(this);
};

showThis2();  // undefined
// Теперь this не ссылается на глобальный объект.



// 4. Попробуй удалить встроенное свойство объекта в строгом режиме. 
// Объясни, почему это не работает, и что нужно сделать, чтобы избежать подобных ошибок.

function deletePrototype() {
    "use strict";

    delete Object.prototype;
};

deletePrototype(); //TypeError: Cannot delete property 'prototype' of function Object() { [native code] }

// Попытка удалить неустраняемое свойство в строгом режиме приводит к ошибке.
// Удалить такие свойства нельзя в принципе, тк они составляют основу работы java script,
// и в обычном режиме попытка их удаления просто тихо проигнорируется.
// Во избежание таких ошибок нужно просто не пытаться удалить неудаляемые свойства.
