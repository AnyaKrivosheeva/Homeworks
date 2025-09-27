// 1. Напиши класс Book, который имеет поля title, author и pages. Добавь метод для вывода краткой информации о книге;

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    getInformation() {
        console.log(`Название книги: ${this.title}`);
        console.log(`Автор: ${this.author}`);
        console.log(`Количество страниц: ${this.pages}`);
    }
}

const book1 = new Book("Оно", "Стивен Кинг", 1243);
const book2 = new Book("Мистер Вечный Канун", "Владимир Торин, Олег Яковлев", 1021);

book1.getInformation();
// Название книги: Оно
// Автор: Стивен Кинг
// Количество страниц: 1243
book2.getInformation();
// Название книги: Мистер Вечный Канун
// Автор: Владимир Торин, Олег Яковлев
// Количество страниц: 1021




// 2. Создай класс User с полями name и email, методом displayInfo, который выводит информацию о пользователе. 
// Создай несколько экземпляров и вызови метод displayInfo;

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    displayInfo() {
        console.log(`Имя пользователя: ${this.name}; Email: ${this.email}`);
    }
}

const user1 = new User("Анна", "anyakrivosheeva@gmail.com");
const user2 = new User("Анатолий", "anatoliyshirokov@mail.ru");

user1.displayInfo();  // Имя пользователя: Анна; Email: anyakrivosheeva@gmail.com
user2.displayInfo();  // Имя пользователя: Анатолий; Email: anatoliyshirokov@mail.ru




// 3. В классе Rectangle из примера добавь геттер perimeter, который вычисляет и возвращает периметр прямоугольника. 
// Добавь сеттер height. Он должен проверять, что устанавливаемое значение высоты height больше 0. 
// Если значение не положительное, то выводится сообщение об ошибке в консоль, а высота остается неизменной.

class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    get area() {
        return this.width * this.height;
    }

    get perimeter() {
        return 2 * (this.width + this.height);
    }

    set width(value) {
        if (value <= 0) {
            console.error("Ширина должна быть положительным числом.");
        } else {
            this._width = value;
        }
    }

    get width() {
        return this._width;
    }

    set height(value) {
        if (value <= 0) {
            console.error("Высота должна быть положительным числом.");
        } else {
            this._height = value;
        }
    }

    get height() {
        return this._height;
    }
}

const rectangle1 = new Rectangle(5, 10);
const rectangle2 = new Rectangle(25, 15);

console.log(rectangle1.area);    // 50
rectangle1.width = -1;           // Ширина должна быть положительным числом.
console.log(rectangle1.width);   // 5
console.log(rectangle1.perimeter);  //30
rectangle1.height = -10;         // Высота должна быть положительным числом.
console.log(rectangle1.height);  //10

console.log(rectangle2.area);    // 375
rectangle2.width = 0;            // Ширина должна быть положительным числом.
console.log(rectangle2.width);   // 25
console.log(rectangle2.perimeter);  //80
rectangle2.height = -40;         // Высота должна быть положительным числом.
console.log(rectangle2.height);  //15
