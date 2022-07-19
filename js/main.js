/*
1 - array numeri casuali
2 - collego numeri html
3 - mostro i numeri per 30 secondi
4 - inserisco numeri
5 - verifico se i numeri inseriti sono inseriti 
6 - stampo risultati
 */


//1
const numRandom = [];

while (numRandom.length < 5) {
    const num = randomNum(1,99);
    if (! numRandom.includes(num)) {
        numRandom.push(num);
    }
 }

const displayDom = document.getElementById('display').innerHTML = numRandom;
const textDom = document.getElementById('text')

displayDom.innerHTML = numRandom;

2//

setTimeout(timeDom, 30000);

setTimeout(numInput, 31000);






/*funzioni */

function randomNum(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

function timeDom() {
    displayDom.innerHtml = '';
    textDom.innerHTML = 'Quali erano i 5 numeri?'
} 

function prova(){
    const prova= prompt('prova');
     
}

function numInput() {
    const num = [];
    while (num.length < 5) {
        const numInput = prompt('inserisci numeri');
        if (! num.includes(numInput)) {
            num.push(numInput);
        }
    }
    console.log(num);

}