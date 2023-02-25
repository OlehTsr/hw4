import {assertEquality,assertEqualityOfObjectsInArrays,assertEqualityOfArrays,assertEqualityOfNestedArrays} from "./asserts.js";
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
    console.log("Methods on:");
    assertEqualityOfArrays(getSpeciesFromCountWithMethods(5),["lion"]);
    assertEqualityOfArrays(getSpeciesFromCountWithMethods(2),[]);
    console.log("Methods off:");
    assertEqualityOfArrays(getSpeciesFromCountWithoutMethods(7),["camel"]);
    assertEqualityOfArrays(getSpeciesFromCountWithoutMethods(2),[]);
}


function testGetSortedObjectByCount(){
    console.log("\nTest function getSortedObjectByCount:");
    console.log("Methods on:");
    assertEqualityOfNestedArrays(getSortedArrayByCountWithMethods(), [['lion',5],["bear",10]]);
    console.log("Methods off:");
    assertEqualityOfNestedArrays(getSortedArrayByCountWithoutMethods(), [['crocodile',3],["camel",7]]);
}

export function testGetAllSpeciesInOrder(){
    console.log("\nTest function getAllSpeciesInOrderWithMethods:");
    console.log("Methods on:");
    assertEqualityOfArrays(getAllSpeciesInOrderWithMethods(),["lion","bear"]);
    console.log("Methods off:");
    assertEqualityOfArrays(getAllSpeciesInOrderWithoutMethods(),["camel","crocodile"]);
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
    console.log("\nTest function AddAnimal:")
    console.log("Methods on:");

    addAnimalWithMethods("lion","5");
    assertEqualityOfObjectsInArrays(zoo2_1, [{"species": "lion", "count": 5}]);

    addAnimalWithMethods("bear", -7);
    assertEqualityOfObjectsInArrays(zoo2_1, [{"species": "lion", "count": 5}]);

    addAnimalWithMethods("bear", 10);
    assertEqualityOfObjectsInArrays(zoo2_1, [{"species": "lion", "count": 5},{"species": "bear", "count": 10}]);

    console.log("Methods off:");

    addAnimalWithoutMethods("camel","7");
    assertEqualityOfObjectsInArrays(zoo2_2, [{"species": "camel", "count": 7}]);


    addAnimalWithoutMethods("crocodile", -7);
    assertEqualityOfObjectsInArrays(zoo2_2, [{"species": "camel", "count": 7}]);


    addAnimalWithoutMethods("crocodile", 3);
    assertEqualityOfObjectsInArrays(zoo2_2, [{"species": "camel", "count": 7},{"species": "crocodile", "count": 3}]);

}

export function testDeleteAnimalBySpecies(){
    console.log("\nTest function deleteAnimalBySpecies:")
    console.log("Methods on:");
    deleteAnimalBySpeciesWithMethods("lion");
    assertEqualityOfObjectsInArrays(zoo2_1,[{"species": "bear", "count": 10}]);
    deleteAnimalBySpeciesWithMethods("parrot");
    assertEqualityOfObjectsInArrays(zoo2_1,[{"species": "bear", "count": 10}]);
    console.log("Methods off:");
    deleteAnimalBySpeciesWithoutMethods("camel");
    assertEqualityOfObjectsInArrays(zoo2_2,[{"species": "crocodile", "count": 3}]);
    deleteAnimalBySpeciesWithoutMethods("parrot");
    assertEqualityOfObjectsInArrays(zoo2_2,[{"species": "crocodile", "count": 3}]);
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