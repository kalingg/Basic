function number(input){

    let num = Number (input[0])

    if(-100<num && num<100 && num!=0){
        
        console.log(`YES`)
   
    }else{
        
        console.log(`NO`)
    }




};
number(["-25"]);
number(["0"]);
number(["25"]);