const inputed = document.querySelector(".translation__input");
const screen = document.querySelector(".translation__translated");
const button = document.querySelector(".translation__button");

const englishToMorse = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    "0":"-----",
    "1":".----",
    "2":"..---",
    "3":"...--",
    "4":"....-",
    "5":".....",
    "6":"-....",
    "7":"--...",
    "8":"---..",
    "9":"----.",
    " ":"/",
    "!":"-.-.--",
    ".":".-.-.-",
    ",":"--..--",
    "?":"..--..",
    '"':'.-..-.',
    "&":".-...",
    "(":"-.--.",
    ")":"-.--.-",
    "/":"-..-.",
    "@":".--.-.",
    ":":"---...",
    "'":".----.",
    "+":".-.-.",
    "=":"-...-"
};

const translateToMorse = (str) => {
    let string = str.toString();
    //English to Morse
    if (/[a-z0-9|!,?"&()@:'+=]/i.test(string) || string == " ") {
        let stringArray = string.toUpperCase().split("");
        let result = stringArray.map((letter) => {
            return englishToMorse[letter];
        });
        return result.join(" ");
        
    //Morse to English
    } else {
        if (string.includes("_")) {
            //replaces _ with -
            string = string.replaceAll("_", "-");
        }
        const morseToEnglish = (englishToMorse, string) => {
            return Object.keys(englishToMorse).find(morse => englishToMorse[morse] === string);
        }
        let stringArray = string.split(" ");
        let result = stringArray.map((morse) => {
            return morseToEnglish(englishToMorse, morse);
        });
        return result.join("");
    };
};

button.addEventListener("click", () => {
    return screen.innerHTML = translateToMorse(inputed.value)
});


