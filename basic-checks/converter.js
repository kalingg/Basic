function converter(input){

    let num= Number (input[0]);
    let from = input[1];
    let to = input[2];

    if(from ==`m`){
        switch(to){
            case `cm`:
                console.log(num * 100);
                break;
            case `mm`:
                console.log(num * 1000)
                break;
        }
    }else if(from ==`cm`){
        switch(to){
            case `m`:
                console.log(num/100);
                break;

            case `mm`:
                console.log(num*10);
                break;
        }
    }else if(from ==`mm`){
        switch(to){
            case `cm`:
                console.log(num/10)
                break; 
            case `m`:
                console.log(num/ 1000)
                break;
        }

    }



}
converter(["12","mm","m"])
converter(["150","m","cm"])
converter(["45","cm","mm"])