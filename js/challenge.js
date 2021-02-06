
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const heartButton = document.getElementById('heart')
const likesContainer = document.querySelector('.likes')
const ulLikes = document.getElementsByClassName("likes")[0];
const commentsContainer = document.getElementById("list")
const form = document.getElementById("comment-form")
const pauseButton = document.getElementById("pause")
const counter = document.getElementById('counter');
let counterNumber = parseInt(counter.innerText)
let likesCounter = 0

plusButton.addEventListener('click', incrementCounter)
minusButton.addEventListener('click', decrementCounter)
heartButton.addEventListener('click', displayLikes)
form.addEventListener('submit', displayComments)
pauseButton.addEventListener('click', pause);


tickerId = window.setInterval(function(){
    incrementCounter(),
    likesZero()
}, 1000)

function pause() {
    if (pauseButton.id==="pause"){
        clearInterval(tickerId);
        disableOrEnableButtons(true);
        PauseOrResume("resume");
    } else {
        tickerId = window.setInterval(function(){
            incrementCounter(),
            likesZero()
        }, 1000)
        disableOrEnableButtons(false);
        PauseOrResume("pause");
    }
}

function disableOrEnableButtons(bool) {
    plusButton.disabled = bool
    minusButton.disabled = bool
    heartButton.disabled = bool
}

function PauseOrResume(string) {
    pauseButton.innerText = string;
    pauseButton.id = string;
}

function likesZero() {
    likesCounter = 0
}

function incrementCounter() {
    counterNumber += 1;
    counter.innerText = counterNumber;
}

function decrementCounter() {
    counterNumber -= 1;
    counter.innerText = counterNumber;
}

function displayLikes() {
    let currentNumber = parseInt(document.getElementById("counter").innerText, 10)

    if (document.getElementById(`like-${currentNumber}`)){
        const li = document.getElementById(`like-${currentNumber}`)
        li.value = parseInt(li.value, 10) + 1
        li.innerText= `${currentNumber}'s like Counter: ${li.value}`
    } else {
        const li = document.createElement('li')
        li.innerText = `${currentNumber}'s like Counter: 1`
        li.value = 1
        li.id = `like-${currentNumber}`
        ulLikes.appendChild(li)
    }
}

function displayComments(e) {
    e.preventDefault()

    const p = document.createElement('p')

    p.innerText= `comment: ${e.target["comment"].value}`
    commentsContainer.appendChild(p)
    form.reset()
}






