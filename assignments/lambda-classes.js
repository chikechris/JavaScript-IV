// CODE here for your Lambda Classes
/*#### Person

* First we need a Person class.This will be our`base-class`
* Person receives`name` `age` `location` all as props
* Person receives`speak` as a method.
* This method logs out a phrase`Hello my name is Fred, I am from Bedrock` where`name` and`location` are the object's own props 
*/

class Person {
  constructor(PersonProperty) {
    this.name = PersonProperty.name;
    this.age = PersonProperty.age;
    this.location = PersonProperty.location;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

/*#### Instructor

* Now that we have a Person as our base class, we'll build our Instructor class.
* Instructor uses the same attributes that have been set up by Person
* Instructor has the following unique props:
 * `specialty` what the Instructor is good at i.e. 'redux'
* `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
* `catchPhrase` i.e. `Don't forget the homies`
* Instructor has the following methods:
* `demo` receives a`subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
* `grade` receives a`student` object and a`subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'
  * */

class Instructor extends Person {
  constructor(IntructorProperty) {
    super(IntructorProperty);
    this.specialty = IntructorProperty.specialty;
    this.favLanguage = IntructorProperty.favLanguage;
    this.catchPhrase = IntructorProperty.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(Student, subject) {
    return `${Student.name} receives a perfect score on ${subject}`;
  }
}

/*### Student

* Now we need some students!
* Student uses the same attributes that have been set up by Person
  * Student has the following unique props:
* `previousBackground` i.e.what the Student used to do before Lambda School
* `className` i.e.CS132
* `favSubjects`.i.e.an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
  * Student has the following methods:
* `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
* `PRAssignment` a method that receives a subject as an argument and logs out that the`student.name has submitted a PR for {subject}`
* `sprintChallenge` similar to PRAssignment but logs out`student.name has begun sprint challenge on {subject}`
    * 
    * **/

class Student extends Person {
  constructor(StudentProperty) {
    super(StudentProperty);
    this.previousBackground = StudentProperty.previousBackground;
    this.className = StudentProperty.className;
    this.favSubjects = StudentProperty.favSubjects;
  }
  listsSubjects() {
    return `${this.favSubjects}`;
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject};`;
  }
  sprintChallenge() {
    return `${this.name} has begun sprint challenge on ${subject};`;
  }
}

/*#### Project Manager

  * Now that we have instructors and students, we'd be nowhere without our PM's
  * ProjectManagers are extensions of Instructors
  * ProjectManagers have the following unique props:
  * `gradClassName`: i.e.CS1
  * `favInstructor`: i.e.Sean
 * ProjectManagers have the following Methods:
 * `standUp` a method that takes in a slack channel and logs`{name} announces to {channel}, @channel standy times!​​​​​
  * `debugsCode` a method that takes in a student object and a subject and logs out `{ name } debugs { student.name } 's code on {subject}`
  * **/

class PM extends Instructor {
  constructor(PMproperty) {
    super(PMproperty);
    this.gradClassName = PMproperty.gradClassName;
    this.favInstructor = PMproperty.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
  }
  debugsCode(Student, subject) {
    return `${(this, name)} debugs ${student.name} 's code on ${subject}`;
  }
}

/**Tests */

//Person Test
const Mandy = new Person({
  name: "Mandy Cruz",
  age: 40,
  location: "Atlanta, Georgia"
});

console.log(Mandy.name);
console.log(Mandy.age);
console.log(Mandy.location);
console.log(Mandy.speak());

////////////////////////////////////////////////////////
//Instructor Test

const Kofi = new Instructor({
  name: "Kofi Marcell",
  age: 50,
  location: "Athens, Georgia",
  specialty: "Web Development",
  favLanguage: "JavaScript",
  catchPhrase: "Live and Let Live"
});

console.log(Kofi.name);
console.log(Kofi.age);
console.log(Kofi.location);
console.log(Kofi.specialty);
console.log(Kofi.favLanguage);
console.log(Kofi.catchPhrase);
console.log(Kofi.demo("Function Declaration"));
console.log(Kofi.grade(Chris, "Functions"));
