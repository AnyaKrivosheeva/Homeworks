// 1. Создай объект student с вложенными объектами и массивами. 
// Затем создай поверхностную копию этого объекта (разными способами!) и измени вложенные структуры (массивы, объекты) у копии, 
// распечатай их. 
// Затем распечатай те же свойства у оригинала, чтобы увидеть, как на нем отразились изменения.
//  Объясни своими словами, что произошло;

const student = {
    name: "Anna",
    age: 26,
    email: "neolegovna@gmail.com",
    address: {
        city: "Moscow",
        street: "Novokosinskaya",
        building: 20,
    },
};

// создаем поверхностные копии объекта student
// 1 способ:

const shallowCopy1 = Object.assign({}, student);

shallowCopy1.address.building = 15;

console.log(shallowCopy1.address.building); // 15
console.log(student.address.building); // 15 

// 2 способ:

const shallowCopy2 = { ...student };

shallowCopy2.address.street = "Novoalekseevskaya";

console.log(shallowCopy2.address.street); // Novoalekseevskaya
console.log(student.address.street); // Novoalekseevskaya

// Свойства изменились и у копии и у оригинала, тк было выполнено поверхностное копирование объекта student.
// Это значит, что скопировались в новый объект только свойства верхнего уровня, а вложенные объекты остались ссылками,
// поэтому при изменении  свойств вложенных структур они изменятся и в оригинальном объекте.




// 2. Создать копию объекта, внутри которого есть методы (функции), с помощью использования JSON методов. 
// Затем попробуй вызывать метод у копии объекта. Объясни своими словами, что произошло;

const user = {
    name: "Alice",
    age: 30,
    address: {
        city: "Wonderland",
        zip: "12345"
    },
    sayHi: () => console.log('Hello, Alice!')
};

user.sayHi(); // Hello, Alice!

const deepCopyUser = JSON.parse(JSON.stringify(user));  // создание глубокой копии с помощью JSON методов

deepCopyUser.sayHi(); // (получаем ошибку) Uncaught TypeError: deepCopyUser.sayHi is not a function

// Mетоды JSON не позволяют копировать функции(методы), символы и свойства, содержащие undefined,
// а также приводят к потере типов некоторых объектов(например date). 
// Все это просто пропускается при копировании и не попадает в новый объект, 
// соответственно поэтому не получится вызвать данный метод у копии.




// 3*. Проанализируй и разбери функцию глубокого копирования из урока (function deepCopy). 
// Покрой каждую строчку кода комментариями, которые объясняют, что делает этот кусок кода и зачем. 
// То есть после этого задания у тебя должно сложиться полное понимание того, как работает эта функция, 
// чтобы в дальнейшем ты смог ее применить!

function deepCopy(obj) {   // функция deepCopy принимает в качестве аргумента объект который необхожимо скопировать

    if (obj === null || typeof obj !== 'object') {    // проводим проверку на случай если obj - это null или не объект
        return obj;                                   // и в таком случае возвращаем obj как есть
    }

    const copy = Array.isArray(obj) ? [] : {};       // создаем переменную copy в которой по итогу окажется наш скопированный объект
                                                     /* с помощью метода Array.isArray(obj) проверяем является ли obj массивом?
                                                        Если obj является массивом то копируем исходный массив в новый массив,
                                                        если obj не является массивом(это объект), то копируем в новый объект.
                                                        (запись с помощью тернарного оператора упрощает чтение)
                                                     */
    for (let key in obj) {   // с помощью цикла for in обходим все собственные свойства(key) объекта (obj)
        if (obj.hasOwnProperty(key)) {  //Делаем проверку с помощью метода hasOwnProperty: возвращает true если свойство(key) принадлежит непосредственно объекту, а не прототипу.
                                        // То есть цикл будет перебирать только собственные свойства объекта, т.о
                                        // нивелируются: ошибки, непредвиденные копирования, переполнения из за бесконечной рекурсии.

            copy[key] = deepCopy(obj[key]);  /* далее по ключу[key] присваиваем результат копирования в новый объект copy,
                                                для этого функция deepCopy вызывает саму себя(рекурсия), а в качестве аргумента мы передаем 
                                                текущее свойство исходного объекта.
                                                Если obj[key] оказывается примитивом, то функция просто вернет его,
                                                а если вложенным объектом, то пойдет вглубь и произойдет рекурсивный вызов функции,
                                                который будет обходить свойства уже вложенного объекта, и так пока не дойдет до дна.
                                             */
        }
    }

    return copy;         // и на выходе возвращаем полную копию исходного объекта
}






