function campaign ( input ){
    
let days = Number (input[0]);
let backersNum = Number (input[1]);
let cakesNum= Number (input[2]);
let wafflesNum=Number (input[3]);
let pancakesNum=Number (input[4]);


let income = (days* (backersNum*((cakesNum*45)+(wafflesNum*5.80)+ (pancakesNum*3.20)))).toFixed(2);

let backersPayment= (income/8).toFixed(2);


console.log((income-backersPayment).toFixed(2))


};
 campaign (["23","8","14","30","16"]);