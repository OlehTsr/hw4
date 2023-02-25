import {assertEquality} from "./asserts.js";
import {getCountOfThisSpeciesWithMethods,getCountOfAllAnimalsWithMethods,getSpeciesFromCountWithMethods,getSortedArrayByCountWithMethods,getAllSpeciesInOrderWithMethods,checkIsAnimalInArrayWithMethods,addAnimalWithMethods,deleteAnimalBySpeciesWithMethods,zoo2_1} from "./task2_1.js";
import {getCountOfThisSpeciesWithoutMethods,getCountOfAllAnimalsWithoutMethods,getSpeciesFromCountWithoutMethods,getSortedArrayByCountWithoutMethods,getAllSpeciesInOrderWithoutMethods,checkIsAnimalInArrayWithoutMethods,addAnimalWithoutMethods,deleteAnimalBySpeciesWithoutMethods,zoo2_2} from "./task2_2.js";

function testFunctionGetCountOfThisSpecies(){
    console.log("\nTest function getCountOfThisSpecies:");
    console.log("Methods on:");

    assertEquality(getCountOfThisSpeciesWithMethods("bear"),10);
    assertEquality(getCountOfThisSpeciesWithMethods("cow"),0);

    console.log("Methods off:");

    assertEquality(getCountOfThisSpeciesWithoutMethods("camel"),7);
    assertEquality(getCountOfThisSpeciesWithoutMethods("dear"),0);

}

function testFunctionGetCountOfAllAnimals(){
    console.log("\nTest function getCountOfAllAnimals:");
    console.log("Methods on:");
    assertEquality(getCountOfAllAnimalsWithMethods(), 15);
    console.log("Methods off:");
    assertEquality(getCountOfAllAnimalsWithoutMethods(), 10);

}

function testGetSpeciesFromCount(){
    console.log("\nTest function getCountOfAllAnimals:");
    let functionResult;
    let result;
    console.log("Methods on:");

    functionResult = JSON.stringify(getSpeciesFromCountWithMethods(5));
    result = JSON.stringify(["lion"]);
    assertEquality(functionResult,result);

    functionResult = JSON.stringify(getSpeciesFromCountWithMethods(2));
    result = JSON.stringify([]);
    assertEquality(functionResult,result);

    console.log("Methods off:");

    functionResult = JSON.stringify(getSpeciesFromCountWithoutMethods(7));
    result = JSON.stringify(["camel"]);
    assertEquality(functionResult,result);

    functionResult = JSON.stringify(getSpeciesFromCountWithoutMethods(2));
    result = JSON.stringify([]);
    assertEquality(functionResult,result);
}


function testGetSortedObjectByCount(){
    console.log("\nTest function getSortedObjectByCount:");
    let functionResult;
    let result;
    console.log("Methods on:");

    functionResult = JSON.stringify(getSortedArrayByCountWithMethods());
    result = JSON.stringify([{"species":"lion","count":5},{"species":"bear","count":10}])
    assertEquality(functionResult,result);

    console.log("Methods off:");
    functionResult = JSON.stringify(getSortedArrayByCountWithoutMethods());
    result = JSON.stringify([['crocodile',3],["camel",7]]);
    assertEquality(functionResult, result);
}

export function testGetAllSpeciesInOrder(){
    console.log("\nTest function getAllSpeciesInOrderWithMethods:");
    let functionResult;
    let result;
    console.log("Methods on:");

    functionResult = JSON.stringify(getAllSpeciesInOrderWithMethods());
    result = JSON.stringify(["lion","bear"]);
    assertEquality(functionResult,result);

    console.log("Methods off:");
    functionResult = JSON.stringify(getAllSpeciesInOrderWithoutMethods());
    result = JSON.stringify(["camel","crocodile"]);
    assertEquality(functionResult,result);
}

function testCheckIsAnimalInArray(){
    console.log("\nTest function checkIsAnimalInArrayWithoutMethods:");
    console.log("Methods on:");
    assertEquality(checkIsAnimalInArrayWithMethods("lion"),true);
    assertEquality(checkIsAnimalInArrayWithMethods("parrot"),false);
    console.log("Methods off:");
    assertEquality(checkIsAnimalInArrayWithoutMethods("camel"),true);
    assertEquality(checkIsAnimalInArrayWithoutMethods("parrot"),false);
}

export function testFunctionAddAnimal(){
    console.log("\nTest function AddAnimal:");
    let functionResult;
    let result;
    console.log("Methods on:");

    addAnimalWithMethods("lion","5");
    functionResult = JSON.stringify(zoo2_1);
    result = JSON.stringify([{"species": "lion", "count": 5}]);
    assertEquality(functionResult, result);

    addAnimalWithMethods("bear", -7);
    functionResult = JSON.stringify(zoo2_1);
    result = JSON.stringify([{"species": "lion", "count": 5}]);
    assertEquality(functionResult, result);

    addAnimalWithMethods("bear", 10);
    functionResult = JSON.stringify(zoo2_1);
    result = JSON.stringify([{"species": "lion", "count": 5},{"species": "bear", "count": 10}]);
    assertEquality(functionResult, result);

    console.log("Methods off:");

    addAnimalWithoutMethods("camel","7");
    functionResult = JSON.stringify(zoo2_2);
    result = JSON.stringify([{"species": "camel", "count": 7}]);
    assertEquality(functionResult, result);


    addAnimalWithoutMethods("crocodile", -7);
    functionResult = JSON.stringify(zoo2_2);
    result = JSON.stringify([{"species": "camel", "count": 7}]);
    assertEquality(functionResult, result);


    addAnimalWithoutMethods("crocodile", 3);
    functionResult = JSON.stringify(zoo2_2);
    result = JSON.stringify([{"species": "camel", "count": 7},{"species": "crocodile", "count": 3}]);
    assertEquality(functionResult,result);

}

export function testDeleteAnimalBySpecies(){
    console.log("\nTest function deleteAnimalBySpecies:");
    let functionResult;
    let result;
    console.log("Methods on:");

    deleteAnimalBySpeciesWithMethods("lion");
    functionResult = JSON.stringify(zoo2_1);
    result = JSON.stringify([{"species": "bear", "count": 10}]);
    assertEquality(functionResult, result);

    deleteAnimalBySpeciesWithMethods("parrot");
    functionResult = JSON.stringify(zoo2_1);
    result = JSON.stringify([{"species": "bear", "count": 10}]);
    assertEquality(functionResult,result);

    console.log("Methods off:");
    deleteAnimalBySpeciesWithoutMethods("camel");
    functionResult = JSON.stringify(zoo2_2);
    result = JSON.stringify([{"species": "crocodile", "count": 3}]);
    assertEquality(functionResult,result);

    deleteAnimalBySpeciesWithoutMethods("parrot");
    functionResult = JSON.stringify(zoo2_2);
    result = JSON.stringify([{"species": "crocodile", "count": 3}]);
    assertEquality(functionResult,result);
}
export function testsForTask2(){
    console.log("\nTask2:");
    testFunctionAddAnimal();
    testFunctionGetCountOfThisSpecies();
    testFunctionGetCountOfAllAnimals();
    testGetSpeciesFromCount();
    testGetSortedObjectByCount();
    testGetAllSpeciesInOrder();
    testCheckIsAnimalInArray();
    testDeleteAnimalBySpecies();
}