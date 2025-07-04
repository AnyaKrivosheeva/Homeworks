// 1. Создай объект со свойствами и методом, который использует `this` для доступа к этим свойствам.
//  Затем присвой этот метод другой переменной и вызовите её. Объясни своими словами, что произошло;

user = {
    name: "Anna",
    location: "Moscow",
    greeting: function () {
        console.log(`Hello, ${this.name}. You are in ${this.location}.`);
    },
};

user.greeting();  // Hello, Anna. You are in Moscow.
//при данном вызове метода this указывает на объект user и может таким образом получать доступ к его свойствам.

const sayHello = user.greeting;

sayHello();  // Hello, undefined. You are in undefined.
// после присваивания метода в переменную sayHello и вызове ее как функции предыдущий контекст теряется и this теперь указывает на глобальный объект
// window - в браузере, global - в node.js.


// 2. Объясни, почему в примере ниже в первом случае выводится имя, а во втором - undefined. 
// Как сделать так, чтобы в методе delayedGreet тоже выводилось имя (без использования call, apply или bind)?

const student = {
    name: 'Alice',
    greet: function () {
        console.log(`Hello, ${this.name}!`);
    },
    delayedGreet: function () {
        setTimeout(this.greet, 1000);  // метод greet в данном случае не вызывается, просто передается ссылка на него
    },
};

student.greet(); // Hello, Alice
// при вызове данного метода this указывает на объект student, мы ожидаемо получаем доступ к свойствам этого объекта.

student.delayedGreet(); // Hello, undefined 
// функция содержит в себе setTimeout, из за которого она вызывается позже - уже в глобальном контексте а не в контексте объекта student.
// соответственно this здесь указывает на глобальный объект window у которого отсутствует свойство greet.

// чтобы во втором методе все работало исправно нам необходимо заменить обычную функцию на стрелочную
// у нее нет своего контекста, она будет брать контекст из ближайшего окружения - обычная функция с контекстом указывающим на объект student
const student2 = {
    name: 'Alice',
    greet: function () {
        console.log(`Hello, ${this.name}!`);
    },
    delayedGreet: function () {
        setTimeout(() => this.greet(), 1000);    // теперь метод вызывается правильно 
    },
};

student2.greet(); // Hello, Alice!

student2.delayedGreet(); // Hello, Alice!



// 3. Напиши функцию и вызови её с разными контекстами, используя `call`, `apply` и `bind`;

user1 = { name: "Anna" };
user2 = { name: "Daria" };
user3 = { name: "Polina" };

function greet(hello) {
    console.log(`${hello}, ${this.name}!`);
};

greet.call(user1, "Hello");  // Hello, Anna!
// сначала передаем контекст, затем через запятую аргументы

greet.apply(user2, ["Good morning"]);  // Good morning, Daria!
//  сначала передаем контекст, затем массив с аргументами

const user3BoundGreet = greet.bind(user3, "Hi");  // передаем контекст, аргументы и заносим все это в переменную, тк метод не вызывает функцию, а создает новую
user3BoundGreet();  // Hi, Polina! 
// и затем уже вызываем переменную как функцию



// 4. Что будет в консоли в результате выполнения функций sayHelloToAdmin() и sayHelloToUser()?
//  Объясни, почему так произошло. Как это можно изменить?

function sayHello2() {
    console.log('Hello, ' + this.name);
};

const admin = {
    name: 'Bob'
};

const user01 = {
    name: 'John'
};

const sayHelloToAdmin = sayHello2.bind(admin);

sayHelloToAdmin();  // Hello, Bob

const sayHelloToUser = sayHelloToAdmin.bind(user01);

sayHelloToUser();  // Hello, Bob

// Так произошло потому что метод bind нельзя использовать дважды для изменения контекста функции
// Повторный вызов bind на уже привязанной функции не изменяет контекст, поэтому при выполнении функции sayHelloToUser мы увидим тот же результат
// что и при выполнении функции sayHelloToAdmin.

// Для того чтобы функция sayHelloToUser заработала как надо необходимо правильно привязать контекст к функции sayHello2
const sayHelloToUser2 = sayHello2.bind(user01);

sayHelloToUser2();  // Hello, John
