// 1. Создай функцию, которая принимает произвольное количество чисел и возвращает их среднее значение;

function averageValue(...numbers) {
    return numbers.reduce((total, num) => total + num, 0) / numbers.length;
}

console.log(averageValue(1, 2, 3));  //2
console.log(averageValue(27, 29, 71, 54));  //45.25


// 2. Создай функцию, которая принимает объект с информацией о пользователе (имя, возраст, страна) и возвращает строку с этой информацией,
//  используя деструктуризацию;

const user = {
    name: "Anna",
    age: 26,
    country: "Russia"
};

function printUser({ name, age, country }) {
    console.log(`${name},${age},${country}`);
}

printUser(user);  // Anna,26,Russia


// 3. Создай объект с вложенными объектами и массивами. Используй деструктуризацию, 
// чтобы извлечь несколько значений на разных уровнях вложенности;

const user2 = {
    name: "Anna",
    age: 26,
    address: {
        country: "Russia",
        city: "Moscow",
        district: "Novokosino"
    }
};

const { name, age, address: { country, city, district } } = user2;

console.log(name);    // Anna
console.log(age);     // 26
console.log(country);  // Russia
console.log(city);    // Moscow
console.log(district);  // Novokosino



// 4. Используй оператор `spread` для создания нового массива, 
// который включает все элементы исходного массива и добавляет несколько новых элементов в начале и в конце;

const arr1 = [1, 2, 3, 4, 5];

const arr2 = [0, ...arr1, 6, 7, 8];

console.log(arr1); // [1, 2, 3, 4, 5]
console.log(arr2); // [0, 1, 2, 3, 4, 5, 6, 7, 8]


// 5. Используй оператор `rest` для создания функции, 
// которая принимает объект с параметрами и возвращает новый объект без одного указанного параметра.

// const obj1 = { a: 1, b: 2, c: 3 };

// function destructuring({ b, ...obj2 }) {
//     console.log(b);
//     console.log(obj2);
// }

// destructuring(obj1);
// // 2
// // {a: 1, c: 3}
// console.log(obj1); // {a: 1, b: 2, c: 3}


const user5 = {
    city: "London",
    name: "Bob",
    age: 28,
    country: "USA",
};

function getNewObject(user5, key) {
    const { [key]: deleted, ...rest } = user5;
    return rest;
}

console.log(getNewObject(user5, "country"));  // {city: 'London', name: 'Bob', age: 28}







// доп задачи от нейронки для закрепления материала



// 1. Напишите функцию getUserInfo, которая принимает объект пользователя с полями name, age, email и address. 
// Функция должна возвращать строку в формате: "Имя: [name], Возраст: [age]",  а остальные параметры 
// должны быть собраны в отдельный объект.

const user3 = {
    name: "Ann",
    age: 26,
    email: "AnyaK98@gmail.com",
    address: "Moscow"
}

function getUserInfo({ name, age, ...info }) {
    console.log(`Имя: ${name}, Возраст: ${age}`);
    console.log(info);
}

getUserInfo(user3);
// Имя: Ann, Возраст: 26
// {email: 'AnyaK98@gmail.com', address: 'Moscow'}


// 2. Напишите функцию sum, которая принимает любое количество чисел и возвращает их сумму. Используйте оператор rest для сбора аргументов.

function sum(...nums) {
    return nums.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15


// 3. Напишите функцию mergeArrays, 
// которая принимает два массива и возвращает новый массив, содержащий элементы обоих массивов. Используйте оператор spread.

const array1 = [22, 33, 44];
const array2 = [55, 66, 77, 88];

function mergeArrays(array1, array2) {
    return [...array1, ...array2];
}

console.log(mergeArrays(array1, array2));

// 4. Напишите функцию getFirstAndLast, которая принимает массив и возвращает новый массив,
// содержащий первый и последний элементы исходного массива. Используйте деструктуризацию массива.

function getFirstAndLast(arr) {
    const [first, ...rest] = arr;
    const last = arr[arr.length - 1];
    return [first, last];
}

const arr = [1, 2, 3, 4, 5];
console.log(getFirstAndLast(arr));  // [1, 5]


