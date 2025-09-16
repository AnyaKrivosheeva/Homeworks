// 1. Создай форму для ввода контактной информации (имя, телефон, email). 
// Сохрани данные в LocalStorage в виде объекта JSON. 
// Затем извлеки данные из LocalStorage, преобразуй их обратно в объект и отобрази контактную информацию на странице;

const form = document.getElementById("form");
const information = document.getElementById("information");

form.addEventListener("submit", (event) => {     // вешаем обработчик на событие submit
    event.preventDefault();                     // предотвращаем перезагрузку страницы

    const user = saveInformation();             // сохраняем информацию  из формы в объект user

    localStorage.setItem("user1", JSON.stringify(user));     // сохраняем информацию в localStorage

    getInformation();    //получаем и выводим информацию на страницу
});


function saveInformation() {
    const user = {};           // объявляем объект

    Array.from(form.querySelectorAll('input')).forEach((input) => {       // добавляем  в объект данные, введенные пользователем в инпуты
        user[input.name] = input.value;
    });

    return user;       // возвращаем обновленный объект
};

function getInformation() {
    information.innerHTML = "";     // очищаем поле с информацией

    const user1 = JSON.parse(localStorage.getItem("user1"));  // получаем данные из хранилища

    for (let key in user1) {                         // выводим данные на экран
        let p = document.createElement("p");
        p.textContent = `${key}: ${user1[key]}`;
        information.append(p);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    getInformation();
});

// 3. Создай счетчик, который отслеживает и отображает активное время пользователя на странице. 
// Время должно обновляться каждую секунду и сохраняться в SessionStorage.

const counter = document.getElementById("counter");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
let daysCounter = 0;
let hoursCounter = 0;
let minutesCounter = 0;
let secondsCounter = 0;
let timerId;

document.addEventListener("DOMContentLoaded", () => {

    const savedSession = JSON.parse(sessionStorage.getItem("activeSession"));

    if (savedSession) {
        daysCounter = savedSession.days || 0;
        hoursCounter = savedSession.hours || 0;
        minutesCounter = savedSession.minutes || 0;
        secondsCounter = savedSession.seconds || 0;

        days.textContent = daysCounter;
        hours.textContent = hoursCounter;
        minutes.textContent = minutesCounter;
        seconds.textContent = secondsCounter;
    }


    timerId = setInterval(() => {
        secondsCounter++;

        if (secondsCounter === 60) {
            secondsCounter = 0;
            minutesCounter++;
        }
        if (minutesCounter === 60) {
            minutesCounter = 0;
            hoursCounter++;
        }
        if (hoursCounter === 24) {
            hoursCounter = 0;
            daysCounter++;
        }

        days.textContent = String(daysCounter).padStart(2, '0');
        hours.textContent = String(hoursCounter).padStart(2, '0');
        minutes.textContent = String(minutesCounter).padStart(2, '0');
        seconds.textContent = String(secondsCounter).padStart(2, '0');

        sessionStorage.setItem("activeSession", JSON.stringify(saveActiveSession()));
    }, 1000)
});


function saveActiveSession() {
    const activeSession = {
        days: daysCounter,
        hours: hoursCounter,
        minutes: minutesCounter,
        seconds: secondsCounter,
    };
    return activeSession;
};




// 2. Создай приложение для учета расходов. 
// Сохрани каждую запись расхода (описание, сумма, дата) в LocalStorage в виде массива объектов JSON.
// Затем извлеки данные из LocalStorage и отобрази список расходов. Также реализуй функцию удаления записи из LocalStorage;

const expensesForm = document.getElementById("expenses-form");
const expensesList = document.getElementById("expenses-list");
let expenseIdCounter;
let expensesArray = [];

document.addEventListener("DOMContentLoaded", () => {
    const savedExpensesList = JSON.parse(localStorage.getItem("ExpensesList"));

    if (savedExpensesList) {
        expensesArray = savedExpensesList;
        renderExpenses(savedExpensesList);
    }

    expenseIdCounter = parseInt(localStorage.getItem("ExpensesIdCounter")) || 1;
});

expensesForm.addEventListener("submit", (event) => {
    event.preventDefault();

    saveExpenseToArray();

    expenseIdCounter++;
    localStorage.setItem("ExpensesIdCounter", JSON.stringify(expenseIdCounter));

    renderExpenses(expensesArray);
    expensesForm.reset();
});

function makeExpenseObject() {
    const expense = {};
    expense.id = expenseIdCounter;

    Array.from(expensesForm.querySelectorAll('input')).forEach((input) => {       // добавляем в объект данные, введенные пользователем в форму
        expense[input.name] = input.value;
    });

    return expense;
};

function saveExpenseToArray() {
    expensesArray = JSON.parse(localStorage.getItem("ExpensesList")) || [];

    expensesArray.push(makeExpenseObject());

    localStorage.setItem("ExpensesList", JSON.stringify(expensesArray));

};

function renderExpenses(array) {
    expensesList.innerHTML = "";
    expensesList.textContent = array.length > 0 ? "Список расходов:" : "";

    array.forEach((object) => {
        let objectDiv = document.createElement('div');
        objectDiv.style.cssText = "display: flex; gap: 15px; margin-top: 15px;";

        for (let key in object) {
            if (key === "id") continue;

            let p = document.createElement("p");
            p.style.margin = "0";

            switch (key) {
                case "Сумма(руб)":
                    p.textContent = `${object[key]} руб.`;
                    break;
                case "Описание":
                    p.textContent = `${object[key]}`;
                    break;
                case "Дата":
                    p.textContent = `${object[key]}`;
                    break;
            }

            objectDiv.append(p);
        }

        makeDeleteButton(object, objectDiv);

        expensesList.append(objectDiv);
    });

    if (array.length > 0) {
        makeDeleteAllButton(expensesList);
    }
};

function makeDeleteButton(object, containerDiv) {
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить";
    deleteButton.setAttribute("data-id", object.id);
    containerDiv.append(deleteButton);

    deleteButton.addEventListener("click", () => {
        if (confirm("Удалить запись?")) {
            const idToDelete = Number(deleteButton.dataset.id);
            deleteExpenseById(idToDelete);
        }
    });
};

function makeDeleteAllButton(containerDiv) {
    let deleteAllButton = document.createElement("button");
    deleteAllButton.textContent = "Удалить всё";
    deleteAllButton.style.marginTop = "20px";
    containerDiv.append(deleteAllButton);

    deleteAllButton.addEventListener("click", () => {
        if (confirm("Удалить все записи о расходах?")) {
            localStorage.removeItem("ExpensesList");
            localStorage.removeItem("ExpensesIdCounter");
            expensesArray = [];
            expenseIdCounter = 1;
            renderExpenses(expensesArray);
            deleteAllButton.style.display = "none";
        }
    });
};

function deleteExpenseById(id) {
    expensesArray = expensesArray.filter((object) => object.id !== id);

    localStorage.setItem("ExpensesList", JSON.stringify(expensesArray));

    renderExpenses(expensesArray);
};

