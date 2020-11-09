const MAX_NUMBER = 100
const MIN_NUMBER = 0
const results = []
let minGuess = MIN_NUMBER
let maxGuess = MAX_NUMBER
let guess
let correctGuess

function getRandomInt() {
    return Math.floor(Math.random() * (Math.floor(maxGuess) -
        Math.ceil(minGuess) + 1)) + Math.ceil(minGuess)
}

document.getElementById('too-high-btn').addEventListener('click', function () {
    // Vad ska hända när man tryckt too high?
    maxGuess = guess
    guess = getRandomInt()
    setMessage(`Is it ${guess}?`)
})

document.getElementById('too-low-btn').addEventListener('click', function () {
    // Vad ska hända när man tryckt too low?
    minGuess = guess;
    guess = getRandomInt();
    setMessage(`Is it ${guess}?`)
})

document.getElementById('is-correct-btn').addEventListener('click', function () {
    //Gör en kontroll för att se om användaren försöker lura datorn.
    setMessage(guess != correctGuess ? `Nope! Is it ${guess}?` : "Rätt!!")
})

function setMessage(msg) {
    document.getElementById('message').innerText = msg
}

function start() {
    document.getElementById('before-start').style.display = 'none'
    document.querySelector('main').style.display = 'block'
    guess = 50 //datorn börjar gissa på 50!
    correctGuess = prompt("Snälla, säg till mig, vilket tal tänker du på?")
    setMessage(`Is it ${guess}?`)
}

document.getElementById('start-btn').addEventListener('click', start);