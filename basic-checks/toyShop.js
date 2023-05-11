function shop (input){

    let tripMoney= Number (input[0])
    let puzzels = Number (input[1]) ;
    let talkingDolls= Number (input[2]);
    let bear=Number (input[3]) ;
    let minions=Number (input[4]);
    let trucks=Number (input[5]);


    let totalMoney = (puzzels*2.60 + talkingDolls * 3+ bear*4.10+ minions* 8.20+ trucks*2)* 0.90;
    let toyAmount= puzzels + talkingDolls+bear+minions+trucks;
    
    if (toyAmount >=50){

        totalMoney= totalMoney*0.75;
    }

    if(totalMoney>=tripMoney){

        console.log(`Yes! ${(totalMoney-tripMoney).toFixed(2)} lv left`)
    }else{
        console.log(`Not enough money! ${(tripMoney-totalMoney).toFixed(2)} lv needed.`)
    }
}
shop (["40.8", "20", "25","30", "50", "10"]);
shop (["320", "8", "2", "5","5", "1"])