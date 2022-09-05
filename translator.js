import { englishToMorse } from "./english-morse-alphabet";

let inputed = "hello my name is =5"

export const translateToMorse = (str) => {
    let string = str.toString();
    //English to Morse
    //if string matches any letter from within [] (i = non case-sesnsitive)
    if (/[a-z0-9|!,?"&()@:'+=]/i.test(string) || string == " ") {
        //Creates array of singular characters in lowercase
        let stringArray = string.toUpperCase().split("");
        //Creates map array of the values according to the characters(keys) 
        let result = stringArray.map((letter) => {
            return englishToMorse[letter];
        });
        return result.join(" ");
        
    //Morse to English
    } else {
        const morseToEnglish = (englishToMorse, string) => {
            //.find - string is equialent to value
            return Object.keys(englishToMorse).find(morse => englishToMorse[morse] === string);
        }
        //Letters in morse are seperated by a space
        let stringArray = string.split(" ");
        //Creates map array of the values according to the morse letters(values) 
        let result = stringArray.map((morse) => {
            return morseToEnglish(englishToMorse, morse);
        });
        return result.join("");
    };
};

console.log(translateToMorse(inputed));