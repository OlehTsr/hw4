let zoo = [{species: "lion",count: 5,},{species: "dear",count: 7,},{species: "parrot",count: 3,},{species: "cow",count: 5,}];
export function getCountOfThisSpeciesWithoutMethods(species){
    for(let animal of zoo){
        if (animal.species === species) return +animal.count;
    }
    throw new SyntaxError("This species isn't in array");
}

export function getCountOfAllAnimalsWithoutMethods(){
    let sum = 0;
    for(let animal of zoo){
        sum += animal.count;
    }
    return sum;
}
export function getSpeciesFromCountWithoutMethods(count){
    let species = [];
    for (let animal of zoo){
        if(+animal.count === +count){
            species.push(animal.species);
        }
    }
    if(species.length){
        return species;
    }
    else throw new SyntaxError("Species with this count aren't in array");

}
export function getSortedObjectByCountWithoutMethods(){
    let sortedZoo = zoo.slice();
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
        arrayOfSpeciesAndCount.push([animal.species,animal.count]);
    }
    return arrayOfSpeciesAndCount;
}

export function getAllAnimalsWithoutMethods(){
    let allSpecies = [];
    for(let animal of zoo){
        allSpecies.push(animal.species);
    }
    return allSpecies;
}

export function checkIsAnimalInObjectWithoutMethods(species){
    for (let animal of zoo){
        if(animal.species === species) return true;
    }
    return false;
}

export function addAnimalWithoutMethods(species, count){
    if(typeof species === "string" && typeof count !== "object" && !isNaN(+count) && +count >= 0 && +count !== Infinity){
        let check = false;
        for(let animal of zoo){
            if(animal.species === species){
                animal.count = +count;
                check = true;
            }
        }
        if (!check) zoo.push({"species":species,"count":+count,});
    }else throw new SyntaxError("Wrong value");
    return zoo;
}

export function deleteAnimalWithoutMethods(species){
    let checkIsSpeciesInArray = false;
    for (let i = 0; i < zoo.length; i++){
        if(zoo[i].species === species){
            for(let startIndex = i; startIndex < zoo.length-1; startIndex++){
                zoo[startIndex] = zoo[startIndex+1];
            }
            checkIsSpeciesInArray = true;
        }
    }
    if(checkIsSpeciesInArray) zoo.length--;
    else throw new SyntaxError("This object isn't in array");
    return zoo;
}
