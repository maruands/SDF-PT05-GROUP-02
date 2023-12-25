function carSpeed() {
    const speed = document.getElementById("carSpeed").value;
    
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