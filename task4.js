export let map = []

function findIndexOfKey(key){
 return map.findIndex(item => item[0] === key)
}

map.set = function (key, value) {
  let indexOfKey = findIndexOfKey(key);
  (indexOfKey !== -1) ? this[indexOfKey][1] = value: map.push([key, value]);
}

map.get = function (key) {
  let result = this.find(item => item[0] === key);
  if (result) return result[1];
  else return undefined;
}

map.has = function (key) {
  return this.some(item => item[0] === key);
}

map.delete = function (key) {
  let indexOfKey = findIndexOfKey(key);
  if (indexOfKey !== -1) this.splice(indexOfKey,1);
}

map.clear = function (){
  this.length = 0;
}

map.size = function (){
  return this.length;
}


map.keys = function (){
  return this.map(item => item[0]);
}

map.values = function (){
  return this.map(item => item[1]);
}

map.entries = function (){
  return this.map(item => [item[0], item[1]]);
}