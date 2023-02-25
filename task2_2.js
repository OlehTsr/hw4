
export let zoo2_2 = [];
export function getCountOfThisSpeciesWithoutMethods(species){
    for(let animal of zoo2_2){
        if (animal.species === species) return animal.count;
    }
    return 0;
}

export function getCountOfAllAnimalsWithoutMethods(){
    let sum = 0;
    for(let animal of zoo2_2){
        sum += animal.count;
    }
    return sum;
}
export function getSpeciesFromCountWithoutMethods(count){
    let species = [];
    for (let animal of zoo2_2){
        if(animal.count === count){
            species[species.length++] = (animal.species);
        }
    }
    return species;


}
export function getSortedArrayByCountWithoutMethods(){
    let sortedZoo = zoo2_2.slice();
    let check1 = true;

    while (check1) {
        let check2 = false;
        for (let i = 0; i < sortedZoo.length - 1; i++) {
            if (sortedZoo[i].count > sortedZoo[i + 1].count) {
                [sortedZoo[i], sortedZoo[i + 1]] = [sortedZoo[i + 1], sortedZoo[i]];
                check2 = true;
            }
        }
        if(!check2) check1 = false;
    }
    let arrayOfSpeciesAndCount = [];
    for (let animal of sortedZoo){
        arrayOfSpeciesAndCount[arrayOfSpeciesAndCount.length++] = [animal.species,animal.count];
    }
    return arrayOfSpeciesAndCount;
}

export function getAllSpeciesInOrderWithoutMethods(){
    let allSpecies = [];
    for(let animal of zoo2_2){
        allSpecies[allSpecies.length] = animal.species;
    }
    return allSpecies;
}

export function checkIsAnimalInArrayWithoutMethods(species){
    for (let animal of zoo2_2){
        if(animal.species === species) return true;
    }
    return false;
}

export function addAnimalWithoutMethods(species, count){
    if(typeof species === "string" && typeof count !== "object" && !isNaN(+count) && +count >= 0 && +count !== Infinity) {
        let check = false;
        for (let animal of zoo2_2) {
            if (animal.species === species) {
                animal.count = +count;
                check = true;
            }
        }
        if (!check) zoo2_2[zoo2_2.length] = {"species": species, "count": +count,};
    }
}

export function deleteAnimalBySpeciesWithoutMethods(species){
    let checkIsSpeciesInArray = false;
    for (let i = 0; i < zoo2_2.length; i++){
        if(zoo2_2[i].species === species){
            for(let startIndex = i; startIndex < zoo2_2.length-1; startIndex++){
                zoo2_2[startIndex] = zoo2_2[startIndex+1];
            }
            checkIsSpeciesInArray = true;
        }
    }
    if(checkIsSpeciesInArray) zoo2_2.length--;
}