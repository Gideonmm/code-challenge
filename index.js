// Prompt the user to input student marks
const marks = prompt("Enter student marks (0-100):");
// Convert the marks to a number
const marksNumber = parseInt(marks);
// Determine the grade based on the marks
let grade;
if (marksNumber >= 80) {
  grade = "A";
} else if (marksNumber >= 60 && marksNumber < 80) {
  grade = "B";
} else if (marksNumber >= 50 && marksNumber < 60) {
  grade = "C";
} else if (marksNumber >= 40 && marksNumber < 50) {
  grade = "D";
} else {
  grade = "E";
}