function speedLimit(speed) {
    if (speed <= 70){
        return "OK"
    }
    else if(speed >70 && speed <=75){
        return "1 Demerits"
    }
    else if(speed >75 && speed <=80){
        return " 2 Demerits"
    }
    else if(speed >80 && speed <=85){
        return " 3 Demerits"
    }
    else if(speed >85 && speed <=90){
        return " 4 Demerits"
    }
    else if(speed >90 && speed <=95){
        return " 5 Demerits"
    }
    else if(speed >95 && speed <=100){
        return " 6 Demerits"
    }
    else if(speed >100 && speed <=105){
        return " 7 Demerits"
    }
    else if(speed >105 && speed <=110){
        return " 8 Demerits"
    }
    else if(speed >110 && speed <=115){
        return  " 9 Demerits"
    }
    else if(speed >115 && speed <=120){
        return " 10 Demerits"
    }
    else if(speed >120 && speed <=125){
        return " 11 Demerits"
    }
    else if(speed >= 130){
        return "License Suspended"
    }
}


function check() {
    try {
        let speed = parseFloat(prompt("Enter Speed (0-300):"));

        if (!isNaN(speed) && speed >= 0 && speed <= 300) {
            let Demerits = speedLimit(speed);
            console.log(`The outcome for ${speed} km/hr is: ${Demerits}`);
        } else {
            console.log("Speed should be between 0 and 300.");
        }
    } catch (error) {
        console.log("Invalid input. Please enter a valid number.");
    }
}
check()