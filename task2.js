let zoo = [{species: "bear",count: 12,},{species: "dear",count: 5,}];
export function getCountOfThisSpecies(object,species){
    let animal = object.find(item => item.species === species);
    if(animal) return animal.count;
    else throw new SyntaxError("This species isn't in array");
}

