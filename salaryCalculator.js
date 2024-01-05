// monthly nhif deduction. for yearly we will need to multiply the nhifDeduction value with 12
function nhif(){
const grossIncome = 80000;
let nhifDeduction;
if (grossIncome <= 5999){
     nhifDeduction = 150;
     }else if (grossIncome>=6000 && grossIncome <= 7999){
        nhifDeduction = 300;
        }else if (grossIncome>=8000 && grossIncome <= 11999){
            nhifDeduction = 400;
            }else if (grossIncome>=12000 && grossIncome <= 14999){
                nhifDeduction = 500;
            }else if (grossIncome>=15000 && grossIncome <= 19999){
                nhifDeduction = 600;
            }else if (grossIncome>=20000 && grossIncome <= 24999){
                nhifDeduction = 750;
            }else if (grossIncome>=25000 && grossIncome <= 29999){
                nhifDeduction = 850;
            }else if (grossIncome>=30000 && grossIncome <= 34999){
                nhifDeduction = 900;
            }else if (grossIncome>=35000 && grossIncome <= 39999){
                nhifDeduction = 950;
            }else if (grossIncome>=40000 && grossIncome <= 44999){
                nhifDeduction = 1000;
            }else if (grossIncome>=45000 && grossIncome <= 49999){
                nhifDeduction = 1100;
            }else if (grossIncome>=50000 && grossIncome <= 59999){
                nhifDeduction = 1200;
            }else if (grossIncome>=60000 && grossIncome <= 69999){
                nhifDeduction = 1300;
            }else if (grossIncome>=70000 && grossIncome <= 79999){
                nhifDeduction = 1400;
            }else if (grossIncome>=80000 && grossIncome <= 89999){
                nhifDeduction = 1500;
            }else if (grossIncome>=90000 && grossIncome <= 99999){
                nhifDeduction = 1600;
            }else if (grossIncome >= 100000){
                nhifDeduction = 1700;
            }
       console.log(nhifDeduction);       
}
console.log(nhif());  

function taxPaid(){
    const taxableIncome= 1000000;
    let payee;
    if (taxableIncome < 288000.00){
        payee=0
    }
        else if (taxableIncome === 288000.00){
              payee = taxableIncome* 0.1;

           }else if (taxableIncome>=288001.00 && taxableIncome <=388000.00 ){
              payee = (288000*0.1)+ ((taxableIncome-288000)*0.25);
           }else if (taxableIncome>=388001.00 && taxableIncome <=6000000.00 ){
              payee = (288000*0.1 + ((388000-288000)*0.25) +((taxableIncome-388000)*0.3));
           }else if ((taxableIncome>=6000001.00 && taxableIncome <=9600000.00 )){
            payee = (288000*0.1 + ((388000-288000)*0.25) +((6000000-388000)*0.3) + ((taxableIncome-6000000)*0.32));
           }else {
            payee = (288000*0.1 + ((388000-288000)*0.25) +((6000000-388000)*0.3) + ((9600000-6000000)*0.32) +((taxableIncome-9000000)*0.35));      
           }
           console.log(payee);
        }
 console.log(taxPaid());
