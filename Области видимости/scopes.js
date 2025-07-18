// 1. Напиши функцию, которая создает локальную переменную и выводит её значение. 
// Попробуй получить доступ к этой переменной вне функции и объясни, что произошло;

function showLocalVariable() {
    var age = 26;

    console.log(age);
};

showLocalVariable();  // 26

// console.log(age);  // ReferenceError: age is not defined

// Переменная age была объявлена и инициализирована внутри функции, это значит, что она существует только в пределах этой функции
// и глобально она недоступна(при попытке обратиться к ней выводится ошибка), но она будет доступна во всех дочерних областях видимости(если в функции showLocalVariable появятся вложенные функции или функциональные блоки). 
// Переменные, объявленные с помощью ключевых слов let и const имеют блочную область видимости(т.е они доступны только внутри блока {}).




// 2. Создай блок с условием и объяви переменную внутри него. Попробуй получить доступ к этой переменной вне блока и объясни результат;
const year = 2025;

if(year >= 2000) {
    let century = 21;
    console.log(century);   // 21
};

// console.log(century);  // ReferenceError: century is not defined

// Переменные, объявленные с помощью ключевых слов let и const имеют блочную область видимости(т.е они доступны только внутри блока {}).
// Переменная century была объявлена внутри блока и вне его недоступна. Если бы эта переменная была объявлена с помощью слова var, то
// мы бы смогли обратиться к ней, тк такие переменные имеют функциональную область видимости(внутри функции их не видно глобально, а внутри блока видно).




// 3. Изучи, что такое hoisting в JavaScript и расскажи своими словами, что это такое и какие проблемы с ним связаны. Приведи примеры.

// Hoisting(всплытие) - это механизм поднятия переменных и функций вверх своей области видимости(они перемещаются в самое начало кода)
// таким образом переменные и функции могут быть использованы до своего объявления. 
// То есть JS знает о переменных и функциях до их фактического появления в скрипте.

// Пример с let и const.
console.log(a);   // ReferenceError: Cannot access 'a' before initialization
let a = 10;

console.log(b);   // ReferenceError: Cannot access 'b' before initialization
const b = 20;
// Переменные, объявленные через let и const, поднимаются, но не инициализируются, поэтому консоль выдает ошибку.
// Они попадают во временную мёртвую зону (Temporal Dead Zone, TDZ) - область видимости в которой переменная уже существует, но к ней нельзя обратиться.


// Пример с var
console.log(c); // undefined

var c = 30;

// Переменные, объявленные с помощью var, поднимаются и инициализируются в значении undefined.


// Пример с function declaration
sayHello(); // Hello world!

function sayHello() {
  console.log("Hello world!");
};
// функции, объявленные через function declaration поднимаются полностью, однажды объявив функцию мы можем обратиться к ней в любой части нашего кода.

// Пример с function expression 
greet(); // ReferenceError: Cannot access 'greet' before initialization

const greet = function() {
    console.log("Hello!");
};
// функции,объявленные таким образом, поднимаются но не инициализируются и недоступны для вызова.