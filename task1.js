export function getObjectWithSymbol(object){
    let id = Symbol("id");
    return  Object.assign({[id]: 123,},object);
}