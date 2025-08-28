// 1. Напиши функцию, которая использует `setTimeout` для создания таймера обратного отсчета. 
// Таймер должен выводить оставшееся время каждую секунду и остановиться, когда время истечет;

function startTimer(timerLeft) {

    console.log(timerLeft);

    if (timerLeft > 0) {
        setTimeout(startTimer, 1000, --timerLeft);
    };
};

const timerId = setTimeout(startTimer, 1000, 5);


// это первый вариант, который я написала, но код менее читаемый и громоздкий
// function startTimer2(timerLeft) {
//     console.log(timerLeft);

//     if (timerLeft === 0) {
//         return;
//     }
//     setTimeout(startTimer2, 1000, --timerLeft);
// };

// const timerId2 = setTimeout(startTimer2, 1000, 5);


// 2. Напиши функцию, которая использует `setInterval` для вывода сообщения "Не забудь выпить воды!" каждые 30 минут;

function showMessage(message) {
    console.log(message);
};

const waterDrinkingTimerId = setInterval(showMessage, 30 * 60 * 1000, "Не забудь выпить воды!");


// 3. Создай HTML-форму, где есть три элемента: поле "Задержка", поле "Текст", кнопка "Начать". 
// При клике на кнопку текст выводится в консоль через указанную задержку до тех пор, пока пользователь снова не нажмет начать. 
// Если пользователь снова нажмет на кнопку - текст снова начнет выводится в консоль, нажмет еще раз - прекратит и т. д.

const delay = document.getElementById("delay");
const text = document.getElementById("text");
const button = document.getElementById("button");

let intervalId = null;  // изначальное состояние - таймер не запущен

button.addEventListener("click", () => {
    if (intervalId === null) {                                                     // если таймер не запущен, то запускаем
        intervalId = setInterval(logToConsole, Number(delay.value), text.value);
        button.textContent = "Остановить";
    } else {                                                      // в другом случае(он запущен) - очищаем и возвращаем в изначальное состояние
        clearInterval(intervalId);
        intervalId = null;
        button.textContent = "Начать";
    }
});

function logToConsole(text) {
    console.log(text);
};
