let students = new Map;

export function createAndGetStudentObject(object){
  let studentObject = {}
  let {name, surname, course, faculty, security, ...subjects} = object;
  function getUserName(name, surname){
    if(typeof name === "string" && typeof surname === "string") return name+" "+surname;
  }
  function getAverageOfPoints(arrayOfPoints){
    return Math.round(arrayOfPoints.reduce((sum,mark) => sum += +mark, 0)/arrayOfPoints.length);
  }

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