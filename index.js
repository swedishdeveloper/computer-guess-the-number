//Bot setting
const botSettings = { guessSpeed: 750 /*Milliseconds*/, startNumber: 500, minNumber: 100, maxNumber: 1000, debug: true }

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
        document.getElementsByTagName("button")[x].disabled = true
    }
    document.getElementById('before-start').style.display = 'none'
    document.querySelector('main').style.display = 'block'

    minGuess = botSettings.minNumber
    maxGuess = botSettings.maxNumber
    botGuessNumber = botSettings.startNumber
    correctGuess = getRandomInt()
    if (botGuessNumber > 0) {
        botGuessNumber++
    }
    botGuess()
    botInterval = setInterval(botGuess, botSettings.guessSpeed)
}

function botGuess() {
    botGuessesCount++
    setMessage(`Is it ${botGuessNumber}?`)
    if (botSettings.debug)
        console.log("bot guessing on: " + botGuessNumber + " - the correct answer is: " + correctGuess) //for debbuging :)
    if (botGuessNumber == correctGuess) {
        clearInterval(botInterval)
        setMessage(`Correct!! ${botGuessNumber} guessess needed: ${botGuessesCount}`)
    }
    else {
        if (botGuessNumber < correctGuess) {
            minGuess = botGuessNumber
            if (botSettings.debug)
                console.log("bot guessed too low") //debug
        }
        else {
            maxGuess = botGuessNumber
            if (botSettings.debug)
                console.log("bot guessed too high") //debug
        }
        botGuessNumber = (maxGuess + minGuess) / 2
        botGuessNumber = Math.floor(botGuessNumber)
    }
}

function getRandomInt() {
    return Math.floor(Math.random() * (Math.floor(maxGuess) - Math.ceil(minGuess) + 1)) + Math.ceil(minGuess)
}

document.getElementById('too-low-btn').addEventListener('click', function () {
    // Vad ska hända när man tryckt too low?
    minGuess = guess
    guess = getRandomInt()
    setMessage(`Is it ${guess}?`)
})

document.getElementById('start-btn').addEventListener('click', start)
document.getElementById('start-bot-btn').addEventListener('click', startBot)