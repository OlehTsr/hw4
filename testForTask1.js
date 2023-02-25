import {assertEquality} from "./asserts.js";
import {getObjectWithSymbol} from "./task1.js";
export function testsForTask1(){

    console.log("Task1:\n");

    let arrayOfObjects = [{'a':5, "t":65},[123,56], new Date];
    for (let object of arrayOfObjects) {
        if(typeof object === "object" && object !== null) {
            assertEquality(Object.keys(object).length, Object.keys(getObjectWithSymbol(object)).length);
        } 
        else console.log("  Error, The value isn't object");
    }
}