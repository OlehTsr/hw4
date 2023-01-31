import {assertObjectKeysLength} from "./asserts.js"
import {catched} from "./asserts.js";

export function testsForTask1(){
    catched({"a": 32},assertObjectKeysLength);
    catched(123,assertObjectKeysLength);
    catched([43,5,'dar',{"a":21}],assertObjectKeysLength);
}