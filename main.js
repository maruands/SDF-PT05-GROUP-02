input();
function studentGrade(points) {
    if (points > 79) {
        return 'A'} 
        else if (points >= 60 && points <= 79) {
        return 'B'}
        else if (points >= 50 && points <= 59) {
        return 'C'}
        else if (points >= 40 && points <= 49) {
        return 'D'}
        else {
        return 'E'}
    
}

function input() {
    try {
        let points = parseFloat(prompt("Enter student points (0-100):"));

        if (!isNaN(points) && points >= 0 && points <= 100) {
            let grade = studentGrade(points);
            console.log(`The grade for ${points} is: ${grade}`);
        } else {
            console.log("Marks should be between 0 and 100.");
        }
    } catch (error) {
        console.log("Invalid input. Please enter a valid number.");
    }
}


