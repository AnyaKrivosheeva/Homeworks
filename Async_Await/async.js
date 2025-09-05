// 1. Напиши асинхронную функцию `delay`, которая принимает один аргумент - количество миллисекунд, и возвращает промис, 
// который разрешается (резолвится) через заданное количество времени. 
// Используй `async/await` для ожидания этого промиса и выведите сообщение "Задержка завершена" после завершения ожидания;

async function delay(ms) {
    await new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
    console.log("Задержка завершена");
};

delay(2000);

// или так
async function delay2(ms) {
    const delayMessage = await new Promise((resolve) => {
        setTimeout(resolve, ms, "Задержка завершена");
    });
    console.log(delayMessage);
};

delay2(2000);



// 2. Напиши асинхронную функцию `fetchUserData`, которая делает запрос к фейковому API (любому) и возвращает данные пользователя. 
// Используй функцию fetch.

async function fetchUserData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {                                       // проверка статуса ответа
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        const userData = await response.json();

        return userData;
    } catch (err) {
        console.log("Ошибка:", err);
        return null;
    }
};

fetchUserData("https://jsonplaceholder.typicode.com/todos/1").then(userData => console.log(userData));
