export let zoo2_1 = [];
export function getCountOfThisSpeciesWithMethods(species){
    let animal = zoo2_1.find(item => item.species === species);
    if(animal) return animal.count;
    else return 0;
}

export function getCountOfAllAnimalsWithMethods(){
    return zoo2_1.reduce((count,animal) => count + (animal.count), 0);
}

export function getSpeciesFromCountWithMethods(count){
    let species = zoo2_1.filter(item => item.count === count).map(item => item.species);
    if(species.length){
        return species;
    }
    return []
}

export function getSortedArrayByCountWithMethods(){
    let sortedZoo = zoo2_1.slice();
    function sort(firstSpecies, secondSpecies){
        if(firstSpecies.count > +secondSpecies.count) return 1;
        if(firstSpecies.count < +secondSpecies.count) return -1;
        if(firstSpecies.count === +secondSpecies.count) return 0;
    }
    return sortedZoo.sort(sort).map(item => [item.species,+item.count]);
}

export function getAllSpeciesInOrderWithMethods(){
    return zoo2_1.map(item => item.species);
}

export function checkIsAnimalInArrayWithMethods(species){
    return zoo2_1.some(item => item.species === species);
}

export function addAnimalWithMethods(species, count){
    if(typeof species === "string" && typeof count !== "object" && !isNaN(+count) && +count >= 0 && +count !== Infinity) {

        if (zoo2_1.find(item => item.species === species)) {
            zoo2_1.map(function (item) {
                if (item.species === species) item.count = +count;
            });
        } else zoo2_1.push({"species": species, "count": +count,})
    }
}

export function deleteAnimalBySpeciesWithMethods(species){
    let animal = zoo2_1.find(item => item.species === species);
    if (animal) {
        let index = zoo2_1.indexOf(animal);
        zoo2_1 = zoo2_1.slice(0, index).concat(zoo2_1.slice(index + 1));
    }
}