/*
1 - array numeri casuali
2 - collego numeri html
3 - mostro i numeri per 30 secondi
4 - inserisco numeri
5 - verifico se i numeri inseriti sono inseriti 
6 - stampo risultati
 */

const numRandom = [];

while (numRandom.length < 5) {
    const num = randomNum(1,99);
    if (! numRandom.includes(num)) {
        numRandom.push(num);
    }
 }

document.getElementById('display').innerHTML = numRandom;






/*funzioni */

function randomNum(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
} 