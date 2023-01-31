import {assertCountOfSpeсies} from "./asserts.js"
import {catched} from "./asserts.js";

let zoo = [{species: "bear", count: "5",},];
export function testsForTask2(){
    catched(zoo,assertCountOfSpeсies,5,"bear");
}