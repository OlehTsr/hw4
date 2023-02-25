import {map} from "./task4.js";
import {assertEquality, convertIteratorToString} from "./asserts.js";

function convertMapIteratorToString(iterator) {
  let result = ""
  for (let iteration of iterator) {
    result += JSON.stringify(iteration);
  }
  return result

}
let realMap = new Map();
function testMethodSet() {
  console.log("Test method set:");
  let resultMap;
  let resultRealMap;

  map.set("rew", 'rew');
  map.set({1: 123, "rew": 5}, 5);
  map.set(5, 5);
  realMap.set('rew', 'rew');
  realMap.set({1: 123, "rew": 5}, 5);
  realMap.set(5, 5);

  resultMap = JSON.stringify(map);
  resultRealMap = JSON.stringify(Array.from(realMap));

  assertEquality(resultMap, resultRealMap);
}

function testMethodGet() {
  console.log("Test method get:");
  assertEquality(map.get("rew"), realMap.get("rew"));
  assertEquality(map.get(5), realMap.get(5));
  assertEquality(map.get({'1': 123, rew: 5}), realMap.get(JSON.stringify({1: 123, "rew": 5})));
}

function testMethodHas() {
  console.log("Test method has:");
  assertEquality(map.has(5), realMap.has(5));
  assertEquality(map.has("hl"), realMap.has("hl"));
}

function testMethodDelete() {
  console.log("Test method delete:");
  let resultMap;
  let resultRealMap;

  map.delete("rew");
  realMap.delete("rew");

  resultMap = JSON.stringify(map);
  resultRealMap = JSON.stringify(Array.from(realMap));
  assertEquality(resultMap, resultRealMap);

}

function testMethodClear() {
  console.log("Test method clear:");
  let resultMap;
  let resultRealMap;

  map.clear();
  realMap.clear();

  resultMap = JSON.stringify(map);
  resultRealMap = JSON.stringify(Array.from(realMap));

  assertEquality(resultMap, resultRealMap);
}

function testMethodSize() {
  console.log("Test method size:");
  assertEquality(map.size(), realMap.size);
}

function testMethodKeys() {
  console.log("Test method keys:");
  let resultMap;
  let resultRealMap;

  resultMap = convertIteratorToString(map.keys());
  resultRealMap = convertIteratorToString(realMap.keys());
  assertEquality(resultMap, resultRealMap);
}

function testMethodValues() {
  console.log("Test method values:");
  let resultMap;
  let resultRealMap;

  resultMap = convertIteratorToString(map.values());
  resultRealMap = convertIteratorToString(realMap.values());
  assertEquality(resultMap, resultRealMap);
}

function testMethodEntries() {
  console.log("Test method entries:");
  let resultMap;
  let resultRealMap;

  resultMap = convertMapIteratorToString(map.entries());
  resultRealMap = convertMapIteratorToString(realMap.entries());
  assertEquality(resultMap, resultRealMap);
}
export function testsForTask4() {
  console.log("\nTests for task4:");
  testMethodSet();
  testMethodGet();
  testMethodHas();
  testMethodSize();
  testMethodKeys();
  testMethodValues();
  testMethodEntries();
  testMethodDelete();
  testMethodClear();
}