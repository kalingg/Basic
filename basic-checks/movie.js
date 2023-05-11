function action(input ){

    let budget =Number (input[0]);
    let statists = Number (input[1]);
    let dressing = Number (input[2]); 
    let decoration = budget *0.1;
    
    if(statists >150){
        dressing*= 0.90;
    }

    let outcomeForTheMovie=budget- (statists*dressing+(decoration));

    if(outcomeForTheMovie>0){
        
        console.log(`Action! 
Wingard starts filming with ${outcomeForTheMovie.toFixed(2)} leva left.`);

    }else{
        
        console.log(`Not enough money!
Wingard needs ${((outcomeForTheMovie)*-1).toFixed(2)} leva more`)
    }



}
action (["20000","120","55.5"])
action (["15437.62","186","57.99"])
action (["9587.88","222","55.68"])