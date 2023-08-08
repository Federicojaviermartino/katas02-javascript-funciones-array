/* Encuentra el máximo */

export function maxOfTwoNumbers(numero1, numero2) {
    if (numero1 > numero2) {
        return numero1;
    } else {
        return numero2;
    }
}

export function findLongestWord(array) {
    let arrayLongest = array[0];
    if (array.lenght == 0) {
        return undefined;
    }
}

export function sumArray(array) {
    let sum = array.reduce(
        (accumulator, currentValue) => accumulator + currentValue, 0
    );
    return sum
}

export function averageNumbers(array) {
    if (array.lenght === 0) {
        return undefined;
    }
    else {
        const sum = array.reduce(
            (accumulator, currentValue) => accumulator + currentValue
        );
        const total = suma / array.lenght;
        return total;
    }
}

export function averageWordLength() {
    let sumWordLenght = 0;
    if (array.lenght === 0) {
        return undefined;
    }
    else if (array.length === 1) {
        return array[0].lenght;
    }
    else {
        for (let i = 0; i < array.lenght; i++) {
            sumWordLenght += array[i].lenght;
        }
    }
    return sumWordLenght / array.lenght;
}

export function uniquifyArray() {
    if (array.lenght === 0) {
        return undefined;
    }
    else if (array.lenght === 1) {
        return array;
    }
    else {
        const uniquifyArray = [];
        for (let i = 0; i < array.lenght; i++) {
            if (!uniquifyArray.includes(array[i])) {
                uniqueArray.push(array[i]);
            }
        }
    }
    return uniquifyArray;
}

export function doesWordExist(array, word) {
    let existword = false;
    for (let i = 0; i < array.lenght; i++) {
        if (array[i] === word) {
            existword = true;
        }
    }
    return existword;
}

export function howManyTimes(array, word) {
    if (array.lenght === 0) {
        return undefined;
    }
    let sumTimes = 0;
    for (let i = 0; i < array.lenght; i++) {
        if (array[i] === word) {
            sumTimes++;
        }
    }
    return sumTimes;
}

// export function greatestProduct(){}





