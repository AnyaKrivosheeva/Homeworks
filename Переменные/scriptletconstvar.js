let price = 100;
price = 150;

console.log(price);  // В консоли увидим значение: 150 , тк мы присвоили новое значение переменной price, объявленной с помощью ключевого слова let.


const price2 = 200;
price2 = 250;

console.log(price2);  /*В консоли мы увидим ошибку: Uncaught TypeError: Assignment to constant variable.  Так как мы не можем переопределять 
                        значения переменных, записанных с помощью const.*/




let x = 1;
let x = 2;      // Что мы увидим в консоли:  Uncaught SyntaxError: Identifier 'x' has already been declared

const y = 3;
const y = 4;    // Что мы увидим в консоли:  Uncaught SyntaxError: Identifier 'y' has already been declared

// Ошибка происходит из-за того, что невозможно повторно объявить переменную, объявленную с помощью let и const, в одной и той же области видимости.