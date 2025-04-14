// 1 задание

// Возьмите следующий код и приведите его в соответствие с общепринятым стандартом форматирования,
// соблюдая отступы, выравнивание и правила расстановки пробелов:

// function multiply(a,b){
//   return a*b;
// }
// const person ={name:'Alice',age:30};
// if(person.age>18){console.log('Adult');}
// else{console.log('Minor');}

function multiply(a, b) {
    return a * b;
  }
  
  const person = { name: 'Alice', age: 30 };
  
  if (person.age > 18) {
    console.log('Adult');
  } else {
    console.log('Minor');
  }
  
  
  
  // 2 задание
  // Представьте, что вы работаете в команде, и вам нужно сделать код понятным для всех участников.
  // Перепишите следующий код, используя понятные и логичные имена переменных и функций:
  
  // function x(a, b) {
  //   let c = a * b;
  //   return c;
  // }
  // let d = x(5, 10);
  
  
  function multiplication(operand1, operand2) {
    let value = operand1 * operand2;
  
    return value;
  }
  
  let value1 = multiplication(5, 10);
  
  
  
  
  // 3 задание
  
  // Убедитесь, что в коде используется единый стиль оформления. В следующем коде присутствуют смешанные стили кавычек,
  // разное использование var, let, и const, а также различное форматирование объектов и массивов. Исправьте код:
  
  // let items = ["apple", 'banana', "orange"];
  // let price = { apple: 1, banana: 2, orange: 3 };
  // const total = price['apple'] + price["banana"] + price.orange;
  
  // function calculateTotal(items) {
  //   return items.reduce(function (total, item) { return total + item.price; }, 0);
  // }
  
  
  const items = [
    "apple",
    "banana",
    "orange",
  ];
  
  const price = {
    apple: 1,
    banana: 2,
    orange: 3,
  };
  
  const total = price["apple"] + price["banana"] + price["orange"];
  
  function calculateTotal(items) {
    return items.reduce(function (total, item) {
      return total + item.price;
    }, 0);
  }
  // второй вариант функции:
  // function calculateTotal(items) {
  //   return items.reduce((total, item) => total + item.price, 0);
  // }
  
  
  
  
  // 4 задание
  
  // Создайте функцию validateForm, которая принимает объект формы с полями name, email и password.
  // Она должна выполнять проверки для каждого поля. Если какое-то поле не заполнено или содержит неверные данные,
  // функция должна сразу возвращать ошибку, используя guard expressions. Если все данные верны,
  // функция должна возвращать сообщение "Форма успешно отправлена".
  
  const user = {
    name: "Anna",
    email: "anyakrivosheeva@gmail.com",
    password: "qwerty123",
  }
  
  function validateForm(form) {
    if (!form.name) {
      return alert("Имя обязательно для заполнения!");
    }
  
    if (!form.email.includes('@')) {
      return alert("Заполните пожалуйста Email корректно!");
    }
  
    if (!form.password || form.password.length < 6) {
      return alert("Пароль должен быть не короче 6 символов");
    }
  
    return alert("Форма успешно отправлена");
  }
  
  validateForm(user);
  
  
  
  // регулярные выражения для проверки полей
  
  //  /^[^\s@]+@[^\s@]+\.[^\s@]+$/  - для проверки Email
  //  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //
  // /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/ - для проверки пароля на сложность
  // минимум 6 символов
  // хотя бы одна заглавная буква
  // хотя бы одна строчная буква
  // хотя бы одна цифра
  // хотя бы один спецсимвол (например, !@#$%^&*)
  // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
  
  // /^[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/ - для проверки пароля на недопустимые символы
  // Пример: допустим, я хочу разрешить только такие символы:
  // Буквы (латинские: A–Z, a–z)
  // Цифры: 0–9
  // Спецсимволы: !@#$%^&*()_+-=
  // const allowedCharsRegex = /^[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/;
  
  
  