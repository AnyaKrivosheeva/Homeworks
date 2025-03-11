const num = 10;

if (num > 0) {
    console.log("Число положительное");
} else if (num === 0) {
    console.log("Число равно 0");
} else {
    console.log("Число отрицательное");
}


/* 
const userWeight = 65;
const userHeightInMeters = 1.68;

const indexBMI = userWeight / userHeightInMeters ** 2;

if (indexBMI >= 40) {
    console.log(indexBMI.toFixed(1), "Ожирение 3 степени");
} else if (indexBMI > 35) {
    console.log(indexBMI.toFixed(1), "Ожирение 2 степени");
} else if (indexBMI > 30) {
    console.log(indexBMI.toFixed(1), "Ожирение 1 степени");
} else if (indexBMI > 25) {
    console.log(indexBMI.toFixed(1), "Избыточная масса тела (предожирение)");
} else if (indexBMI > 18.5) {
    console.log(indexBMI.toFixed(1), "Норма");
} else if (indexBMI > 16) {
    console.log(indexBMI.toFixed(1), "Недостаточная (дефицит) масса тела");
} else {
    console.log(indexBMI.toFixed(1), "Выраженный дефицит массы тела");
}
*/


let weight = prompt("Введите ваш вес в Килограммах:");
let height = prompt("Введите ваш рост в Метрах(!):");

let bmi = weight / height ** 2;

function getCategory(bmi) {
    if (bmi >= 40) {
        return (bmi.toFixed(1), "Ожирение 3 степени");
    } else if (bmi > 35) {
        return (bmi.toFixed(1), "Ожирение 2 степени");
    } else if (bmi > 30) {
        return (bmi.toFixed(1), "Ожирение 1 степени");
    } else if (bmi > 25) {
        return (bmi.toFixed(1), "Избыточная масса тела (предожирение)");
    } else if (bmi > 18.5) {
        return (bmi.toFixed(1), "Норма");
    } else if (bmi > 16) {
        return (bmi.toFixed(1), "Недостаточная (дефицит) масса тела");
    } else {
        return (bmi.toFixed(1), "Выраженный дефицит массы тела");
    }
}

alert("Ваш ИМТ: " + bmi.toFixed(1) + " Категория: " + getCategory(bmi));




let month = Number(prompt("Введите номер месяца от 1 до 12:"));
let monthName;

switch (month) {
    case 1:
        monthName = "January";
        break;
    case 2:
        monthName = "February";
        break;
    case 3:
        monthName = "March";
        break;
    case 4:
        monthName = "April";
        break;
    case 5:
        monthName = "May";
        break;
    case 6:
        monthName = "June";
        break;
    case 7:
        monthName = "July";
        break;
    case 8:
        monthName = "August";
        break;
    case 9:
        monthName = "September";
        break;
    case 10:
        monthName = "October";
        break;
    case 11:
        monthName = "November";
        break;
    case 12:
        monthName = "December";
        break;
    default:
        monthName = "Doesn't exist!";
}

alert(monthName);





let faculty = prompt("Введи название твоего любимого факультета в Хогвартсе(Гриффиндор,Слизерин,Когтевран,Пуффендуй):");
let facultyDescription;

switch (faculty) {
    case "Гриффиндор":
    case "Gryffindor":
        facultyDescription = "Если ты выбрал Гриффиндор, значит, ты — студент, который не боится рисковать ради правильных целей. Ты обладаешь храбростью и решимостью, всегда готов встать на защиту слабых и бороться за справедливость,даже если это сопряжено с опасностью.Ты можешь быть лидером, который вдохновляет других своим примером. В твоем сердце горит пламя отваги, и ты всегда готов принимать участие в самых смелых приключениях.";
    break;
    case "Слизерин":
    case "Slytherin":
        facultyDescription = "Если ты выбрал Слизерин, значит, ты — студент с амбициями и стратегическим мышлением. Ты стремишься к величию и готов использовать все возможности для достижения своей цели. Ты умеешь манипулировать обстоятельствами и всегда на шаг впереди. Для тебя важны личные достижения и успехи, и ты готов преодолеть любые трудности, чтобы стать лидером. Хитрость, решительность и находчивость — твои сильные стороны.";
    break;
    case "Когтевран":
    case "Ravenclaw":
        facultyDescription = "Если ты выбрал Когтевран, значит, ты — студент, который ценит знания и интеллект. Ты всегда стремишься понять, как устроен мир, и не боишься задавать вопросы и искать новые ответы. Ты любишь учиться, разгадывать головоломки и искать творческие решения. Мудрость и рассудительность для тебя важнее всего, и ты стремишься развивать свой ум и получать знания во всем, что тебя окружает.";
    break;
    case "Пуффендуй":
    case "Hufflepuff":
        facultyDescription = "Если ты выбрал Пуффендуй, значит, ты — студент с добрым сердцем и преданным другом. Ты честен и трудолюбив, и всегда готов помочь окружающим. Ты веришь в командную работу и ценишь дружбу, верность и честность. Твои усилия не всегда заметны, но твоя упорность и забота о других делают тебя незаменимым человеком. Ты не ищешь славы, но всегда готов работать для общего блага и поддерживать тех, кто рядом.";
    break;
    default:
        facultyDescription = "Doesn't exist!";
}

alert(facultyDescription);









