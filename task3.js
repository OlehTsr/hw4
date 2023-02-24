export function getIteratorOverEverySecondLetter(object) {
  if (typeof object === "object") {
    if ("text" in object && typeof object.text === "string") {
      object[Symbol.iterator] = function () {
        let symbol = -1;
        let text = this["text"];
        let arrayOfSkippedSymbols = [" ", ".", ",", "!", "?", "'", "`","-",";",":"];
        return {
          next() {
            symbol += 2;
            if (symbol < text.length) {
              while (arrayOfSkippedSymbols.includes(text[symbol])) {
                symbol++;

                if (symbol >= text.length) {
                  return {done: true};
                }
              }

              return {done: false, value: text[symbol]};
            } else return {done: true};
          }
        }
      }
      return object;
    } else return 0;

  } else return 0;

}

export function getIteratorByWords(object) {
  if (typeof object === "object") {
    if ("text" in object && typeof object.text === "string") {
      object[Symbol.iterator] = function () {
        let symbol = 0;
        let text = this["text"];
        let arrayOfSkippedSymbols = [".", ",", "!", "?", "—", ";", ":"];
        return {
          next() {

            let word = '';
            while (symbol < text.length) {
              while (arrayOfSkippedSymbols.includes(text[symbol])) {
                symbol++;

                if (symbol >= text.length) {
                  if (word) return {done: false, value: word};
                  else return {done: true};
                }
              }
              if (text[symbol] === " ") {
                if (word) {
                  symbol++;
                  return {done: false, value: word};
                } else symbol++;
              } else {

                word += text[symbol++];
              }
            }
            if (word) return {done: false, value: word};
            else return {done: true};
          }
        }
      }
      return object;
    } else return 0;
  } else return 0
}

export function getIteratorBySentences(object) {
  if (typeof object === "object") {
    if ("text" in object && typeof object.text === "string") {
      object[Symbol.iterator] = function () {
        let symbol = 0;
        let text = this["text"];
        let arrayOfSkippedSymbols = [".", ",", "!", "?"];
        return {
          next() {

            let sentence = '';
            while (symbol < text.length) {
              if (arrayOfSkippedSymbols.includes(text[symbol])) {
                if (sentence) {
                  symbol++;
                  return {done: false, value: sentence};
                } else symbol++;
              } else {
                if (!sentence && text[symbol] === " ") {
                  symbol++;
                } else sentence += text[symbol++];
              }
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