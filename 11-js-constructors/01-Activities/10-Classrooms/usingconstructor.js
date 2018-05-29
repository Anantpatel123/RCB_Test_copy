// var inquirer = require('inquirer');//for 2nd part inquirer.

var Inclass = require("./class.js");//for both part.

var rcb = new Inclass("F.Dawes", 2);//for both part.

console.log("Number of Students: ", rcb.numOfStudents());//1st part without inquirer
rcb.addStudent("Zach", "Javascript", "4.0");//1st part without inquirer
rcb.addStudent("Eric", "Javascript", "4.0");//1st part without inquirer

console.log ("Number of Students: ", rcb.numOfStudents());//1st part without inquirer

console.log(JSON.stringify(rcb, null, 2));//1st part without inquirer





// using inquirer
// function addStudents() {//for 2nd part inquirer.

//     inquirer.prompt([
//         {
//           name: "choice",
//           type: "list",
//           message: "What would you like to do?",
//           choices: ["Add Student", "Quit"]
//         }
//         ]).then(function(answers) {
//             if(answers.choice === "Add Student"){
//                 inquirer.prompt([
//                     {
//                       name: "StudentName",
//                       message: "What is your name?",
//                     },{
//                         name: "subject",
//                         message: "What is the student's favorite subject?",
//                       },{
//                         name: "gpa",
//                         message: "What is the student's gpa?",
//                       }
//                 ]).then(function(answers){
//                     console.log(answers);
//                     rcb.addStudent(answers.StudentName, answers.subject, answers.gpa);
    
//                     console.log(JSON.stringify(rcb, null, 2));

//                     addStudents();
//                 })
//             }
//             else if(answers.choice === "Quit"){
//                 console.log("Have a nice day!");
//             }
    
//         });
    
// }//for 2nd part inquirer.

// addStudents();//for 2nd part inquirer.









