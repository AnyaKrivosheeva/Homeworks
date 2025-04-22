// 1. Создай объект, ключи в котором будут описывать тебя. 
// Например, твое имя, возраст, увлечения и т.д. 
// Обязательно используй разные типы данных: имя - строка, возраст - число, хобби - массив и  т.д. 
// Затем выведи все свои свойства/свойства объекта в консоль(разными способами!); 

const person = {
    name: "Anya",
    age: 26,
    address: {
        country: "Russia",
        city: "Moscow",
        street: "Novokosinskaya",
        building: 20,
        apartment: 19,
    },
    occupation: "dentist",
    isEmployed: true,
    isMarried: true,
    hasChildren: false,
    hobby: ["reading",
        "watching series",
        "learning English",
        "doing sports",
        "drawing",
        "cooking",
        "board games",
        "video games",
    ],
};

// 1.1 Можно вывести все свойства по очереди просто с помощью console.log()
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.address);
console.log(person.occupation);
console.log(person.isEmployed);
console.log(person["isMarried"]);
console.log(person["hasChildren"]);
console.log(person["hobby"]);

// {name: 'Anya', age: 26, address: {…}, occupation: 'dentist', isEmployed: true, …}
// address: {country: 'Russia', city: 'Moscow', street: 'Novokosinskaya', building: 20, apartment: 19}
// age: 26
// hasChildren: false
// hobby: (8) ['reading', 'watching series', 'learning English', 'doing sports', 'drawing', 'cooking', 'board games', 'video games']
// isEmployed: true
// isMarried: true
// name: "Anya"
// occupation: "dentist"
// [[Prototype]]: Object

//  Anya
//  26
//  {country: 'Russia', city: 'Moscow', street: 'Novokosinskaya', building: 20, apartment: 19}
//  dentist
//  true
//  true
//  false
//  (8) ['reading', 'watching series', 'learning English', 'doing sports', 'drawing', 'cooking', 'board games', 'video games']


// 1.2 Можно с помощью цикла for...in...

for (let key in person) {
    console.log(key + ":", person[key]);
}

// name: Anya
// age: 26
// address: {country: 'Russia', city: 'Moscow', street: 'Novokosinskaya', building: 20, apartment: 19}
// occupation: dentist
// isEmployed: true
// isMarried: true
// hasChildren: false
// hobby: (8) ['reading', 'watching series', 'learning English', 'doing sports', 'drawing', 'cooking', 'board games', 'video games']


// 1.3 С помощью методов:

// 1.3.1 отдельно можно вывести ключи:

console.log(Object.keys(person));
// (8) ['name', 'age', 'address', 'occupation', 'isEmployed', 'isMarried', 'hasChildren', 'hobby']

// 1.3.2 отдельно можно вывести значения:

console.log(Object.values(person));
// > ['Anya', 26, {…}, 'dentist', true, true, false, Array(8)]      в таком случае чтобы увидеть все значения нужно развернуть эту запись в консоли


// 1.3.3 и вывести свойства со значениями в парах в виде массивов:

console.log(Object.entries(person));
// > (8) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]      тоже надо развернуть запись
// 
// 0: (2)['name', 'Anya']
// 1: (2)['age', 26]
// 2: (2)['address', {… }]
// 3: (2)['occupation', 'dentist']
// 4: (2)['isEmployed', true]
// 5: (2)['isMarried', true]
// 6: (2)['hasChildren', false]
// 7: (2)['hobby', Array(8)]
// length: 8


// 1.4 Можно вывести с помощью таблицы:

console.table(person);
// данные выводятся в виде таблицы





// 2. В объект из предыдущего пункта:
// - добавь новое свойство;
// - измени значение существующего свойства;
// - удали любое свойство.
// И снова выведи все свойства объекта в консоль разными способами!


// 2.1 Добавляем новое свойство:

person.phone = "89105489191";
person["hair"] = "red";

console.log(person.phone); // 89105489191
console.log(person["hair"]);  // red

for (let key in person) {
    console.log(key + ":", person[key]);
}
// name: Anya
// age: 26
// address: {country: 'Russia', city: 'Moscow', street: 'Novokosinskaya', building: 20, apartment: 19}
// occupation: dentist
// isEmployed: true
// isMarried: true
// hasChildren: false
// hobby: (8) ['reading', 'watching series', 'learning English', 'doing sports', 'drawing', 'cooking', 'board games', 'video games']
// phone: 89105489191
// hair: red


// 2.2 Изменяем значение существующего свойства:

person.address.building = 15;
person["address"]["apartment"] = 2;

console.log(person.address.building);  // 15
console.log(person["address"]["apartment"]);  // 2

console.log(person);
// {name: 'Anya', age: 26, address: {…}, occupation: 'dentist', isEmployed: true, …}
// address: {country: 'Russia', city: 'Moscow', street: 'Novokosinskaya', building: 15, apartment: 2}
// age: 26
// hair: "red"
// hasChildren: false
// hobby: (8) ['reading', 'watching series', 'learning English', 'doing sports', 'drawing', 'cooking', 'board games', 'video games']
// isEmployed: true
// isMarried: true
// name: "Anya"
// occupation: "dentist"
// phone: "89105489191"
// [[Prototype]]: Object


// 2.3 Удаляем свойства объекта:

delete person.hair;

console.log(person["hair"]); // undefined

for (let [key, value] of Object.entries(person)) {
    console.log(`${key}:`, value);
}
// name: Anya
// age: 26
// address: {country: 'Russia', city: 'Moscow', street: 'Novokosinskaya', building: 20, apartment: 19}
// occupation: dentist
// isEmployed: true
// isMarried: true
// hasChildren: false
// hobby: (8) ['reading', 'watching series', 'learning English', 'doing sports', 'drawing', 'cooking', 'board games', 'video games']
// phone: 89105489191


