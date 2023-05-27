function agency(name, adultTcik, childrenTick, price, service){

let childrenPrice= (price*0.30) + service;
let adultPrice = price + service;


let profit = (childrenPrice * childrenTick) + (adultTcik * adultPrice);

console.log(`The profit of your agency from ${name} tickets is ${((profit * 0.20).toFixed(2))} lv.`);
};
agency(`WizzAir`,15,5,120,40);
agency(`Ryanair`,60,23,158.96,39.12);