// 1. Напиши объект с несколькими свойствами и сделай все свойства неизменяемыми (с помощью Object.defineProperty).
//  Проверь, можно ли изменить их значения после этого;

const user = {};

Object.defineProperty(user, "name", {
    value: "Anna",
    writable: false,
    enumerable: true,
    configurable: true
});

Object.defineProperty(user, "age", {
    value: 27,
    writable: false,
    enumerable: true,
    configurable: true
});

console.log(user.name); //Anna
console.log(user.age);  //27

user.age = 30;
user.name = "Anton";

console.log(user.name); //Anna
console.log(user.age);  //27
// Свойства объектов имеют дескрипторы, значения которым мы можем задавать с помощью метода Object.defineProperty.
// Установив для дескриптора writable значение false, теперь мы не можем изменять значения свойств обычным способом извне.






// 2. Создай объект с несколькими свойствами, где одно из них будет неперечисляемым (не должно выводиться в циклах). 
// Убедись, что свойство не отображается при выводе ключей объекта через цикл for...in.

const person = {
    name: "Alice",
    age: 30,
};

Object.defineProperty(person, "city", { value: "Moscow" });  // если мы явно не задаем значения для дескрипторов , то автоматически задается значение false

console.log(person.city); // Moscow

for (key in person) {
    console.log(`${key}: ${person[key]}`);
}
// name: Alice
// age: 30
// Свойство city не выводится, тк при записи этого свойства дескриптор enumerable получил значение false.
