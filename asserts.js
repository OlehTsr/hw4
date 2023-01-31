import {getObjectWithSymbol} from "./task1.js";

export function assertObjectKeysLength(object){
    if(Object.keys(object).length !== Object.keys(getObjectWithSymbol(object)).length) throw new SyntaxError("Як так то блять?");
}
export function catched(object,result,assert){
    try {
        if(typeof object === "object"){
            assert(object,result);
        } else throw new SyntaxError("Variable isn't an object");
        console.log("Test passed successfully");
    }
    catch (Err){
        console.log("Test Failed.", Err.message);
    }
}