function number (input){

    let num = Number (input[0])
    
    if(num>=100 && num<=200 || num===0){
        console.log(`Valide`);
    }else{
        console.log(`Invalide`);
    }
}
number(["75"]);
number(["150"]);
number(["220"]);
number(["199"]);
number(["-1"]);
number(["200"]);
number(["100"]);
number(["0"]);
