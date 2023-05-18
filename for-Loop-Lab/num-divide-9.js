function devide ( input ){

    let startNum = Number (input[0]);
    let endNum = Number (input[1]);
    let storing =0;


    for (let i=startNum; i<=endNum; i++){
        
        if (i %9==0 ){

        storing+= i;
        
        }
    }
        console.log(storing)
    
        for (let i=startNum; i<=endNum; i++){
        
            if (i %9==0 ){
    
            console.log(i);
            
            }
        }

}

devide(["100", "200"]);
