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
    } else if (points > 12) {
        alert("Licence Suspended!");
    } else {
        alert("You have " + points + " points!");
    }
}
