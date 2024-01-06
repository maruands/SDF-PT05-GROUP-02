// 1. Student Grading
function studentGrade() {
  const marks = prompt("Enter the Student's Marks:");
  const gradeNumber = parseFloat(marks);

  let grade;
  if (gradeNumber >= 80 && gradeNumber <= 100) {
    grade = "Grade A";
  } else if (gradeNumber >= 60 && gradeNumber <= 79) {
    grade = "Grade B";
  } else if (gradeNumber >= 50 && gradeNumber <= 59) {
    grade = "Grade C";
  } else if (gradeNumber >= 40 && gradeNumber <= 49) {
    grade = "Grade D";
  } else if (gradeNumber >= 0 && gradeNumber < 40) {
    grade = "Grade E";
  } else {
    alert("Enter a number between 0 & 100");
    return;
  }

  const grading = document.getElementById("grading");
  grading.innerHTML = grade;
}
