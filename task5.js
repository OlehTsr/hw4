let students = new Map;
function getUserName(name, surname){
  if(typeof name === "string" && typeof surname === "string") return name+" "+surname;
  else return new SyntaxError("Error, can't create username");
}
function getAverageOfPoints(arrayOfPoints){
  return Math.round(arrayOfPoints.reduce((sum,mark) => sum += +mark, 0)/arrayOfPoints.length);
}
function checkIsObjectCorrect(course,faculty,security){
  if(!isNaN(+course)) return new SyntaxError("Error, wrong courses");
  if(typeof faculty !== "string") return new SyntaxError("Error, wrong faculty");
  if(typeof security !== "object" || typeof security.email !== "string" || typeof  security.password !== "string") return new SyntaxError("Error, wrong security");
}
export function createAndGetStudentObject(object){

  let studentObject = {}
  let {name, surname, course, faculty, security, ...subjects} = object;

  checkIsObjectCorrect(course,faculty,security);

  let username = getUserName(name,surname);

  studentObject.username = username;

  studentObject.email = security.email;
  studentObject.password = security.password;

  let arrayOfPoints = Object.values(subjects);
  studentObject.averageOfPoints = getAverageOfPoints(arrayOfPoints);

  studentObject.subjects = subjects;

  students.set(username, studentObject)

  return studentObject;
}

export function getAveragePointsBySurnameAndPassword(username, password){
  if(students.has(username)){
    let studentsObject = students.get(username);
    if(studentsObject.password === password) return studentsObject.averageOfPoints;
    else throw new SyntaxError("Error, wrong password.");
  }else throw new SyntaxError("Error, this surname doesn't exist.");
}