// 2. Speed Detector
let totalPoints = 0;

function calculatePoints() {
  let speed = parseFloat(document.getElementById("inputNumber").value);
  let speedLimit = 70;
  let points;
  const message = document.getElementById("message");
  updateSpeedDisplay();
  if (isNaN(speed)) {
    alert("Enter Valid Number");
    return;
  }
  if (speed <= speedLimit) {
    //alert("OK");
    message.innerHTML = "OK";
  } else if(speed > speedLimit && speed < 75) {
    points = 0;
    message.innerHTML = "Your demerit points : "+ points + "</br> Total Points : " + totalPoints;
  } else {
    points = Math.round((speed - speedLimit) / 5);
    totalPoints += points;

    if (totalPoints > 12) {
      //alert("Licence Suspended!");
      message.innerHTML = "Licence Suspended!";
      totalPoints = 0;
    } else {
      //alert("You have " + totalPoints + " points!");
      message.innerHTML = "Your demerit points : "+ points + "</br> Total Points : " + totalPoints;
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
