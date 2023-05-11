function figure(parameter){

let figType = parameter[0];
let firstParam = Number (parameter[1]);
let secondParam= Number (parameter [2]);

switch(figType){

    case `square`:

        console.log((firstParam * firstParam).toFixed(3));
    break;
    
    case `rectangle`:

        console.log((firstParam * secondParam).toFixed(3));
    break;

    case `circle`:

        console.log((Math.PI * Math.pow(firstParam, 2)).toFixed(3));
    break;

    case `triangle`:

        console.log(((firstParam * secondParam)/2).toFixed(3));
    break;
    
}   


};
figure(["square","5"]);
figure(["rectangle", "7", "2.5"]);
figure(["circle", "6"]);
figure(["triangle", "4.5", "20"]);