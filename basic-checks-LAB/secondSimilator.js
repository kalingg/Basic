function seconds(input){

    let racerOne = Number (input[0]);
    let racerTwo =Number (input[1]);
    let racerThree =Number (input[2]);

    let sumOfSeconds = ((racerOne + racerTwo+ racerThree)%60).toFixed(0); 
    let sumOfMinutes = ((racerOne+ racerTwo + racerThree) / 60).toFixed(0);
   
    if(sumOfSeconds <10){
        console.log(`${sumOfMinutes}:0${sumOfSeconds}`)
    }else {
        console.log(`${sumOfMinutes}:${sumOfSeconds}`)
    }



}
seconds(["50", "50", "49"])