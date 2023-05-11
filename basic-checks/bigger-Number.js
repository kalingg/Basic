function num(input){

    let firstNum= Number (input[0]);
    let secondNum= Number (input[1]);


    if(firstNum>secondNum){
        console.log(firstNum);

    }else if(firstNum<secondNum){
        console.log(secondNum);

    }else if (firstNum===secondNum){
        console.log(`Even`);
    };
};

num(["5","3"])
num(["3", "5"])
num(["10", "10"])
num(["-5", "5"])