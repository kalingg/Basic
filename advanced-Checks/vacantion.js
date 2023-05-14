function vacantion (input){

    let nights = (Number (input[0]))-1;
    let room = input[1];
    let rating = input[2];
    let budget = 0;


    switch(room){

        case `room for one person`:
            budget = 18*nights;
            break;
        case `apartment`:
                
                if(nights<10){
                    budget= (25*nights)*0.70;
                  
                }else if(nights >= 10 && nights<=15){
                    budget= (25*nights) * 0.65;
                
                }else if (nights >15){
                    budget= (25*nights)* 0.50;
                }
                break;
        case `president apartment`:
    
        if(nights<10){
            budget= (35*nights)*0.90;
        
        }else if(nights >= 10 && nights<=15){
            budget= (35*nights) * 0.85;
            
        }else if(nights >15){
            budget= (35*nights)* 0.80;
    
            }
            break;
    }

        if(rating== `positive`){
            budget*=1.25;
        }else{
            budget*=0.90;
        }
        console.log(budget.toFixed(2));
}
vacantion (["14","apartment","positive"]);
vacantion(["30","president apartment","negative"]);
vacantion(["12", "room for one person", "positive"]);
vacantion (["2", "apartment", "positive"]);