// 1. Создай класс Counter, который будет иметь приватное свойство count.
//  Напиши публичные методы для увеличения, уменьшения и отображения значения счетчика;

class Counter {
    #count;     // объявляем приватное свойство count

    setCounter(value) {         // метод для установки изначального состояния счетчика
        if (value < 0) {
            throw new Error("Число должно быть положительным.");
        }
        this.#count = value;
        console.log("Установлен счетчик.");
        return;
    }

    getCounter() {     // метод возвращающий текущее значение счетчика
        return this.#count;
    }

    increase(amount) {
        if (amount > 0) {
            this.#count += amount;
            console.log(`Счетчик увеличен на ${amount}`);
            return;
        }
        console.log("Число должно быть положительным.");
    }

    decrease(amount) {
        if (amount > 0) {
            this.#count -= amount;
            console.log(`Счетчик уменьшен на ${amount}`);
            return;
        }
        console.log("Число должно быть положительным.");
    }
}

const myCounter = new Counter;
myCounter.setCounter(0);  // Установлен счетчик.
console.log(myCounter.getCounter());  // 0

myCounter.increase(3);  // Счетчик увеличен на 3
myCounter.increase(-3); // Число должно быть положительным.
console.log(myCounter.getCounter());  // 3

myCounter.decrease(1);   // Счетчик уменьшен на 1
myCounter.decrease(-1);  // Число должно быть положительным.
console.log(myCounter.getCounter());  //2

// const myCounter2 = new Counter;
// myCounter.setCounter(-2);  // Error: Число должно быть положительным.
// console.log(myCounter.getCounter());  // не выполняется





// 2. Создай класс EmailValidator со статическим методом isValid(email),
// который будет проверять, является ли строка корректным email (достаточно простой проверки на наличие символа @);

class EmailValidator {
    static isValid(email) {
        if (email.includes("@")) {    // простая проверка на наличие символа @
            return true;    // возвращает true если в строке не содержится данный символ
        }
        return false;   // возвращает false если строка содержит @
    }
}

console.log(EmailValidator.isValid("anyakrivosheeva@gmail.com") === true);  // true
console.log(EmailValidator.isValid("ivandevelopermail.com") === true);  // false


// пример с более практичной проверкой
class EmailValidator2 {
    static isValid(email) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;   //для проверки будем использовать регулярное выражение
        return pattern.test(email); // метод вернет true только если в email: есть символ @, до @ и после @ есть хотя бы один символ, в части после @ есть точка; иначе - возвращает false
    }
}
// метод .test() проверяет подходит ли строка под регулярное выражение

console.log(EmailValidator2.isValid("user@example.com")); // true
console.log(EmailValidator2.isValid("user@example"));     // false
console.log(EmailValidator2.isValid("@example.com"));     // false
console.log(EmailValidator2.isValid("user@.com"));        // false
console.log(EmailValidator2.isValid("user@domain."));     // false





// 3. Создай класс Order с приватным методом #calculateTotal(), который будет рассчитывать общую стоимость заказа. 
// Сделай публичный метод, который возвращает результат этого расчета, и вызывай его через созданный экземпляр класса.


class Item {                               // создадим класс Item для создания отдельных объектов товаров
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

class Order {
    _items = [];            // массив где будут храниться товары, составляющие заказ

    addItem(item) {              // метод, позволяющий добавлять товары в массив
        this._items.push(item);
        return this._items;
    }

    removeItem(name) {   // метод для удаления товаров из массива
        this._items = this._items.filter(item => item.name !== name); // фильтруем массив
        return this._items;
    }

    #calculateTotal() {     // метод возвращает результат расчета общей стоимости товаров из массива с товарами
        const total = this._items.reduce((total, item) => total + item.price * item.quantity, 0)
        return total;
    }

    getTotal() {     // публичный метод возвращает реузльтат расчетов
        return this.#calculateTotal();
    }
}

const iceCream = new Item("Мороженое", 150, 2);
const bread = new Item("Хлеб", 100, 1);

const order1 = new Order();
order1.addItem(iceCream);   // добавляем товары в заказ
order1.addItem(bread);

console.log(order1.getTotal()); // 400

order1.removeItem("Хлеб"); // удаляем хлеб из корзины
console.log(order1.getTotal());  // 300


