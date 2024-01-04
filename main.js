function carSpeed() {
    const speed = document.getElementById("carSpeed").value;
    const okay = document.getElementById("points").hidden;
    if(speed <= 70){
        alert("Ok");
    } else {
        var diff = speed - 70;
        var points = 0;
        
        while(diff > 5){
            points = points + 1;
            diff = diff - 5;
            
        }
        alert("Demerit points : " + points);
    }
}

function calculatePayee() {
    
    const year = document.getElementById("year").value;
    const month = document.getElementById("month").value;
    const gross = document.getElementById("gross").value;
    const benefit = document.getElementById("benefit").value;
    alert("gross is: " + gross + "  benefit is: " + benefit);

}

function taxation(income){
    if(income > 0 && income <=288000){
        var tax1 = 288000 * 0.1
        income = income - 280000
        var tax2 = 100000 * 0.25
    }
}
