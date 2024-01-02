function gradeGenerator(){
    const score = parseInt(document.getElementById("score").value);
     let grade; 
      
     if (score < 40) {
         grade = "E";
      } 
      else if (score >= 40 && score <= 49) {
         grade = "D";
      } 
      else if (score >= 50 && score <= 59) {
         grade = "C";
      } 
      else if (score >= 60 && score <= 79) {
         grade = "B";
      } 
      else {
         grade = "A";
      }
      document.getElementById("grade").textContent=`Your grade is: ${grade}`;
     
 }
 function speedDetector(){
    const speed = parseInt(document.getElementById("speed").value);
    let points=0; 
    if (speed < 70){
       print = "Ok";
    }
    else{
       points = Math.round((speed - 70)/5);
 
       if (points < 12){
          print = "Overspeding stay on check";
       } 
       else {
         print = `overspeeding, your lisence has been suspended`;
       }
 
    }
    document.getElementById("print").textContent=`you need to know you are: ${print}`;
 }
 // const button = document.getElementById("notify")
 // button.addEventListener('click', function(){
 //   console.log("Printing a Message!")
 
 // function netSalaryCalculator(){
 //    const basicSalary=parseFloat(document.getElementById('basicSalary').value);
 //    const benefits = parseFloat(document.getElementById('benefit').value);
 //    const grossSalary = basicSalary + benefits;
 //     const nhifDeductible = parseFloat(Math.floor(grossSalary*0.06));
 //    const nssfDeductible = parseFloat(Math.floor(grossSalary* 0.06));
 
 
 //    const houseLevyDeductible = parseFloat(Math.floor(grossSalary*0.015));
   
 
 //    const totalDeductible = nhifDeductible + nssfDeductible + houseLevyDeductible;
 //    const taxableIncome = grossSalary - totalDeductible;
 //    const netSalary = taxableIncome -annualPayetax;
    
 //    let ouput = document.getElementById("output");
 //    outcomme.innerHTML = `
 //    <p> your grossSalary is ${grossSalary} 
 //    <p> your nhif deductions is ${nhifDeductible}
 //    <p>your nssf deductible is ${nssfDeductible}
 //    <p> your house levy deductible is ${houseLevyDeductible}
 //    <p> your total deductible is ${totaldeductible}
 //    <p>your taxable income is ${taxableIncome}
 //    <p> your netSalary is ${netSalary} </p>`;
 
    
 //    let annualPayeTax = parseFloat(Math.floor(taxableIncome * rate));
 //    if (taxableIncome <= 280000.00){
 //       rate = 0.1;
 //    }else if (taxableIncome>=280001.00 && taxableIncome <=388000.00 ){
 //       rate =0.25;
 //    }else if (taxableIncome>=388001.00 && taxableIncome <=6000000.00 ){
 //       rate = 0.3;
 //    }else if ((taxableIncome>=6000001.00 && taxableIncome <=9600000.00 )){
 //       rate = 0.32;
 //    }else {
 //       rate = 0.35;
 //    }
    
 //    let calcButton = document.getElementById("calcButton");
 //    calcButton.addEventListener("click", netSalaryCalculator);
 // }
 
 // //document.getElementById("annualPayeTax").textContent = `${annualPayeTax};
 