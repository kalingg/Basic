function swimmingTime(input){

    let record= Number (input[0]);
    let distance= Number (input[1]);
    let shortTime= Number (input[2]);

    let time = (distance*shortTime)+((distance/15)*12.5);

    if(time<record){
        console.log(`Yes, he succeeded! The new world recod is ${time.toFixed(2)}`)
    }else{
        console.log(`No, he failde! He was ${(time-record).toFixed(2)} seconds slower.`);
    }

}
swimmingTime(["10464","1500","20"]);
swimmingTime(["55555.67","3017","5.03"]);