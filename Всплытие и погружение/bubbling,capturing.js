// 1. Создай три вложенных элемента (например, `div` внутри `div` внутри `div`). 
// Назначь обработчики событий для каждого из них и проследи 
// за последовательностью вызовов при клике на внутренний элемент с помощью console.log();

document.getElementById('grand-parent').addEventListener('click', () => {
    console.log('Grand parent clicked');
});
document.getElementById('parent').addEventListener('click', () => {
    console.log('Parent clicked');
});
document.getElementById('child').addEventListener('click', () => {
    console.log('Child clicked');
});

// при клике на самый глубоко расположенный элемент с id = 'child' последовательность вызовов будет следующая:

// Child clicked
// Parent clicked
// Grand parent clicked

//Таким образом мы демонстрируем "всплытие" событий - когда событие запускается сначала на одном элементе(срабатывают обработчики), а затем
//"всплывает" по DOM-дереву к родительским элементам и запускает события на них(если на них так же есть обработчики, иначе срабатывать будет нечему).





// 2. Напиши код, который останавливает всплытие события на среднем элементе из предыдущего задания;

//для остановки всплытия событий на среднем элементе нужно добавить в вызов метод: event.stopPropagation(),
// с помощью него мы можем предотвратить выполнение обработчиков на родительских элементах.

// код будет выглядеть следующим образом:

// document.getElementById('grand-parent').addEventListener('click', () => {
//     console.log('Grand parent clicked');
// });
// document.getElementById('parent').addEventListener('click', (event) => {
//     console.log('Parent clicked');
//     event.stopPropagation();
// });
// document.getElementById('child').addEventListener('click', () => {
//     console.log('Child clicked');
// });

//теперь при клике на элемент child вызовы не поднимутся выше среднего элемента - parent и последовательность
//будет следующая:

// Child clicked
// Parent clicked





// 3. Создай форму с несколькими полями ввода и кнопкой отправки.
//  Реализуй делегирование события, например, валидации каждого поля ввода при его изменении.
//  Пусть это будет простое условие, например, длина строки не более 20 символов.

const tooltip = document.getElementById('tooltip');

document.getElementById('form').addEventListener('input', (event) => {
    const maxLength = 20;
    if (event.target.tagName === 'INPUT' && event.target.value.length > maxLength) {
        event.target.classList.add('error');
        tooltip.style.display = 'block';
    } else {
        event.target.classList.remove('error');
        tooltip.style.display = 'none';
    }
});

