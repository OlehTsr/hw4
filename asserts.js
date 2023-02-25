
export function assertEquality(firstValue, secondValue){
    if (firstValue === secondValue) console.log("  Test passed successfully");
    else console.log("  Error, Wrong result");
}




export function convertIteratorToString(iterator){
    let result = ""
    for(let iteration of iterator){
        result += iteration;
    }
    return result
}