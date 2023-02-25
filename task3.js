export function getIteratorOverEverySecondLetter(object) {
  if (typeof object === "object") {
    if ("text" in object && typeof object.text === "string") {
      object[Symbol.iterator] = function () {
        let symbol = 1;
        let returnedSymbol;
        let text = this["text"];
        let arrayOfSkippedSymbols = [" ", ".", ",", "!", "?", "'", "`", "-", ";", ":"];
        return {
          next() {
            while (symbol < text.length) {
              if (!arrayOfSkippedSymbols.includes(text[symbol]) && typeof text[symbol] !== "undefined") {
                returnedSymbol = text[symbol]
                symbol += 2
                return {done: false, value: returnedSymbol};
              } else symbol++;
            }
            return {done: true};
          }
        }
      }
      return object;
    }
  }
}
let a = getIteratorBySentences({"text": "   fad sfg. fdsaf"})
for (let x of a) {
  console.log(x)
}
export function getIteratorByWords(object) {
  if (typeof object === "object") {
    if ("text" in object && typeof object.text === "string") {
      object[Symbol.iterator] = function () {
        let symbol = 0;
        let text = this["text"];
        let arrayOfSkippedSymbols = [" ", ".", ",", "!", "?", "—", ";", ":"];
        return {
          next() {
            let word = '';
            while (symbol < text.length){
              if(arrayOfSkippedSymbols.includes(text[symbol])){
                if(word) return {done: false, value: word};
                else symbol++;
              }
              else word += text[symbol++];
            }
            if(word) return {done: false, value: word};
            return {done: true};
          }
        }
      }
      return object;
    }
  }
}

export function getIteratorBySentences(object) {
  if (typeof object === "object") {
    if ("text" in object && typeof object.text === "string") {
      object[Symbol.iterator] = function () {
        let symbol = 0;
        let text = this["text"];
        let arrayOfSkippedSymbols = [".", "!", "?"];
        return {
          next() {
            let sentence = '';
            while (symbol < text.length) {
              if(arrayOfSkippedSymbols.includes(text[symbol])){
                if(sentence) return {done: false, value: sentence};
                else symbol++;
              }
              else (!sentence && text[symbol] === " ") ? symbol++ : sentence += text[symbol++];
            }
            if (sentence) return {done: false, value: sentence};
            else return {done: true};
          }
        }
      }
      return object;
    } else return 0;
  } else return 0;
}

export function getIteratorByVowels(object) {
  if (typeof object === "object") {
    if ("text" in object && typeof object.text === "string") {
      object[Symbol.iterator] = function () {
        let symbol = 0;
        let text = this["text"];
        let arrayOfVowels = ["a", "A", "e", "E", "y", "Y", "u", "U", "i", "I", "o", "O"];
        return {
          next() {
            while (symbol < text.length) {
              if (arrayOfVowels.includes(text[symbol])) {
                return {done: false, value: text[symbol++]};
              } else symbol++;
            }
            return {done: true};
          }
        }
      }
      return object;
    } else return 0;
  } else return 0;
}