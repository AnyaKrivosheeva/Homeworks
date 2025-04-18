// 1. Проверь, содержится ли строка "fun" в строке "JavaScript is fun!"

const isFun = "JavaScript is fun!";

console.log(isFun.includes("fun"));  //true


// 2. Попробуй написать условие, которое выполняется только в случае, если переменная имеет одно из falsy значений;

const a = 0;

if (!a) {
    console.log("falsy!")
}     //"falsy!"

console.log(a);  //0


// 3. Напиши шаблонную строку, которая включает переменные firstName, lastName и occupation, 
//    и выводит сообщение вроде "Hello, my name is John Doe. I am a software developer.";

const firstName = 'John';
const lastName = 'Doe';
const occupation = 'software developer';

const greeting = `Hello, my name is ${firstName} ${lastName}. I am a ${occupation}.`;

console.log(greeting);


// 4. Сравни null и undefined строго (===) и не строго (==), выведи результаты в консоль. 
//    Объясни своими словами, почему получились такие результаты.

console.log(null == undefined);  //true
//т.к. оператор (==) это нестрогое сравнение, при таком сравнении операнды сравниваются без учета типов,
// таким образом JS пытается привести их к одному типу, а затем сравнить значения. 
// В данном случае они приводятся к falsy значению, а результат их сравнения равен true.

console.log(null === undefined);  //false
//т.к. оператор (===) это строгое сравнение, при таком сравнении операнды сравниваются с учетом типов.
// В данном случае типы данных null (это object) и undefined (это undefined) разные,
// а значит и результат сравнения будет false.


// 5. Выведи в консоль результат выражения 1 + '1'. Да, этот удивительный JS... И снова попрошу тебя объяснить своими словами, что произошло.

console.log(1 + "1");  // "11"   - это именно строка
// При попытке сложить операнды произошло неявное приведение типов данных, при использовании оператора (+)
// происходит преобразование операнд в строку, а затем конкатенация этих строк.


