// 1 задание
// В следующем коде несколько раз повторяются похожие операции. Проведите рефакторинг, чтобы избежать дублирования,
// используя функции или другие средства:

const product1 = { name: 'Product 1', price: 10 };
const product2 = { name: 'Product 2', price: 20 };
const total1 = product1.price * 1.2;
const total2 = product2.price * 1.2;
console.log('Total for Product 1:', total1);
console.log('Total for Product 2:', total2);

// рефакторинг

const products = [                            // создадим массив с продуктами, чтобы не создавать много новых переменных для них
  { name: 'Product 1', price: 10 },
  { name: 'Product 2', price: 20 },
];

function countTotal(product) {                                    // создадим функцию для подсчета total стоимости продукта
  return `Total for ${product.name}: ${product.price * 1.2}`;
};

console.log(countTotal(products[0]));            // в консоли делаем вызов функции, в качестве аргумента обращаемся к эл-ту массива по индексу
console.log(countTotal(products[1]));



function countTotals(array) {           // если нам нужно всегда выводить в консоль total всех продуктов(а не по вызову каждый),то можно добавить метод forEach в функцию
  array.forEach((product) => {
    console.log(`Total for ${product.name}: ${product.price * 1.2}`);
  });
}

countTotals(products);




// 2 задание
// Код ниже содержит сложные вложенные условия. Упростите его, чтобы улучшить читаемость и уменьшить вероятность ошибок:

user = {           // добавила пользователя для проверки кода
  isAdmin: true,
  isActive: true,
  age: 19,  // добавила для того, чтобы работал код, написанный до рефакторинга
  isAdult: true,
};


if (user.isAdmin) {
  if (user.isActive) {
    if (user.age > 18) {
      console.log('Access granted');
    }
  }
}

// рефакторинг

// я предполагаю, что можно просто убрать многоуровневую проверку и уместить ее в одну строку

if (user.isAdmin && user.isActive && user.isAdult) {   // нам необходимо чтобы выполнялись 3 условия для одобрения доступа в систему:
  console.log('Access granted');                       // пользователь - админ, статус - активный, возраст - взрослый(>=18)
}                                                      // вместо user.isAdult можно было оставить user.age >= 18, но мне показалось,что так удобнее



// 3 задание
// В следующей функции выполняется слишком много операций. Разделите её на несколько более коротких функций,
// чтобы улучшить читаемость и повторное использование кода:

function checkStock(item) {
  return Math.random() < 0.5;   // Возвращает рандомно true или false, это просто иммитация функции!
};

function processOrder(order) {
  // Валидация данных заказа
  if (!order.id || !order.items || order.items.length === 0) {
    console.log('Invalid order');
    return;
  }
  // Рассчет суммы
  let total = 0;
  for (let item of order.items) {
    total += item.price * item.quantity;
  }
  // Проверка наличия на складе
  for (let item of order.items) {
    if (!checkStock(item)) {
      console.log('Item out of stock:', item.name);
      return;
    }
  }
  // Выполнение заказа
  console.log('Order processed with total:', total);
}



// рефакторинг 

order = {
  id: 100500,
  items: [
    {
      name: "book1",
      price: 100,
      quantity: 1,
    },
    {
      name: "book2",
      price: 300,
      quantity: 1,
    },
    {
      name: "book3",
      price: 300,
      quantity: 1,
    },
  ],
};

function processOrder2(order) {

  let total = calculateTotal(order);                          // подсчет стоимости заказа + заносим значение в переменную               

  if (validationOrderData(order) && checkAvailability(order)) {       // если обе функции возвращают true(т.е заказ провалидирован и все товары в наличии),
    console.log('Order processed with total:', total);               // то обрабатываем и выполняем заказ
  }
};

function validationOrderData(order) {                                 // Функция валидации данных заказа
  if (!order.id || !order.items || order.items.length === 0) {
    console.log('Invalid order');
    return;
  }
  return true;
};

function calculateTotal(order) {               // Функция рассчета суммы (лучше было бы назвать countTotal, но в этом файле уже есть такая функция)
  let total = 0;
  for (let item of order.items) {
    total += item.price * item.quantity;
  };
  return total;
};

function checkAvailability(order) {                    // Функция проверки наличия на складе    
  for (let item of order.items) {
    if (!checkStock(item)) {
      console.log('Item out of stock:', item.name);
      console.log("Order can not be processed");
      return false;
    }
  }
  return true;
};

processOrder2(order);