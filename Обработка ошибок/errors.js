// 1. Напиши функцию `safeDivide`, которая принимает два числа и возвращает результат их деления. 
// Если второй аргумент равен нулю, функция должна бросать ошибку с сообщением "Деление на ноль невозможно". 
// Используй `try...catch` для обработки ошибок и выведи сообщение об ошибке в консоль;

function safeDivide(a, b) {
    if (b === 0) {
        throw new Error("Деление на ноль невозможно");
    }

    return a / b;
};

try {
    console.log(safeDivide(15, 0));
} catch (error) {
    console.log("Ошибка:", error.message);   // Ошибка: Деление на ноль невозможно
};


// 2. Напиши функцию `transfromJSON`, которая принимает строку в формате JSON и возвращает объект. 
// Используй `try...catch` для обработки возможных ошибок при парсинге JSON и выведи сообщение об ошибке в консоль;

let jsonString = '{"name":"John", "age": 30, "city": "Moscow"}'; // строка в формате JSON
// let jsonString = '{"name":"John", "age": 30}';
// let jsonString = "{uncorrect}";  //некорректные данные JSON

function transfromJSON(json) {
    try {
        return JSON.parse(json);
    } catch (error) {
        console.log("Ошибка при парсинге JSON");  // будет выводить ошибку при некорректных данных в строке JSON
        console.log(error.message);
    }
};

function checkData(value, fieldName) {      // отдельная функция для проверки данных в объекте
    if (!value) {
        throw new Error(`${fieldName}: нет данных`);   // если каких-то запрашиваемых данных нет в объекте - генерируем ошибку
    }
    console.log(`${fieldName}:`, value);
};

const user = transfromJSON(jsonString);

try {
    checkData(user, "Пользователь");
    checkData(user.name, "Имя");
    checkData(user.age, "Возраст");
    checkData(user.city, "Город");
} catch (error) {
    console.log(error.message);  // выводит ошибку если запрашиваемых данных нет в объекте или нет самого объекта
};



// 3. Напиши функцию `checkAccess`, которая принимает возраст пользователя.
//  Если возраст меньше 18, функция должна бросать ошибку с сообщением "Доступ запрещен". 
// Используйте `try...catch` для обработки ошибок и выведи сообщение об ошибке в консоль.

function checkAccess(age) {
    if (age < 18) {
        throw new Error("Доступ запрещен");
    }
    console.log("Доступ разрешен");  
};

try {
    checkAccess(15);
} catch (error) {
    console.log(error.message);  // Доступ запрещен
};

try {
    checkAccess(20);
} catch (error) {
    console.log(error.message); // не выполняется
}
// Доступ разрешен