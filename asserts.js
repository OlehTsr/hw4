
export function assertEquality(firstValue, secondValue){
    if (firstValue === secondValue) console.log("  Test passed successfully");
    else console.log("  Error, Wrong result");
}
export function assertEqualityOfArrays(firstArray, secondArray){
    if(firstArray.length === secondArray.length){
        for (let i = 0; i < firstArray.length; i++){
            if (!(firstArray[i] === secondArray[i])){
                console.log("  Error, Wrong result");
                return 0;
            }
        }
        console.log("  Test passed successfully");
    }
    else console.log("  Error, Wrong result");
}
export function assertEqualityOfNestedArrays(firstArray, secondArray){
    if(firstArray.length === secondArray.length){
        for (let i = 0; i < firstArray.length; i++){
            if (firstArray[i].length === 2 && secondArray[i].length === 2) {
                if(!(firstArray[i][1] === secondArray[i][1] && firstArray[i][2] === secondArray[i][2])){
                    console.log("  Error, Wrong result");
                    return 0;
                }
            }
            else {
                console.log("  Error, Wrong result");
                return 0;
            }
        }
        console.log("  Test passed successfully");
    }
}
export function assertEqualityOfObjectsInArrays(firstArray, secondArray){
    if(firstArray.length === secondArray.length){
        for (let i = 0; i < firstArray.length; i++){
            if (!(firstArray[i].species === secondArray[i].species && firstArray[i].count === secondArray[i].count)) {
                console.log("  Error, Wrong result");
                return 0;
            }
        }
        console.log("  Test passed successfully");
    }
    else console.log("  Error, Wrong result");
}