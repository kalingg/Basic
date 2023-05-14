function shop(input){

let drink = input[0];
let city = input[1];
let amount = Number (input[2]);

if(city== `Sofia`){

    switch(drink){
    case `coffee`:
        console.log((amount*0.50). toFixed(2));
        break;
    case `water`:
        console.log((amount*0.80). toFixed(2));
        break;
    case `beer`:
        console.log((amount*1.20). toFixed(2));
        break;
    case `sweets`:
        console.log((amount*1.45). toFixed(2));
        break;
    case `peanuts`:
        console.log((amount*1.60). toFixed(2));
        break;
    }
}else if(city== `Plovdiv`){

    switch(drink){
    case `coffee`:
        console.log((amount*0.40). toFixed(2));
        break;
    case `water`:
        console.log((amount*0.70). toFixed(2));
        break;
    case `beer`:
        console.log((amount*1.15). toFixed(2));
        break;
    case `sweets`:
        console.log((amount*1.30). toFixed(2));
        break;
    case `peanuts`:
        console.log((amount*1.50). toFixed(2));
        break;
    }
    }else if(city== `Varna`){

        switch(drink){
        case `coffee`:
            console.log((amount*0.45). toFixed(2));
            break;
        case `water`:
            console.log((amount*0.70). toFixed(2));
            break;
        case `beer`:
            console.log((amount*1.10). toFixed(2));
            break;
        case `sweets`:
            console.log((amount*1.35). toFixed(2));
            break;
        case `peanuts`:
            console.log((amount*1.55). toFixed(2));
            break;
        }
    }
}
shop(["coffee","Varna","2"]);
shop(["peanuts", "Plovdiv", "1"])
shop(["beer", "Sofia", "6"])
shop(["water", "Plovdiv", "3"])
shop(["sweets", "Sofia", "2.23"])