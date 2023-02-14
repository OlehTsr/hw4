import {getObjectWithSymbol} from "./task1.js";
export function assertObjectKeysLengthEquality(object){
    if(Object.keys(object).length !== Object.keys(getObjectWithSymbol(object)).length) throw new SyntaxError("Як так то блять?");
}

export function assertEquality(getFromFunction, result){
    if(getFromFunction !== result) throw new SyntaxError("Wrong result");
}

export function catchForTask1(object){
    try {
        if(typeof object === "object"){
            assertObjectKeysLengthEquality(object);
        } else throw new SyntaxError("Variable isn't an object");
        console.log("Test passed successfully");
    }
    catch (Err){
        console.log("Test Failed.", Err.message);
    }
}

export function catchForTask2(func, species, count, result, methods){
    try{
        func(species,count,result,methods);
        console.log("Test passed successfully");
    }
    catch (Err){
        console.log("Test Failed.", Err.message);
    }
}