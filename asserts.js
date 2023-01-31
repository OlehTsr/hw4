import {getObjectWithSymbol} from "./task1.js";
import {getCountOfThisSpecies} from "./task2.js";
export function assertObjectKeysLength(object){
    if(Object.keys(object).length !== Object.keys(getObjectWithSymbol(object)).length) throw new SyntaxError("Як так то блять?");
}
export function assertCountOfSpeсies(object,result,species){
    if (+getCountOfThisSpecies(object,species) !== +result) throw new SyntaxError("Wrong result");
}
export function catched(object,assert,result,...addition){
    try {
        if(typeof object === "object"){
            assert(object,result,addition[0]);
        } else throw new SyntaxError("Variable isn't an object");
        console.log("Test passed successfully");
    }
    catch (Err){
        console.log("Test Failed.", Err.message);
    }
}