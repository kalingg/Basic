function cimena (input){

let projectionTipe= input [0];
let seats = Number (input [1]);
let rows = Number  (input [2]);


switch(projectionTipe){

    case `Premiere`:
        console.log((12.00 * (seats * rows)).toFixed(2) + ` BGN`);
    break;

    case `Normal`:
        console.log((7.50 * (seats * rows)).toFixed(2) + ` BGN`);
    break;

    case `Discount`:
        console.log(5.00 * ((seats * rows)).toFixed(2) + ` BGN`);
    break;
    }
}
cimena(["Premiere","10","12"]);
cimena(["Normal", "21", "13"]);
cimena(["Discount", "12", "30"]);
