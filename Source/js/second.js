// импортируем слова из файла
import { WORDS } from "js/words.js";

// количество попыток
const NUMBER_OF_GUESSES = 6;
// сколько попыток осталось
let guessesRemaining = NUMBER_OF_GUESSES;
// текущая попытка
let currentGuess = [];
// следующая буква
let nextLetter = 0;
// загаданное слово
let rightGuessString = WORDS[Math.floor(Math.random() * WORDS.length)]
// на всякий случай выведем в консоль загаданное слово, чтобы проверить, как работает игра
console.log(rightGuessString)
