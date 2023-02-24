import {objectOfCityTemperatures} from "./task6.js";
import {assertEquality} from "./asserts.js";

export function testsForTask6(){
  console.log("Test task6:")
  assertEquality(String(objectOfCityTemperatures),"Kyiv: 17;\nLondon: 15;\nBerlin: 21.");
  assertEquality(Number(objectOfCityTemperatures), 18);
}