import {
    getIteratorBySentences,
    getIteratorByVowels,
    getIteratorByWords,
    getIteratorOverEverySecondLetter
} from "./task3.js";
import {assertEquality, assertEqualityOfObjectsInArrays} from "./asserts.js";
function convertIteratorToString(iterator){
    let result = ""
    for(let iteration of iterator){
        result += iteration;
    }
    return result
}
function testFunctionGetIteratorOverEverySecondLetter(){
    console.log("\nTest function getIteratorOverEverySecondLetter:")
    assertEquality(convertIteratorToString(getIteratorOverEverySecondLetter({"text": "word"})), "od");
    assertEquality(convertIteratorToString(getIteratorOverEverySecondLetter({"text": "Hello World"})), "elWrd");
    assertEquality(convertIteratorToString(getIteratorOverEverySecondLetter({"text": "First sentence. Second sentence! Third sentence... Damn!"})), "issnecScnsnecTidsnecDm");
}
function testFunctionGetIteratorByWords(){
    console.log("\nTest function getIteratorByWords:")
    assertEqualityOfObjectsInArrays(convertIteratorToString(getIteratorByWords({"text": "word"})),"word");
    assertEquality(convertIteratorToString(getIteratorByWords({"text": "Hello World"})), "HelloWorld");
    assertEquality(convertIteratorToString(getIteratorByWords({"text": "First sentence. Second sentence! Third sentence... Damn!"})),"FirstsentenceSecondsentenceThirdsentenceDamn");
}

function testFunctionGetIteratorBySentences(){
    console.log("\nTest function getIteratorBySentences");
    assertEqualityOfObjectsInArrays(convertIteratorToString(getIteratorBySentences({"text": "word"})),"word");
    assertEquality(convertIteratorToString(getIteratorBySentences({"text": "Hello World"})), "Hello World");
    assertEquality(convertIteratorToString(getIteratorBySentences({"text": "First sentence. Second sentence! Third sentence... Damn!"})),"First sentenceSecond sentenceThird sentenceDamn");
}

function testFunctionGetIteratorByVowels(){
    console.log("\nTest function getIteratorByVowels:");
    assertEqualityOfObjectsInArrays(convertIteratorToString(getIteratorByVowels({"text": "word"})),"o");
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