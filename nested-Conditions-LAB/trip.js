function trip (input){

    let budget= Number (input[0]); 
    let season= input[1];
    let place = ``;
        
        if(budget<=100){ 
            place = `Bulgaria`;
            if(season==`summer`){
                budget=budget*0.30;
            }else if(season== `winter`){
                budget=budget*0.70;
            }
        } else if (budget<=1000){
                    place = `Balakns`;
                    if(season==`summer`){
                        budget=budget*0.40;
                    }else if(season== `winter`){
                        budget=budget*0.80;
                    }
                }else if(budget>1000){
                            place = `Europe`;
                            if(season==`summer`){
                                budget=budget*0.90;
                            }else if(season== `winter`){
                                budget=budget*0.90; 
                            }
                        }
    

    if(season== `winter` ){
        console.log(`Somewhere in ${place}\n  "Hotel"${budget.toFixed(2)}`);
    }else if(season== `summer` ){
        console.log(`Somewhere in ${place}\n "Camp" ${budget.toFixed(2)}`);
    }
}
trip(["50", "summer"]);
trip(["75", "winter"]);
trip(["312", "summer"]);
trip(["678.53", "winter"]);
trip(["1500", "summer"]);