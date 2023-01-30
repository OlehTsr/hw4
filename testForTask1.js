
function assert(object){
    if(typeof object === "object"){
        let oldLength = Object.keys(object).length;
        let id = Symbol("id");
        let newObject = {[id]: 123,};
        newObject = Object.assign(newObject,object);
        let newLength = Object.keys(newObject).length;
        if(oldLength !== newLength) throw new SyntaxError("Як так то блять?");
    }
    else throw new SyntaxError("Variable isn't an object");
}
export function testForTask1(object){
    try{
        assert(object);
        console.log("Test passed successfully");
    }
    catch (Err){
        console.log("Test Failed.",Err.message);
    }
}
