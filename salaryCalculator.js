function taxPaid(){
    const taxableIncome= 1000000;
    let payee;
    if (taxableIncome <= 280000.00){
              payee = taxableIncome* 0.1;
           }else if (taxableIncome>=280001.00 && taxableIncome <=388000.00 ){
              payee = (280000*0.1+ ((taxableIncome-280000)*0.25));
           }else if (taxableIncome>=388001.00 && taxableIncome <=6000000.00 ){
              payee = (280000*0.1 + ((388000-280000)*0.25) +((taxableIncome-388000)*0.3));
           }else if ((taxableIncome>=6000001.00 && taxableIncome <=9600000.00 )){
            payee = (280000*0.1 + ((388000-280000)*0.25) +((6000000-388000)*0.3) + ((taxableIncome-6000000)*0.32));
           }else {
            payee = (280000*0.1 + ((388000-280000)*0.25) +((6000000-388000)*0.3) + ((9000000-6000000)*0.32) +((taxableIncome-9000000)*0.35));      
           }
           console.log(payee);
        }
 console.log(taxPaid());
