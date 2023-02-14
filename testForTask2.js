import {assertEquality} from "./asserts.js";
import {getCountOfThisSpeciesWithMethods} from "./task2_1.js";
import {getCountOfThisSpeciesWithoutMethods} from "./task2_2.js";
import {getCountOfAllAnimalsWithMethods} from "./task2_1.js";
import {getCountOfAllAnimalsWithoutMethods} from "./task2_2.js";
import {getSpeciesFromCountWithMethods} from "./task2_1.js";
import {getSpeciesFromCountWithoutMethods} from "./task2_2.js";
import {getSortedObjectByCountWithMethods} from "./task2_1.js";
import {getSortedObjectByCountWithoutMethods} from "./task2_2.js";
import {getAllAnimalsWithMethods} from "./task2_1.js";
import {getAllAnimalsWithoutMethods} from "./task2_2.js";
import {checkIsAnimalInObjectWithMethods} from "./task2_1.js";
import {checkIsAnimalInObjectWithoutMethods} from "./task2_2.js";
import {addAnimalWithMethods} from "./task2_1.js";
import {addAnimalWithoutMethods} from "./task2_2.js";
import {deleteAnimalWithMethods} from "./task2_1.js";
import {deleteAnimalWithoutMethods} from "./task2_2.js";
import {catchForTask2} from "./asserts.js";
import {deleteAnimal} from "./task2.js";

function testCountOfSpeсies(species, result, methods){
    if (methods) assertEquality(getCountOfThisSpeciesWithMethods(species), result);
    else assertEquality(getCountOfThisSpeciesWithoutMethods(species),result);
}

function testCountOfAllAnimals(result,methods){
    if(methods) assertEquality(getCountOfAllAnimalsWithMethods(), result);
    else assertEquality(getCountOfAllAnimalsWithoutMethods(), result);
}

function testSpeciesFromCount(count,result,methods){
    let array;
    if(methods) array = getSpeciesFromCountWithMethods(count);
    else array = getSpeciesFromCountWithoutMethods(count);
    if (array.length === result.length){
        for (let i = 0; i < array.length; i++){
            assertEquality(array[i],result[i]);
        }
    }
    else throw new SyntaxError("Wrong result");
}

function testSortedObjectByCount(result,methods){
    let sortedObject;
    if(methods) sortedObject = getSortedObjectByCountWithMethods();
    else sortedObject = getSortedObjectByCountWithoutMethods();
    if(sortedObject.length === result.length){
        for (let i = 0; i < sortedObject.length; i++){
            if (sortedObject[i].length === 2 && result[i].length === 2) {
                assertEquality(sortedObject[i][0], result[i][0]);
                assertEquality(sortedObject[i][1], result[i][1]);
            }
        }
    }
    else throw new SyntaxError("Wrong result");
}

export function testAllAnimals(result,methods){
    let array;
    if (methods) array = getAllAnimalsWithMethods();
    else array = getAllAnimalsWithoutMethods();
    if (array.length === result.length){
        for (let i = 0; i < array.length; i++){
            assertEquality(array[i], result[i]);
        }
    }
    else throw new SyntaxError("Wrong result");
}

function testIsAnimalInObject(species,result,methods){
    if(methods) assertEquality(checkIsAnimalInObjectWithMethods(species),result);
    else assertEquality(checkIsAnimalInObjectWithoutMethods(species),result);
}

export function testAddAnimal(species, count, result, methods){
    let object;
    if(methods) object = addAnimalWithMethods(species,count);
    else object = addAnimalWithoutMethods(species,count);
    if (object.length === result.length){
        for (let i = 0; i < object.length; i++){
            assertEquality(object[i].species, result[i].species);
            assertEquality(object[i].count, result[i].count);
        }
    }
    else throw new SyntaxError("Wrong result");
}

export function testDeleteAnimal(species, result, methods){
    let object;
    if(methods) object = deleteAnimalWithMethods(species);
    else object = deleteAnimalWithoutMethods(species);
    if (object.length === result.length){
        for (let i = 0; i < object.length; i++){
            assertEquality(object[i].species, result[i].species);
            assertEquality(object[i].count, result[i].count);
        }
    }
    else throw new SyntaxError("Wrong result");
}
export function testsForTask2(){
    catchForTask2(testCountOfSpeсies, "lion",5, false);
    catchForTask2(testCountOfAllAnimals,20,false);
    catchForTask2(testSpeciesFromCount,5,["lion","cow"],false);
    catchForTask2(testSortedObjectByCount,[["parrot",3],[" lion",5],["cow",5],["dear",7]], true);
    catchForTask2(testAllAnimals,["lion","dear","parrot","cow"],false);
    catchForTask2(testIsAnimalInObject,"parrot",true,false);
    catchForTask2(testAddAnimal, "crocodile", 5, [{species: "lion",count: 5,},{species: "dear",count: 7,},{species: "parrot",count: 3,},{species: "cow",count: 5,},{species: "crocodile", count: 5}], false);
    catchForTask2(testDeleteAnimal, "bear", [{species: "lion",count: 5,},{species: "dear",count: 1,},{species: "cow",count: 5,}], true);
}