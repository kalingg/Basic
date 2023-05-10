function fruitMarket (input){

let strawberriesPrice= Number (input[0])
let bananasKG= Number (input[1])
let orangeKG= Number (input[2])
let raspberriesKG= Number (input[3])
let strawberriesKG= Number (input[4])

let raspberriesPrice= (strawberriesPrice/2);
let orangePrice= (raspberriesPrice*0.60);
let bananasPrice= (raspberriesPrice*0.20);
let strawberries= (Number (input[0]));

let totalPrice= strawberries* strawberriesKG + raspberriesPrice* raspberriesKG + orangePrice *orangeKG +bananasPrice* bananasKG;

console.log(totalPrice.toFixed(2))


}

fruitMarket (["48","10","3.3","6.5","1.7"])
fruitMarket (["63.5","3.57","6.35","8.15"])