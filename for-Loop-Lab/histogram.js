function histogram (input){


    let inputNumbers = input [0];
    
    let stingLength = 0;

    let p1= 1;
    let p2= 1;
    let p3= 1;
    let p4= 1;
    let p5= 1;

    for (let i= 0; i<inputNumbers.length; i++ ){
        
        let num = Number (inputNumbers[i]);
        
        if (num <200){
            stingLength++
            p1++;


        }else if (num >=200 && num<=399){
            stingLength++
            p2++

        }else if (num >=400 && num <=599){
            stingLength++
            p3++

        }else if(num >=600 && num <=799){
            stingLength++
            p4++
        }else{
            stingLength++
            p5++
        }
    };

    console.log(p1 )
}
histogram(["3","1","2","999"]);
histogram(["7", "800", "801", "250", "199","399", "599", "799"]);
histogram(["9", "367", "99", "200", "799","999", "333", "555", "111", "9"]);
histogram(["14", "53", "7", "56", "180","450", "920", "12", "7", "150", "250", "680", "2", "600", "200"]);