//Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел
function getRandomArray(length) {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(randomNumber(1, 100));
        randomNumber()
    }
    return arr;
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

console.log(getRandomArray(15));

//Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів
function getModa(...numbers) {
    let obj = {};
    let maxCount = null;
    let showNumber = null;
    numbers.forEach(function(item, i){
        if(obj[item]) {
            obj[item] = obj[item] + 1;
        } else {
            obj[item] = 1;
        }
        
    }) 
    for(let key in obj) {
        let count = obj[key]
        if(count > maxCount) {
            maxCount = count;
            showNumber = key;
        }
    }
    return `Число ${showNumber} : Повторюється ${maxCount} рази`;
}

console.log(getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));




//Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів.

function getAverage(...numbers) {
    let result = 0;
    for(let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return Math.trunc(result / numbers.length);

    }
    
    

console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));



//Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції

function filterEvenNumbers(...numbers) {
    let result = numbers.filter(newArr);

    function newArr(item) {
        return item % 2 === 0;
    }
    return result;
}

console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));







//Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0

function countPositiveNumbers(...numbers) {
    const result = numbers.filter(item => item > 0)
    return result;
}

console.log(countPositiveNumbers(-1, -2, 4, 7, -1));
