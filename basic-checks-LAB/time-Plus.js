function time(input){

    let hours = Number (input[0]);
    let minutes = (Number (input[1]))+15;

    if(minutes>=60){
        hours++;
    minutes=minutes-60;
    }
    
    if(hours>23){
        hours=0
    }

    if(minutes<10){
        minutes= `0`+minutes
    }

    console.log(`${hours}:${minutes}`);
}
time (["1","46"]);
time  (["0", "01"])
time(["23", "59"])
time(["11", "08"])
time (["12", "49"])