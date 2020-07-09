//Short Circuit Evaluation
//Stopping code executino as soon as possible

3 === 3 && false && 'chicken';

function isAdult() {
    if (age && age >= 18) {
        return true;
    } else {
        return false;
    }
}

function isAdult() {
    return age && age >= 18;
}

function countToFive(start) {
    for (let i = start; i <= 5; i++) {
        console.log(i);
    }
}

function countToFive(start) {
    start = start || 1;
    for (let i = start; i <= 5; i++) {
        console.log(i);
    }
}

function countToFive(start = 0) {
    for (let i = start; i <= 5; i++) {
        console.log(i);
    }
}

function greet(name) {
    name && console.log('Hi, ' + name + '!')
}

