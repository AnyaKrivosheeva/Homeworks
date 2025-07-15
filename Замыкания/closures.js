// 1. Напиши функцию, которая создает и возвращает другую функцию. 
// Внутренняя функция должна иметь доступ к переменной, объявленной во внешней функции, даже после завершения внешней функции;

function createCounter() {
    let score = 0;

    return function () {
        score++;
        return score;
    };
};

const counter1 = createCounter();

console.log(counter1()); //1
console.log(counter1()); //2
console.log(counter1()); //3

const counter2 = createCounter();

console.log(counter2()); //1

/////////////////////////////////////

function createGreeter(userName) {
    const greetings = {
        en: "Hello",
        ru: "Привет",
        es: "Hola",
        de: "Hallo",
        fr: "Bonjour",
    };

    return function (languageCode) {
        const greeting = greetings[languageCode] || "Hi";
        return console.log(`${greeting}, ${userName}!`);
    };
};

const greetAnya = createGreeter("Anya");
const greetAnatoly = createGreeter("Anatoly");

greetAnya("es");  // Hola, Anya!
greetAnatoly("fr");  // Bonjour, Anatoly!


// 2. Реализуй пример с несколькими вложенными функциями, 
// где каждая функция использует переменные из своего собственного и внешних лексических окружений;

function createGreeting(eventName) {
    const greetingTemplates = {
        birthday: {
            en: 'Happy birthday,',
            ru: 'С днём рождения,',
            es: '¡Feliz cumpleaños,',
            fr: 'Joyeux anniversaire,',
        },
        new_year: {
            en: 'Happy New Year,',
            ru: 'С Новым годом,',
            es: 'Feliz año nuevo,',
            fr: 'Bonne année,',
        },
        graduation: {
            en: 'Congratulations on your graduation,',
            ru: 'Поздравляю с выпуском,',
            es: '¡Felicitaciones por tu graduación,',
            fr: 'Félicitations pour votre diplôme,',
        }
    };
    return function (personName) {
        return function (languageCode) {
            const event = greetingTemplates[eventName];
            if (!event) {
                console.log('Unknown data');
                return;
            }
            const greet = event[languageCode];
            if (!greet) {
                console.log('Unknown data');
                return;
            }
            console.log(`${greet} ${personName}!`);
        };
    };
};

const greetBirthday = createGreeting('birthday');
const greetNewYear = createGreeting('new_year');
const greetGraduation = createGreeting('graduation');

greetBirthday('Anna')('fr');  //Joyeux anniversaire, Anna!
greetNewYear('Daria')('es');  //Feliz año nuevo, Daria!
greetGraduation('Никита')('ru');  //Поздравляю с выпуском, Никита!
greetBirthday('Olga')('ja');  // Unknown data


/////////

function createCalculator(taxPercent) {
    return function (discountPercent) {
        return function (basePrice) {
            const priceWithDiscount = basePrice - (basePrice * discountPercent / 100);
            const finalPrice = priceWithDiscount + (priceWithDiscount * taxPercent / 100);

            console.log(`Final price: ${finalPrice}`);
        };
    };
};

const tax13 = createCalculator(13); // налог 13%

tax13(20)(1000); // передаем в аргументы процент скидки 20% и исходную цену 1000р
// Final price: 904



// 3*. Тебе нужно написать функцию для вычисления чисел Фибоначчи с использованием цикла и кэширования.
// Функция должна возвращать другую функцию, которая принимает число `n` и возвращает `n`-е число Фибоначчи.
// Внутренняя функция должна использовать кэширование для хранения уже вычисленных значений чисел Фибоначчи.

function createFibonacciCalculator() {        // создаем внешнюю функцию 
    let fibonacciNumbers = [0, 1,];  // создаем наш кэш - массив в котором будут храниться вычисленные значения(сразу добавляем два известных числа)

    return function (n) {     // внешняя функция возвращает функцию, которая принимает параметр n - по сути номер числа Фибоначчи который надо вычислить
        if (fibonacciNumbers[n] !== undefined) {  // добавляем проверку на то существует ли уже такое значение в кэше
            return fibonacciNumbers[n];           // если есть то сразу возвращаем
        };
        for (let i = fibonacciNumbers.length; i <= n; i++) {   // в ином случае запускаем цикл for: начинаем с первого невычисленного значения и с помощью условия заставляем цикл работать пока не дойдем до нужного значения n
            fibonacciNumbers[i] = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];  // на каждой итерации заносим в массив результат вычисления по классической формуле Фибоначчи
        }
        return fibonacciNumbers[n];  // и из функции возвращаем запрашиваемое значение(теперь оно точно есть в массиве)
    };
};

const fibonacci = createFibonacciCalculator();

console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(5)); // 5
console.log(fibonacci(10)); // 55
console.log(fibonacci(50)); // 12586269025 
console.log(fibonacci(100)); // 354224848179262000000
// теперь в нашем кэше содержатся значения до 100 индекса
// и если мы запросим следующее значение:
console.log(fibonacci(65)); //