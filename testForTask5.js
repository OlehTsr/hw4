import {createAndGetStudentObject, getAveragePointsBySurnameAndPassword} from "./task5.js";
import {assertEquality} from "./asserts.js";

function testFunctionCreateAndGetStudentObject(){
  console.log("Test function createAndGetStudentObject:");
  let object = {name:"Oleh",
                course:1,
                faculty: "FIOT",
                surname: "Tsuria",
                security: {email: "tsurya.oleg@gmail.com", password: "qwerty"},
                programing: 95,
                math: 63,
                kl: 99,
  };

  let result = {
    username: "Oleh Tsuria",
    email: "tsurya.oleg@gmail.com",
    password: "qwerty",
    averageOfPoints: 86,
    subjects: {programing: 95, math: 63, kl: 99}
  };

  try {
    let functionResult = createAndGetStudentObject(object);
    assertEquality(JSON.stringify(functionResult), JSON.stringify(result));
  }
  catch (Error){
    console.log(" "+Error.message);
  }
}

function testFunctionGetAveragePointsBySurnameAndPassword(){
  console.log("Test function getAveragePointsBySurnameAndPassword:");
  try {
    let functionResult = getAveragePointsBySurnameAndPassword("Oleh Tsuria", "qwerty");
    assertEquality(functionResult,86);
  }
  catch(Error){
    console.log(" "+Error.message);
  }
}
export function testsForTask5(){
  console.log('\nTests for task5:');
  testFunctionCreateAndGetStudentObject();
  testFunctionGetAveragePointsBySurnameAndPassword();
}