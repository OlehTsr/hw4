import {catchForTask1} from "./asserts.js";

export function testsForTask1(){
    catchForTask1({"a": 32});
    catchForTask1(123);
    catchForTask1([43,5,'dar',{"a":21}]);
}