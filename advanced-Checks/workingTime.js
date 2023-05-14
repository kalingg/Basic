function working(input){

    let time = Number (input[0]);
    let day = input[1];

    switch(day){

            case `Monday`:
            case`Tuesday`:
            case`Wednesday`:
            case`Thursday`:
            case`Friday`:
            case `Saturday`:

                if(time>=10 && time<=18){
                    console.log(`Open`);
                }else{
                    console.log(`Closed`);
                };
                    break;

            case `Sunday`:
                     console.log(`Closed`);
                    break;
    }
}
working(["11","Monday"]);
working(["19", "Friday"]);
working(["11", "Sunday"]);