
export let map = []

map.set = function (key, value) {

  if (this.some((item => item[0] === key))) {
    this.map(function (item, index, array) {
      if (item[0] === key) {
        array[index][1] = value;
      }
    });
  } else map.push([key, value]);
}

map.get = function (key) {
  let result = this.find(item => {
    if (item[0] === key) return item;
  });
  if (result) return result[1];
  else return undefined;
}

map.has = function (key) {
  return this.some(item => item[0] === key);
}

map.delete = function (key) {

  this.map(function (item, index, array) {
    if (item[0] === key) {
      let newArray = array.slice(0, index).concat(array.slice(index + 1));
      array.length = 0;
      for (let item of newArray){
        map.push(item)
      }
    }
  });

}

map.clear = function (){
  map.length = 0;
}

map.size = function (){
  return map.length;
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