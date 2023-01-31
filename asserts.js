import {getObjectWithSymbol} from "./task1.js";

export function assertObjectKeysLength(object){
    if(Object.keys(object).length !== Object.keys(getObjectWithSymbol(object)).length) throw new SyntaxError("Як так то блять?");
}