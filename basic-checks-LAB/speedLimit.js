function speed (input){


    let speeding = Number (input[0])
        
        if (speeding <=10){
            console.log(`slow`);
       
        }else if(speeding >10 && speeding <50){
            console.log(`average`);
       
        }else if(speeding >50 && speeding<150){
        console.log(`fast`);
        
        }else if(speeding >150 && speeding <1000){                             
        console.log(`ultra fast`);            
        
        }else if(speeding>1000){        
            console.log(`extremely fast`);
        }
                
    
}
speed (["8"]);
speed (["49.5"]);
speed (["126"]);
speed(["160"]);
speed(["3500"]);
