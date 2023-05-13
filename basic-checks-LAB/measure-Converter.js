function measure (income){

    let num = Number (income [0]);
    let paramInput = income [1];
    let paramOutput = income [2];


    if(paramOutput == `m` && paramInput ==`mm`){
        console.log(num/1000);

    }else if(paramOutput ==`cm` && paramInput ==`mm` ){
        onsole.log(num/10);

    }else if(paramOutput == `mm` && paramInput == `mm`){
        console.log(num);

    }else if(paramOutput ==`cm` && paramInput ==`cm` ){
        onsole.log(num);

    }else if(paramOutput == `mm` && paramInput == `cm`){
        console.log(num*10);

    }else if(paramOutput ==`m` && paramInput ==`cm` ){
        onsole.log(num/100);

    }else if(paramOutput == `mm` && paramInput == `m`){
        console.log(num*1000);

    }else if(paramOutput ==`cm` && paramInput ==`m` ){
        console.log(num*100);

    }else if(paramOutput == `m` && paramInput == `m`){
        console.log(num);
    }

}
measure(["12","mm","m"]);
measure(["150","m","cm"]);
measure(["45","cm","mm"]);