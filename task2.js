

let zoo = [{species: "bear",count: 5,},{species: "dear",count: 1,},{species: "tfd",count: 7,},{species: "dadfear",count: 5,}];
export function getCountOfThisSpecies(object,species){
    let animal = object.find(item => item.species === species);
    if(animal) return +animal.count;
    else throw new SyntaxError("This species isn't in array");
}

export function getCountOfAllAnimals(object){
    return object.reduce((count,animal) => count + (+animal.count), 0);
}

export function getSpeciesFromCount(object,count){
    let species = object.filter(item => +item.count === +count).map(item => item.species);
    if(species.length !== 0){
        return species;
    }
    else throw new SyntaxError("Species with this count aren't in array");
}

export function getSortedObjectByCount(object){
    let sortedZoo = object.slice();
    function sort(firstSpecies, seconSpecies){
        if(+firstSpecies.count > +seconSpecies.count) return 1;
        if(+firstSpecies.count < +seconSpecies.count) return -1;
        if(+firstSpecies.count === +seconSpecies.count) return 0;
    }
    return sortedZoo.sort(sort).map(item => [item.species,+item.count]);
}

export function getAllAnimals(object){
    return object.map(item => item.species);
}

export function checkIsAnimalInObject(object,species){
    let animal = object.find(item => item.species === species);
    return Boolean(animal);

}

export function addAnimal(object, species, count){
    if(typeof species === "string" && typeof count !== "object" && !isNaN(+count) && +count >= 0 && +count !== Infinity){

        if (object.find(item => item.species === species)){
            object.map(function (item){
                if(item.species === species) item.count = +count;
            });
        }else object.push({"species":species,"count":+count,})
    }else throw new SyntaxError("Wrong value");
}

export function deleteAnimal(object, species){
    if(object.some(item => item.species === species)) {
        let shift = false;
        object.map(function (item, index, array) {
            if (item.species === species) shift = true;
            if (shift && index !== array.length - 1) {
                array[index] = array[index + 1];
            }
        });
    }else throw new SyntaxError("This object isn't in array");
    object.pop();
}
