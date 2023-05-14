function day(input){

    let upcomingDay= input[0];

    switch(upcomingDay){
        case `Monday`:
        case `Tuesday`:
        case `Wednesday`:
        case `Thursday`:
        case `Friday`:
            console.log(`Working day`);
            break;

        case `Saturday`:
        case `Sunday`:
            console.log(`Weekend`);
            break;
            
        default:
            console.log(`Error`);
            break;
    }

}
day (["Monday"]);
day (["Sunday"]);
day (["April"]);