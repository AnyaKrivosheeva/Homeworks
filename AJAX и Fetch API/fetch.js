// 1. Сделай HTML-форму для создания нового поста с полями id пользователя, заголовок, текст. 
// При отправке формы выполни POST запрос и отобрази ответ сервера на странице;

const postForm = document.querySelector(".form");
const post = document.querySelector(".post-result");

postForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formDataObject = getFormData(postForm);

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {      //вызываем метод fetch и в качестве второго аргумента в options 
            method: "POST",                                                // мы указываем метод запроса post
            body: JSON.stringify(formDataObject),                          // а далее в body запроса передаем наш объект в формате json
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
        });
        if (!response.ok) {                                       // проверка статуса ответа
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const data = await response.json();                      // парсим ответ от сервера
        renderData(data);
    } catch (err) {
        console.error(err);
    }
});


function getFormData(form) {
    const formData = new FormData(form);                   //собираем данные из формы
    const data = Object.fromEntries(formData);       // создаем объект с данным и из формы
    data.userId = Number(data.userId);              //приведем к числу данное значение
    return data;                                   //возвращаем данные из формы
};

function renderData(data) {          // функция для вывода ответа сервера
    post.innerHTML = "";

    let userId = document.createElement("div");
    userId.textContent = `Идентификатор пользователя: ${data.userId}`;
    post.append(userId);

    let postHeader = document.createElement("h3");
    postHeader.textContent = data.title;
    post.append(postHeader);

    let postText = document.createElement("div");
    postText.textContent = data.body;
    post.append(postText);

    postForm.reset();
    postForm.elements.userId.focus();
};




// 2. Реализуй кнопку для загрузки списка постов. При нажатии на кнопку выполни GET запрос к API и отобрази список постов на странице;

const getButton = document.querySelector(".get-button");
const allPosts = document.querySelector(".all-posts");

getButton.addEventListener("click", async (event) => {
    event.preventDefault();

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");   //отправляем запрос get на сервер
        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
        }

        const posts = await response.json();

        renderPosts(posts);

    } catch (err) {
        console.log("Ошибка:", err);
        return null;
    }
});

function renderPosts(posts) {
    allPosts.innerHTML = "";

    posts.forEach((post) => {
        let postDiv = document.createElement("div");
        postDiv.setAttribute("data-id", post.id);

        let postTitle = document.createElement("h3");
        postTitle.textContent = post.title;
        postDiv.append(postTitle);

        let postText = document.createElement("p");
        postText.textContent = post.body;
        postDiv.append(postText);

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Удалить";
        deleteButton.style.marginTop = "5px";
        postDiv.append(deleteButton);
        deleteButton.addEventListener("click", () => {
            deletePost(post.id);
        });

        allPosts.append(postDiv);
    });
};


// 3. Создай функцию для удаления поста по id. Выполни DELETE запрос к API и обнови DOM, удалив соответствующий пост;

async function deletePost(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {  // делаем  delete запрос к api, удаляем пост по его id
            method: "DELETE",
        });
        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
        }

        const postToDelete = document.querySelector(`[data-id="${id}"]`);   // находим в dom необходимый пост по data атрибуту
        postToDelete.remove();   // и удаляем его из dom

    } catch (err) {
        console.error(err);
        alert("Не удалось удалить пост :(");
    }
};




// 4. Реализуй функциональность для обновления данных пользователя. 
// Используй PUT запрос для отправки обновленных данных на сервер и отобрази обновленный профиль на странице. 
// Объясни, в чём разница между PUT и PATCH запросами.

/* 
PUT запросы заменяют все существующие на сервере данные. Когда мы посылаем такой запрос сервер ожидает получить все поля объекта, 
даже если изменилось только одно. Такой запрос удобен при работе с полной формой, например при редактировании данных профиля.

PATCH запросы лишь частично заменяют уже существующие на сервере данные. Сервер ожидает только некоторые поля, которые надо поменять,
остальные поля останутся неизмененными. Такие запросы необходимы если пользователь может поменять только часть данных(например аватар).
*/

const userProfile = document.querySelector(".user-profile");
const userForm = document.querySelector(".user-form");
let userId = 1;

document.addEventListener("DOMContentLoaded", () => {
    fetchUserData(`https://jsonplaceholder.typicode.com/users/${userId}`).then((userData) => renderUserData(userData));  // при загрузке страницы сразу отрисовываем профиль пользователя
});

async function fetchUserData(url) {    //получаем данные пользователя с сервера
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
        }

        const userData = await response.json();

        return userData;
    } catch (err) {
        console.error(err);
        return null;
    }
};

function renderUserData(userData) {   // функция рендера профиля на основе данных с сервера(в данной реализации профиль состоит только из имени, почты и телефона)
    userProfile.innerHTML = "";

    let userName = document.createElement("p");
    userName.textContent = `Имя пользователя: ${userData.name}`;
    userProfile.append(userName);

    let userEmail = document.createElement("p");
    userEmail.textContent = `Email: ${userData.email}`;
    userProfile.append(userEmail);

    let userPhone = document.createElement("p");
    userPhone.textContent = `Телефон: ${userData.phone}`;
    userProfile.append(userPhone);
};

userForm.addEventListener("submit", async (event) => {     // при отправке формы с отредактированным профилем вызывает метод put и заменяем все данные юзера на сервере
    event.preventDefault();

    const dataToSend = getDataUserForm(userForm);

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend),
        });
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const userData = await response.json();

        renderUserData(userData);    // и сразу выводим новые данные с сервера
        userForm.reset();
    } catch (err) {
        console.error(err);
        alert("Не удалось отредактировать профиль.");
    }
});

function getDataUserForm(form) {                 //функция которая собирает данные из формы и создает объект с данными
    const userFormData = new FormData(form);
    const userDataObject = Object.fromEntries(userFormData);
    return userDataObject;
};



