// 1. Назначь для кнопки обработчик события click, который будет изменять текст этой кнопки при нажатии;

const button = document.getElementById("my-button");

button.addEventListener("click", () => {
    if (button.innerHTML === "<span>Clicked!</span>") {
        button.innerHTML = "<span>Click me!</span>";
        button.style.backgroundColor = "";
    } else {
        button.innerHTML = "<span>Clicked!</span>";
        button.style.backgroundColor = "red";
    }
});

// второй вариант:
// button.addEventListener("click", () => {
//     if (button.innerText === "Clicked!") {
//         button.innerText = "Click me!";
//         button.style.backgroundColor = "";
//     } else {
//         button.innerText = "Clicked!";
//         button.style.backgroundColor = "red";
//     }
// });


// 2. Назначь для любого элемента обработчик события mouseover, который будет изменять размер элемента при наведении;

const emoji = document.getElementById("emoji");

emoji.addEventListener("mouseover", () => {
    emoji.style.width = "200px";
});

emoji.addEventListener("mouseout", () => {
    emoji.style.width = "100px";
});


// 3. Назначь для инпута обработчик события keyup, который будет выводить отпущенную клавишу в консоль;

const input = document.getElementById("my-input");

input.addEventListener("keyup", (event) => {
    console.log(`Нажата клавиша: ${event.key}`);
});



// это баловство просто)))
const button2 = document.getElementById("easterEgg");
button2.addEventListener("click", () => {
    if (input.value === "Espresso Macchiato" || input.value === "Эспрессо макиато") {
        alert("Por favore!");
    }
});


//4. Создай форму и добавь обработчик события submit, который будет показывать сообщение об успешной отправке;

const form = document.getElementById("form");

form.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
    }
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Форма успешно отправлена!");
});


// 5. Пусть на странице есть кнопка с надписью 'Изменить тему', которая позволяет переключать тему страницы. 
// Например, по умолчанию тема светлая: задний фон - белый, текст - черный. 
// Нажимаем на кнопку -> тема меняется на темную: цвет фона - черный, текст - белый. Еще раз нажимаем на кнопку -> тема снова светлая и т. д.

const change = document.getElementById("change");
const body = document.querySelector("body");

change.addEventListener("click", () => {
    body.classList.toggle("active");
});

// change.addEventListener("click", () => {
//     if (body.style.backgroundColor === "black" & body.style.color === "white") {
//         body.style.backgroundColor = "";
//         body.style.color = "";
//     } else {
//         body.style.backgroundColor = "black";
//         body.style.color = "white";
//     }
// });


