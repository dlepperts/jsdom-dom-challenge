/*document.querySelector("button").addEventListener("click", handleClick);*/

let counter = document.getElementById('counter');

function addToCounter() {
    counter = document.getElementById('counter') + 1;
 }
 setInterval(addToCounter, 1000);
