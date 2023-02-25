
export  let objectOfCityTemperatures = {
  Kyiv: 17,
  London: 15,
  Berlin: 21,
  [Symbol.toPrimitive](hint) {
    if(hint === "string"){
      let result = ""
      let arrayOfCity = Object.keys(this)
      for(let index = 0; index < arrayOfCity.length-1; index++){
        result += `${arrayOfCity[index]}: ${this[arrayOfCity[index]]};\n`;
      }
      result += `${arrayOfCity[arrayOfCity.length-1]}: ${this[arrayOfCity[arrayOfCity.length-1]]}.`;
      return result;
    }
    if(hint === "number"){
      let temperatures = Object.values(this);
      let result = 0;
      let count = 0;
      for (let temperature of temperatures) {
        if(!isNaN(+temperature)){
          count++;
          result += +temperature;
        }
      }
      return Math.round(result/count);
    }
  }
}