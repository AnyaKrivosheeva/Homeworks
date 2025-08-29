// 1. Напиши функцию, которая использует `setTimeout` для создания таймера обратного отсчета. 
// Таймер должен выводить оставшееся время каждую секунду и остановиться, когда время истечет;

function startTimer(timerLeft) {

    console.log(timerLeft);

    if (timerLeft > 0) {
        setTimeout(startTimer, 1000, --timerLeft);
    };
};

startTimer(5);

// это первый вариант, который я написала, но код менее читаемый и громоздкий
// function startTimer2(timerLeft) {
//     console.log(timerLeft);

//     if (timerLeft === 0) {
//         return;
//     }
//     setTimeout(startTimer2, 1000, --timerLeft);
// };

// startTimer2(5);

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

let timeoutId = null;  // изначальное состояние - таймер не запущен
let lastDelay = 1000;

button.addEventListener("click", () => {
    if (timeoutId === null) {                                       // если таймер не запущен, то запускаем
        lastDelay = Number(delay.value);
        logToConsole();
        delay.focus();
        button.textContent = "Остановить";
    } else {                                               // в другом случае(он запущен) - очищаем и возвращаем в изначальное состояние
        clearTimeout(timeoutId);
        timeoutId = null;
        delay.value = "";
        delay.focus();
        text.value = "";
        button.textContent = "Начать";
    }
});

function logToConsole() {
    console.log(text.value);
    if (delay.value > 0) {
        timeoutId = setTimeout(logToConsole, Number(delay.value));
    } else {
        timeoutId = setTimeout(logToConsole, lastDelay);
    };
};
