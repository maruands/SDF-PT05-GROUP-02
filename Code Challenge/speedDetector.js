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
