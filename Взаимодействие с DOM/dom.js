// 1. Найди элемент на странице по его ID и измени его текстовое содержимое на что-то новое;

const header = document.getElementById("header");
header.textContent = "Доброе утро, дорогой друг!";

const title = document.getElementById("title");
title.innerHTML = "Вот твои задания на день:";


// 2. Используй JavaScript, чтобы изменить фон и цвет текста элемента с определенным классом;

const listWrapper = document.getElementsByClassName("list-wrapper")[0];
console.log(listWrapper);

listWrapper.style.background = "#f8d1d8";
listWrapper.style.color = "#0097ff";


// 3. Напиши код, который создает новый параграф с текстом и добавляет его в конец документа
// первый способ создать элемент
const newParagraph = document.createElement("p");

listWrapper.after(newParagraph);
newParagraph.textContent = "У тебя всё получится!";

// второй способ  с помощью метода insertAdjacentHTML вставить сразу в документ без лишних переменных
newParagraph.insertAdjacentHTML("afterend", "<p>За выполнение всех заданий плюс в карму!</p>");


// 4. Напиши функцию, которая удаляет элемент с указанным ID из документа

function removeElementById(id) {                         // функция принимает один параметр id элемента который надо удалить                
    const removeElement = document.getElementById(id);   // в переменную получаем элемент из документа с указанным id
    console.log(removeElement);                         
    removeElement.remove();                              // удаляем полученный элемент
}

removeElementById("name");         //  в качестве аргумента при вызове функции указываем id элемента который надо удалить


// 5. Измени атрибут ссылки на новый URL и выведи его значение в консоль

const link = document.getElementById("link");

link.setAttribute("href", "https://music.yandex.ru/album/12964201");

console.log(link.getAttribute("href"));


// 6. Создай новый элемент, добавь к нему класс и добавь его в DOM

const header2 = document.createElement('h2');

header2.setAttribute("class", "subheader");
header2.textContent = "Как твои дела сегодня?";

header.after(header2);


// 7. Переключи класс у существующего элемента и проверьте его наличие в консоли.

const item = document.querySelector(".item");   // получаем первый элемент из нашего списка
console.log(item);

item.classList.toggle("item");      // переключаем класс item
console.log(item.className);        // (пустая строка)

console.log(item.classList.contains("item"));  // false (класса нет)







