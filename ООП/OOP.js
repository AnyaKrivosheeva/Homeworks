// 1. Создай класс Car с конструктором, который принимает марку и модель автомобиля. 
// Добавь метод для вывода информации об автомобиле. Создай несколько экземпляров класса и выведи их информацию;

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    get information() {
        return `Марка автомобиля: ${this.make}; Модель: ${this.model}`;
    }
}

const myCar1 = new Car("Тойота", "Королла");
console.log(myCar1.information);  // Марка автомобиля: Тойота; Модель: Королла

const myCar2 = new Car("Форд", "Мустанг");
console.log(myCar2.information);  // Марка автомобиля: Форд; Модель: Мустанг




// 2. Создай класс ElectricCar, который наследует класс Car и добавь дополнительное свойство для емкости батареи. 
// Переопредели метод вывода информации, чтобы включить информацию о батарее;

class ElectricCar extends Car {
    constructor(make, model, battery) {
        super(make, model);
        this.battery = battery;
    }

    get information() {
        return super.information + `; Ёмкость батареи: ${this.battery} кВт·ч`;
    }
}

const myElectricCar = new ElectricCar("Тесла", "Кибертрак", 123);
console.log(myElectricCar.information);  // Марка автомобиля: Тесла; Модель: Кибертрак; Ёмкость батареи: 123 кВт·ч





// 3. Напиши пример использования полиморфизма, 
// создав несколько классов, наследующих общий базовый класс, и вызывая общий метод для всех объектов.

class Animal {
    constructor(name) {
        this.name = name;
    }

    get voice() {
        return `${this.name} издает звук`;
    }
}

class Cat extends Animal {
    get voice() {
        return `${this.name} мяукает`;
    }
}

class Dog extends Animal {
    get voice() {
        return `${this.name} гавкает`;
    }
}

const pets = [new Cat("Вискерс"), new Dog("Лаки")];

pets.forEach(pet => console.log(pet.voice));
// Вискерс мяукает
// Лаки гавкает

