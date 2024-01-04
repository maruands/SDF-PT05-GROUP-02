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

// 2. Speed Detector
let totalPoints = 0;

function calculatePoints() {
  let speed = parseFloat(document.getElementById("inputNumber").value);
  let speedLimit = 70;

  if (isNaN(speed)) {
    alert("Enter Valid Number");
    return;
  }

  let points = Math.round((speed - speedLimit) / 5);
  if (speed <= speedLimit) {
    alert("OK");
  } else {
    totalPoints += points;

    if (totalPoints > 12) {
      alert("Licence Suspended!");
      totalPoints = 0;
    } else {
      alert("You have " + totalPoints + " points!");
    }
  }
}
