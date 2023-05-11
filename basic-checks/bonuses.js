function bonus (input){

    let inputNumber = Number (input[0]);
    let update =0.0;

    if(inputNumber<=100){
        update+=5;
   
    }else if(inputNumber>100){
        update+=inputNumber*0.2;
   
    }else if(inputNumber>1000){
        update+=inputNumber*0.1;
    }

    if(inputNumber%2==0){   
        update+=1;
    
    }else if(inputNumber%10==5){
        update+=2
    }

    console.log(update);
    console.log(update +inputNumber);
}
bonus(["2703"]);