// 1. Создай класс Person и класс-наследник Student . 
// Класс Person должен иметь свойства name и метод introduce, который выводит строку вида "Привет, меня зовут (имя)". 
// Класс Student должен наследовать Person и добавлять свойство course и переопределенный метод introduce, 
// который выводит строку вида "Привет, меня зовут (имя), и я учусь на (курсе) курсе". 
// Используй console.log(Student.prototype) и исследуй, как JavaScript создает цепочку прототипов;

class Person {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        console.log(`Привет, меня зовут ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, course) {
        super(name);
        this.course = course;
    }

    introduce() {
        console.log(`Привет, меня зовут ${this.name}, и я учусь на ${this.course} курсе.`);
    }
}

const student1 = new Student("Иван", 2);
student1.introduce();  // Привет, меня зовут Иван, и я учусь на 2 курсе.

console.log(Student.prototype);
/* В консоли мы увидим объект со следующими свойствами: constructor: class Student(указывает на то, что прототип относится к классу Student),
метод introduce(переопределенный), [[Prototype]]: Object (скрытое свойство, указывающее на прототип объекта - Person.prototype).
Раскрыв его мы увидим: constructor: class Person, introduce: introduce(), [[Prototype]]: Object( указывает на прототип - Object.prototype).
В итоге цепочка прототипов в данном случае будет выглядеть так:
student1(экземпляр) => Student.prototype => Person.prototype => Object.prototype => null
*/




// 2. Создай класс Employee, наследующий Person. 
// Класс должен добавлять свойство position и метод work, который выводит строку "Я работаю на позиции (должность)". 
// Переопредели метод introduce так, чтобы он также включал информацию о должности;


class Employee extends Person {
    constructor(name, position) {
        super(name);
        this.position = position;
    }

    introduce() {
        console.log(`Привет, меня зовут ${this.name} и я ${this.position}.`);
    }

    work() {
        console.log(`Я работаю на позиции ${this.position}.`);
    }
}

const employee1 = new Employee("Максим", "фронтенд разработчик");
employee1.introduce();  // Привет, меня зовут Максим и я фронтенд разработчик.
employee1.work();  // Я работаю на позиции фронтенд разработчик.




// 3. Создай объектное наследование без использования классов. 
// Создай объект Vehicle с методом move. Создай объект Car, который наследует от Vehicle, добавив свой метод drive. 
// Используй Object.create для наследования.

function Vehicle(name) {      // создаем функцию конструктор Vehicle
    this.name = name;
};

Vehicle.prototype.move = function () {                //добавляем метод move для Vehicle.prototype
    console.log(`Транспортное средство движется.`);
};

function Car(name, make) {     // создаем функцию-конструктор Car
    Vehicle.call(this, name);  // наследуем свойства от Vehicle
    this.make = make;         // создаем специфическое свойство для Car
};

//наследуем методы от Vehicle
Car.prototype = Object.create(Vehicle.prototype);   // сначала создается объект, который наследуется от Vehicle.prototype 
Car.prototype.constructor = Car;                   // восстанавливаем конструктор для Car

Car.prototype.drive = function () {    // добавляем  специфическое свойство для Car.prototype
    console.log(`Машина едет.`);
};

const myVehicle1 = new Vehicle("Велосипед");
console.log(myVehicle1.name);  // Велосипед
myVehicle1.move();  // Транспортное средство движется.

const myVehicle2 = new Car("Машина", "Тойота");
console.log(myVehicle2.name);  // Машина
console.log(myVehicle2.make);  // Тойота
myVehicle2.drive();  // Машина едет.
myVehicle2.move();   // Транспортное средство движется.




