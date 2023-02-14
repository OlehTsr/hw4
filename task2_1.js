let zoo = [{species: "lion",count: 5,},{species: "dear",count: 1,},{species: "bear",count: 7,},{species: "cow",count: 5,}];
export function getCountOfThisSpeciesWithMethods(species){
    let animal = zoo.find(item => item.species === species);
    if(animal) return +animal.count;
    else throw new SyntaxError("This species isn't in array");
}

export function getCountOfAllAnimalsWithMethods(){
    return zoo.reduce((count,animal) => count + (+animal.count), 0);
}

export function getSpeciesFromCountWithMethods(count){
    let species = zoo.filter(item => +item.count === +count).map(item => item.species);
    if(species.length){
        return species;
    }
    else throw new SyntaxError("Species with this count aren't in array");
}

export function getSortedObjectByCountWithMethods(){
    let sortedZoo = zoo.slice();
    function sort(firstSpecies, secondSpecies){
        if(+firstSpecies.count > +secondSpecies.count) return 1;
        if(+firstSpecies.count < +secondSpecies.count) return -1;
        if(+firstSpecies.count === +secondSpecies.count) return 0;
    }
    return sortedZoo.sort(sort).map(item => [item.species,+item.count]);
}

export function getAllAnimalsWithMethods(){
    return zoo.map(item => item.species);
}

export function checkIsAnimalInObjectWithMethods(species){
    let animal = zoo.find(item => item.species === species);
    return Boolean(animal);
}

export function addAnimalWithMethods(species, count){
    if(typeof species === "string" && typeof count !== "object" && !isNaN(+count) && +count >= 0 && +count !== Infinity){

        if (zoo.find(item => item.species === species)){
            zoo.map(function (item){
                if(item.species === species) item.count = +count;
            });
        }else zoo.push({"species":species,"count":+count,})
    }else throw new SyntaxError("Wrong value");
    return zoo;
}

export function deleteAnimalWithMethods(species){
    if(zoo.some(item => item.species === species)) {
        let shift = false;
        zoo.map(function (item, index, array) {
            if (item.species === species) shift = true;
            if (shift && index !== array.length - 1) {
                array[index] = array[index + 1];
            }
        });
    }else throw new SyntaxError("This object isn't in array");
    zoo.pop();
    return zoo;
}
