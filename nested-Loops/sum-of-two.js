function magition (input){

    let start = Number (input[0]) 
    let end = Number (input[1])
    let magicNumber = Number (input[2])
    
    let combination=1

    let matchFound=false;

    for(let x =start; x<=end; x++){
            
        for (let y =start; y<= end; y++){
            
                if(y+x === magicNumber){
   
                    console.log(`Combination N: ${combination}`);
            
                    console.log(`${x} + ${y} = ${magicNumber}`)

                    matchFound=true;
                    return;
    
                }
                combination++;
            }
        }    
            
            if(!matchFound){
                console.log(`${combination-1} combinations - neither equals ${magicNumber}`)
    }
}

magition(["1","10","5"])
magition(["23","24","20"])
magition(["88", "888", "1000"])
magition(["88", "888", "2000"])