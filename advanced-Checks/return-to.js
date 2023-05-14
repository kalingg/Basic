function referece(input){

    let age=  Number (input[0]);
    let gender = input[1];

    if (gender ==`m` && age <16){
            console.log(`Master`);
        
    }else if (gender ==`m` && age >=16){
            console.log(`Mr.`);
        
    }else if(gender ==`f` && age <16){
            console.log(`Miss`);
        
    }else if (gender ==`f` && age >=16){
            console.log(`Ms.`);
        
    }else{
            console.log(`unknown`);
        }

}
referece (["12","f"]);
referece (["17", "m"]);
referece (["25", "f"]);
referece (["13.5", "m"]);