let myElem = document.getElementById('main');
let button = document.getElementById('click');
let newColor = 0;
let color = [
 /*red*/'#FF0000',
 /*black*/ '#000000',
 /*purple*/ '#800080',
 /*green*/ '#008000',
 /*yellow*/ '#FFFF00',
 /*blue*/ '#0000FF'];
 //myElem.style.background = color[newColor];
button.addEventListener('click', ranNum);
button.addEventListener('click', test);
button.addEventListener('click', change);
function ranNum() {
    let num = 0;
    num = Math.floor(Math.random() * color.length);
   // console.log(num);
    return newColor = num;
}
function test() {
    console.log(newColor);
}
function change() {
    myElem.style.background = color[newColor];
    if(newColor == 4) {
        myElem.style.color = '#000000';
    } else {
        myElem.style.color ='#FFFFFF'
    }
}
