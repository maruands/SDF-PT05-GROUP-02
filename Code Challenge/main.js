<<<<<<< HEAD
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
  updateSpeedDisplay();
  if (isNaN(speed)) {
    alert("Enter Valid Number");
    return;
  }

  let points = Math.round((speed - speedLimit) / 5);
  const message = document.getElementById("message");
  if (speed <= speedLimit) {
    //alert("OK");
    message.innerHTML = "OK";
  } else {
    totalPoints += points;

    if (totalPoints > 12) {
      //alert("Licence Suspended!");
      message.innerHTML = "Licence Suspended!";
      totalPoints = 0;
    } else {
      //alert("You have " + totalPoints + " points!");
      message.innerHTML = "You have " + totalPoints + " points!";
    }
  }
}

// Function to update the speed display dashboard
function updateSpeedDisplay() {
  
  let meterBar = document.getElementById("inputNumber").value;
  let speed = Math.round(meterBar);
  
  let speedDisplay = document.getElementById("speed");
  speedDisplay.textContent = speed;
}


// 3. Net Salary Calculator
function netPay() {
  const basicSalary = parseFloat(document.getElementById("salary").value);
  const benefits = parseFloat(document.getElementById("benefits").value);
  const benefitsValue = isNaN(benefits) ? 0 : benefits;
  const grossPay = basicSalary + benefitsValue;

  if (isNaN(basicSalary)) {
    alert("Enter Basic Salary");
    return;
}


let nssf1;
  if (grossPay >= 10 && grossPay <= 6000) {
      nssf1 = (grossPay * 0.06);
  } else {
      nssf1 = 360;
  }
let nssf2;  
  if (grossPay >= 6001 & grossPay <= 17991) {
      nssf2 = (grossPay * 0.06);
  } else {
      nssf2 = 720;
  }
const nssf =  nssf1 + nssf2;


let nhif;
  if (grossPay >= 1 && grossPay <= 5999) {
      nhif = 150;
  } else if (grossPay >= 6000 && grossPay <= 7999) {
      nhif = 300; 
  } else if (grossPay >= 8000 && grossPay <= 11999) {
      nhif = 400;
  } else if (grossPay >= 12000 && grossPay <= 14999) {
      nhif = 500;
  } else if (grossPay >= 15000 && grossPay <= 19999) {
      nhif= 600;
  } else if (grossPay >= 20000 && grossPay <= 24999) {
      nhif = 750; 
  } else if (grossPay >= 25000 && grossPay <= 29999) {
      nhif = 850;
  } else if (grossPay >= 30000 && grossPay <= 34999) {
      nhif = 900;
  } else if (grossPay >= 35000 && grossPay <= 39999) {
      nhif= 950;
  } else if (grossPay >= 40000 && grossPay <= 44999) {
      nhif = 1000; 
  } else if (grossPay >= 45000 && grossPay <= 49000) {
      nhif = 1100;
  } else if (grossPay >= 50000 && grossPay <= 59999) {
      nhif = 1200;
  } else if (grossPay >= 60000 && grossPay <= 69999) {
      nhif= 1300;
  } else if (grossPay >= 70000 && grossPay <= 79999) {
      nhif = 1400; 
  } else if (grossPay >= 80000 && grossPay <= 89999) {
      nhif = 1500;
  } else if (grossPay >= 90000 && grossPay <= 99999) {
      nhif = 1600;
  } else {
      nhif= 1700;
  }

const taxablePay = grossPay - nssf;


let incomeBracket1;
  if (taxablePay < 24000) {
      incomeBracket1 = 0;
  } else {
      incomeBracket1 = 2400;
  }


let incomeBracket2;
  if (taxablePay < 24001  ) {
      incomeBracket2 = 0;
  } else if  (taxablePay <= 32333) {
      incomeBracket2 = (taxablePay - 24000) * 0.25;
  } else {
      incomeBracket2 = 8333 * 0.25;     
  }


let incomeBracket3;
  if (taxablePay < 32334) {
      incomeBracket3 = 0;
  } else if  (taxablePay  <= 500000) {
      incomeBracket3 = (taxablePay - 32333) * 0.30;
  } else  {
      incomeBracket3 = 467667 * 0.30;     
  }


let incomeBracket4;
  if (taxablePay < 500001) {
      incomeBracket4 = 0;
  } else if  (taxablePay <= 800000) {
      incomeBracket4 = (taxablePay - 500000) * 0.325;
  } else {
      incomeBracket4 = 300000 * 0.325;     
  }

let incomeBracket5;
  if (taxablePay < 800001) {
      incomeBracket5 = 0;
  } else {
      incomeBracket5 = (taxablePay - 800000) * 0.35;
  } 

const taxCharged = incomeBracket1 + incomeBracket2 + incomeBracket3 + incomeBracket4 + incomeBracket5;
const relief = 2400;
const nhifRelief = nhif * 0.15;
const payee = taxCharged - (relief + nhifRelief);
const netPay = grossPay - (payee + nssf + nhif);


  document.getElementById("basicPay").innerHTML = basicSalary.toLocaleString();
  document.getElementById("allowances").innerHTML = (isNaN(benefits) ? 0 : benefits).toLocaleString();
  document.getElementById("grossPay").innerHTML = grossPay.toLocaleString();
  document.getElementById("nssf").innerHTML = nssf.toLocaleString();
  document.getElementById("taxableAmount").innerHTML = taxablePay.toLocaleString();
  document.getElementById("incomeBracket1").innerHTML = incomeBracket1.toLocaleString();
  document.getElementById("incomeBracket2").innerHTML = incomeBracket2.toLocaleString();
  document.getElementById("incomeBracket3").innerHTML = incomeBracket3.toLocaleString();
  document.getElementById("incomeBracket4").innerHTML = incomeBracket4.toLocaleString();
  document.getElementById("incomeBracket5").innerHTML = incomeBracket5.toLocaleString();
  document.getElementById("taxCharged").innerHTML = taxCharged.toLocaleString();
  document.getElementById("personalRelief").innerHTML = relief.toLocaleString();
  document.getElementById("nhifRelief").innerHTML = nhifRelief.toLocaleString();
  document.getElementById("payee").innerHTML = payee.toLocaleString();
  document.getElementById("nhif").innerHTML = nhif.toLocaleString();
  document.getElementById("netPay").innerHTML = netPay.toLocaleString();
}
=======
1.
>>>>>>> 0bb852bebbc96a1b38d047509b95501786288dc3
