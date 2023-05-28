function catWalk(input){

    let time= Number (input[0]);
    let walks= Number (input[1]);
    let caloriesPerDay= Number (input[2]);

    let burnedCalories = (time*5)*walks


    if((caloriesPerDay* 0.50) <= burnedCalories){

        console.log(`Yes, the walk of your cat is enough.Burned calories per day: ${burnedCalories}.`);

    }else{
        
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burnedCalories}.`)
    
    }

}
catWalk([`30`,`3`,`600`]);
catWalk([`15`,`2`,`500`]);
catWalk([`30`,`3`,`600`]);
catWalk([`15`, `2`,`500`]);