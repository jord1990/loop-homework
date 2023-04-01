// ==========================================
// Opdracht 1. Maak een for loop die het volgende patroon in de terminal print:
// Verwachte uitkomsten:
// *
// **
// ***
// ****
// *****

// Tip: je kunt de .repeat() methode gebruiken om een karakter een n aantal keer te herhalen...
// Dit heb je nog niet geleerd, maar bekijk hiervoor dit MDN-artikel eens: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
// ==========================================

// loops through increasing i and therefore the number of repeats by 1 each loop
for (let i = 1; i <= 5; i++ ) {
    console.log('*'.repeat(i))
}



// ==========================================
// Opdracht 2. Maak een for-loop die 4 keer het woord "loop..." logt, en bij de laatste (vijfde) loop het woord "klaar!"
// Verwachte uitkomsten:
// loop...
// loop...
// loop...
// loop...
// klaar!
// ==========================================

for (let i = 0; i < 5; i++) {
    if (i < 4) {
        console.log('loop...')
    }
    else {
        console.log('klaar!')
    }
}



// ==========================================
// Opdracht 3: maak een for-loop die van 0 tot 9 loopt en de getallen 0 tot 9 logt.
// Echter, vanaf het getal 3 komt er een > voor ieder getal te staan, en vanaf het getal 6 komt er >> voor ieder getal te staan.
// Verwachte uitkomsten:
// 0
// 1
// 2
// > 3
// > 4
// > 5
// >> 6
// >> 7
// >> 8
// >> 9
// ==========================================

for (let i = 1; i <= 9; i++) {
    // if i is bigger than 5 it adds 2 arrows.
    if (i > 5) {
        console.log('>> ' + i)
    }
    // checks to see if its bigger than 2 before adding arrows this is second so any numbers bigger than 5 get >>.
    else if (i > 2) {
        console.log('> ' + i)
    }

    else {
        // transforms the number to a string to make it have the entire loop log strings
        console.log(i.toString())
    }
}



// ==========================================
// Opdracht 4 (BONUS): schrijf een for-loop die van 0 tot 100 loopt en de getallen print.
// Echter, voor veelvouden van 3 print je "Fizz" in plaats van het nummer, en voor veelvouden van 5 print je "Buzz".
// Voor getallen die zowel een veelvoud van 3 als van 5 zijn, print je "FizzBuzz"
// Verwachte uitkomsten:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz
// etc.
// ==========================================

for (let i = 1; i <= 100; i++) {

    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log('FizzBuzz')
    }


        // checks if divisable by 3
    else if (i % 3 === 0) {
            console.log('Fizz')
        }

    // checks if divisable by 5
    else if (i % 5 === 0) {
            console.log('Buzz')
        }

    // if not print i
    else {
        // converts i to string for visual reasons
            console.log(i.toString())
        }
}

