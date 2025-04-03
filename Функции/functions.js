// 4. Напиши функцию, которая ищет минимальное и максимальное значение в массиве;

const arr = [3, 1, 4, 1, 5, 9, 2, 6, -1];

// первый способ решения задачи
function findMinMax(arr) {
    const arr2 = arr.sort((a, b) => a - b);  //сортируем в порядке возрастания значений
    console.log(arr2);
    let min = arr2[0];                       // таким образом минимальное значение займет место в массиве с индексом 0
    let max = arr2[arr2.length - 1];         // а максимальное значение займет место в конце массива с индексом равным длине массива - 1
    return [min, max];
}

console.log(findMinMax(arr));  // [-1, 9]


// второй способ решения задачи
function findMinMax(arr) {
    if (arr.length === 0) {    // Проверка на пустой массив
        return [null, null];
    }

    let minValue = arr[0];   //3  Присваиваем переменным minValue и maxValue значение из массива под индексом 0
    let maxValue = arr[0];   //3

    arr.forEach((num) => {            // с помощью метода .forEach() перебираем массив arr, сравнивая minValue и maxValue(а по сути первый элемент массива)
        if (num < minValue) {         // с каждым элементом массива последовательно
            minValue = num;
        }
        if (num > maxValue) {
            maxValue = num;
        }
    });

    return [minValue, maxValue];        // возвращаем минимальное и максимальное значение из массива в виде нового массива
}

console.log(findMinMax(arr));     //  [-1, 9]



