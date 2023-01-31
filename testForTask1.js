import {getObjectWithSymbol} from "./task1.js";

function assert(object){
    if(Object.keys(object).length !== Object.keys(getObjectWithSymbol(object)).length) throw new SyntaxError("Як так то блять?");
}
function catched(object){
    try {
        if(typeof object === "object"){
            assert(object);
        } else throw new SyntaxError("Variable isn't an object");
        console.log("Test passed successfully");
    }
    catch (Err){
        console.log("Test Failed.", Err.message);
    }
}
export function testsForTask1(){
    catched({"a": 32});
    catched(123);
    catched([43,5,'dar',{"a":21}]);
}