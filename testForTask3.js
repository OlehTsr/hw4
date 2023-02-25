import {
    getIteratorBySentences,
    getIteratorByVowels,
    getIteratorByWords,
    getIteratorOverEverySecondLetter
} from "./task3.js";
import {assertEquality, convertIteratorToString} from "./asserts.js";

function testFunctionGetIteratorOverEverySecondLetter(){
    console.log("\nTest function getIteratorOverEverySecondLetter:")
    assertEquality(convertIteratorToString(getIteratorOverEverySecondLetter({"text": "word"})), "od");
    assertEquality(convertIteratorToString(getIteratorOverEverySecondLetter({"text": "Hello World"})), "elWrd");
    assertEquality(convertIteratorToString(getIteratorOverEverySecondLetter({"text": "First sentence. Second sentence! Third sentence... Damn!"})), "issnecScnsnecTidsnecDm");
}
function testFunctionGetIteratorByWords(){
    console.log("\nTest function getIteratorByWords:")
    assertEquality(convertIteratorToString(getIteratorByWords({"text": "word"})),"word");
    assertEquality(convertIteratorToString(getIteratorByWords({"text": "Hello World"})), "HelloWorld");
    assertEquality(convertIteratorToString(getIteratorByWords({"text": "First sentence. Second sentence! Third sentence... Damn!"})),"FirstsentenceSecondsentenceThirdsentenceDamn");
}

function testFunctionGetIteratorBySentences(){
    console.log("\nTest function getIteratorBySentences");
    assertEquality(convertIteratorToString(getIteratorBySentences({"text": "word"})),"word");
    assertEquality(convertIteratorToString(getIteratorBySentences({"text": "Hello World"})), "Hello World");
    assertEquality(convertIteratorToString(getIteratorBySentences({"text": "First sentence. Second sentence! Third sentence... Damn!"})),"First sentenceSecond sentenceThird sentenceDamn");
}

function testFunctionGetIteratorByVowels(){
    console.log("\nTest function getIteratorByVowels:");
    assertEquality(convertIteratorToString(getIteratorByVowels({"text": "word"})),"o");
    assertEquality(convertIteratorToString(getIteratorByVowels({"text": "Hello World"})), "eoo");
    assertEquality(convertIteratorToString(getIteratorByVowels({"text": "First sentence. Second sentence! Third sentence... Damn!"})),"ieeeeoeeeieeea");
}
export function testsForTask3() {
    console.log("\nTests for task3:")
    testFunctionGetIteratorOverEverySecondLetter();
    testFunctionGetIteratorByWords();
    testFunctionGetIteratorBySentences();
    testFunctionGetIteratorByVowels();
}