function boat(input){

let budget = Number(input[0]);
let season= input[1];
let fishMan=Number(input[2]);
let tripMoney= 0;

switch(season){

    case `Spring`:
        tripMoney= 3000;
        if(fishMan% 2==0){
            tripMoney*=0.95;
        }
        break;

    case `Summer`:
        tripMoney= 4200;
        if(fishMan% 2==0 ){
            tripMoney*=0.95;
        }
        break;
        
    case `Autumn`:
        tripMoney= 4200;
        break;

    case `Winter`:
        tripMoney= 2600;
        if(fishMan% 2==0){
            tripMoney*=0.95;
        }
        break;
    }
        if(fishMan <=6){
            tripMoney*=0.90;
        
        }else if(7<=fishMan && fishMan<=11){
            tripMoney*=0.85;
        
        }else if(fishMan>= 12){
            tripMoney*=0.75;
        }
    
    

        if(budget >= tripMoney){

                console.log(`Yes! you have ${(budget-tripMoney).toFixed(2)} leva left`);
        }else{
                console.log(`Not enough money! You need ${(tripMoney- budget).toFixed(2)} leva`);
};
};
boat(["3000","Summer","11"]);
boat(["3600","Autumn","6"]);
boat(["2000", "Winter", "13"]);