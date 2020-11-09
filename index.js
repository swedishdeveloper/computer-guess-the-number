const MAX_NUMBER = 100
const MIN_NUMBER = 0
const results = []
let guess
let minGuess = 0
let maxGuess = 100

function getRandomInt() {
    return Math.floor(Math.random() * (Math.floor(maxGuess) -
        Math.ceil(minGuess) + 1)) + Math.ceil(minGuess)
}

document.getElementById('too-high-btn').addEventListener('click', function() {
    // Vad ska hända när man tryckt too high?

    maxGuess = guess
    guess = Math.floor((maxGuess) / 2)

    setMessage(`Is it ${guess}?`)
})

document.getElementById('too-low-btn').addEventListener('click', function() {
    // Vad ska hända när man tryckt too low?

    minGuess = guess
    guess = Math.floor((minGuess + 100) / 2)

    setMessage(`Is it ${guess}?`)
})

document.getElementById('is-correct-btn').addEventListener('click', function() {
    setMessage("Woho! :)")
})

function setMessage(msg) {
    document.getElementById('message').innerText = msg
}

function start() {
    document.getElementById('before-start').style.display = 'none'
    document.querySelector('main').style.display = 'block'

    guess = 50
    minGuess = MIN_NUMBER
    maxGuess = MAX_NUMBER

    setMessage(`Is it ${guess}?`)
}

document.getElementById('start-btn').addEventListener('click', start);