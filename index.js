//Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел
function getRandomArray(length, min, max) {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * (max - min) + min));
    }
    return arr;
}

console.log(getRandomArray(15, 1, 100));

//Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів
function getModa(...numbers) {
    let obj = {};
    let maxCount = null;
    let showNumber = null;
    numbers.map(function(item, i, numbers){
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
    console.log(`Число ${showNumber} : Повторюється ${maxCount} рази`);
}


getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);



//Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів.

function getAverage(...numbers) {
    let i = 0;
    let result = null;
    if(Number.isInteger(numbers[i])) {
            let sum = numbers.reduce((a, b) => a + b, 0);
            result = sum / numbers.length
        }
    console.log(result);
    }
    


getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);


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
    let numberZero = null;
    numbers.map(function(item, i, numbers){
        if(item > 0) {
            numberZero += 1;
        }
        console.log(numberZero);
    })
}

countPositiveNumbers(-1, -2, 4, 7, -1)