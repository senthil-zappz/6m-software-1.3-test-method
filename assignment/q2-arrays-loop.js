/*
    Task
    - In the function, iterate through the array `studentList`.
    - Print each student's name inside the loop using console.log().
*/

const studentList = ["Johnson", "Christina", "Michael", "Lina", "Larry", "Michelle", "Bob", "Wilson"]

function printStudentNames(){
    for (let studentName in studentList) {
        console.log(`Student name: ${studentList[studentName]}`);
    }

}

printStudentNames();

// Ignore the code below this line
module.exports = {
    studentList,
    printStudentNames
}