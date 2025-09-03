// 1. Напиши функцию `getUserData`, которая возвращает промис с данными пользователя через 2 секунды. 
// Затем создай цепочку промисов, которая обрабатывает эти данные и выводит результат в консоль;

function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = {          // допустим получен объект с данными пользователя
                name: "Anna",
                age: 27,
                city: "Moscow",
            }
            if (user) {
                resolve(user);
            } else {
                reject("Произошла ошибка получения данных с сервера")
            }
        }, 2000);
    });
};

getUserData()
    .then((userData) => {
        console.log("Получены данные:", userData)     // выводим объект в консоль целиком
        userData.id = 1007;                     // модифицируем данные
        return userData;                       // пробрасываем его дальше
    })
    .then((userData) => {
        console.log("Имя:", userData.name)
        console.log("Возраст:", userData.age)
        console.log("Город проживания:", userData.city)
        console.log("Присвоен id:", userData.id)
    })
    .catch(error => console.log(error));



//2. Напиши две функции, каждая из которых возвращает промис с данными через 3 и 5 секунд соответственно.
// Используй такой метод промисов, чтобы дождаться выполнения обоих промисов и вывести результаты в консоль;

function getDataAfter3Sec() {
    return new Promise((resolve) => {
        setTimeout(resolve, 3000, 'Данные получены через 3 сек');
    });
}

function getDataAfter5Sec() {
    return new Promise((resolve) => {
        setTimeout(resolve, 5000, 'Данные получены через 5 сек');
    });
}

Promise.all([getDataAfter3Sec(), getDataAfter5Sec()])
    .then((results) => console.log(results))    // дожидается выполнения всех промисов и затем выводит данные в консоль
    .catch((error) => console.log(error));      // но если будет хотя бы одна ошибка - отклоняется

//

Promise.allSettled([getDataAfter3Sec(), getDataAfter5Sec()])    // дожидается выполнения всех промисов 
    .then((results) => {
        results.forEach((result) => {
            if (result.status === "fulfilled") {
                console.log("Выполнено:", result.value);     // выведет в консоль данные об успешных операциях и также об отклоненных
            } else {
                console.log("Отклонено:", result.reason);
            }
        });
    });




// 3. Напиши две функции, каждая из которых возвращает промис через случайное время (от 1 до 5 секунд). 
// Используй такой метод промисов, чтобы вывести результат первого выполненного промиса в консоль.

function getRandomDelay(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


function promiseAfterRandomDelay1() {
    return new Promise((resolve) => {
        setTimeout(resolve, getRandomDelay(1000, 5000), 'Промис с рандомной задержкой №1 выполнен');
    });
};

function promiseAfterRandomDelay2() {
    return new Promise((resolve) => {
        setTimeout(resolve, getRandomDelay(1000, 5000), 'Промис с рандомной задержкой №2 выполнен');
    });
};

Promise.race([promiseAfterRandomDelay1(), promiseAfterRandomDelay2()])
    .then((result) => console.log(result))       // в консоль выведется результат промиса с меньшей задержкой(того, который выполнится быстрее)
    .catch((error) => console.log(error));

//







