const MAX_NUMBER = 100
const MIN_NUMBER = 0
const results = []
let minGuess = MIN_NUMBER
let maxGuess = MAX_NUMBER
let guess
let botGuessNumber
let correctGuess
let botInterval
let botGuessesCount = 0

document.getElementById('too-high-btn').addEventListener('click', function () {
    // Vad ska hända när man tryckt too high?
    maxGuess = guess
    guess = (maxGuess + minGuess) / 2
    guess = Math.floor(guess)
    setMessage(`Is it ${guess}?`)
})

document.getElementById('too-low-btn').addEventListener('click', function () {
    // Vad ska hända när man tryckt too low?
    minGuess = guess
    guess = (maxGuess + minGuess) / 2
    guess = Math.floor(guess)
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

function startBot() {
    //disables all buttons!
    for (let x = 0; x < document.getElementsByTagName("button").length; x++) {
        document.getElementsByTagName("button")[x].disabled = true;
    }
    document.getElementById('before-start').style.display = 'none'
    document.querySelector('main').style.display = 'block'
    guess = 50 //bot börjar gissa på 50!
    correctGuess = getRandomInt()
    setMessage(`Is it ${guess}?`)
    botGuessNumber = getRandomInt()
    if (botGuessNumber > 0)
        botGuessNumber++
    botInterval = setInterval(botGuess, 500)
}

function botGuess() {
    botGuessesCount++
    setMessage(`Is it ${botGuessNumber}?`)
    console.log("guessing on: " + botGuessNumber + " correct answer: " + correctGuess) //for debbuging :)
    if (botGuessNumber == correctGuess) {
        clearInterval(botInterval)
        setMessage(`Correct!! ${botGuessNumber} guessess needed: ${botGuessesCount}`)
    }
    else {
        if (botGuessNumber < correctGuess) {
            minGuess = botGuessNumber
        }
        else {
            maxGuess = botGuessNumber
        }
        botGuessNumber = (maxGuess + minGuess) / 2
        botGuessNumber = Math.round(botGuessNumber)
    }
}
//guess = getRandomInt()
document.getElementById('too-low-btn').addEventListener('click', function () {
    // Vad ska hända när man tryckt too low?
    minGuess = guess
    guess = getRandomInt()
    setMessage(`Is it ${guess}?`)
})

document.getElementById('start-btn').addEventListener('click', start)
document.getElementById('start-bot-btn').addEventListener('click', startBot)