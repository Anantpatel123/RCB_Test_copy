var Student = require("./student.js");

var Inclass = function(nameOfProfessor, roomNumber) {// this is definite.
    this.studentsArr = [];
    // this.numOfStudents = 0;
    this.nameOfProfessor = nameOfProfessor;
    this.roomNumber = roomNumber;

    this.addStudent = function(name, subject, gpa) {
        this.studentsArr.push(new Student(name, subject, gpa));
      };

    this.numOfStudents = function(){
        return this.studentsArr.length;
    };
    
}

module.exports = Inclass;