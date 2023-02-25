export let zoo2_1 = [];
export function getCountOfThisSpeciesWithMethods(species) {
  let animal = zoo2_1.find(item => item.species === species);
  if (animal) return animal.count;
  else return 0;
}

export function getCountOfAllAnimalsWithMethods() {
  return zoo2_1.reduce((count, animal) => count + (animal.count), 0);
}

export function getSpeciesFromCountWithMethods(count) {
  return zoo2_1.filter(item => item.count === count).map(item => item.species);
}
function sort(firstSpecies, secondSpecies) {
  return firstSpecies - secondSpecies;
}
export function getSortedArrayByCountWithMethods() {
  let sortedZoo = zoo2_1.slice();
  return sortedZoo.sort(sort).map(item => [item.species, item.count]);
}

export function getAllSpeciesInOrderWithMethods() {
  return zoo2_1.map(item => item.species);
}

export function checkIsAnimalInArrayWithMethods(species) {
  return zoo2_1.some(item => item.species === species);
}

function findIndexOfAnimalBySpecies(species) {
  return zoo2_1.findIndex(item => item.species === species);
}
export function addAnimalWithMethods(species, count) {
  if (typeof species === "string" && typeof count !== "object" && !isNaN(+count) && +count >= 0 && +count !== Infinity) {
    let indexOfAnimal = findIndexOfAnimalBySpecies(species);
    (indexOfAnimal !== -1) ? zoo2_1[indexOfAnimal].count = count : zoo2_1.push({"species": species, "count": +count});
  }
}
export function deleteAnimalBySpeciesWithMethods(species) {
  let indexOfAnimal = findIndexOfAnimalBySpecies(species);
  if (indexOfAnimal !== -1) zoo2_1.splice(indexOfAnimal, 1);
}
