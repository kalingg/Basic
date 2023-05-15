function numbers (input){

let num1= Number (input[0]); 
let num2= Number (input[1]);
let symbol= input[2];

let result=0;


switch(symbol){

    case `+`:
        result=num1+num2;
        
        if(result%2==0){
            console.log(`${num1} + ${num2} = ${result} - even`);
        }else{
            console.log(`${num1} + ${num2} = ${result} - odd`);
        };
        break;

    case `-`:
        result=num1-num2;

        if(result%2==0){
            console.log(`${num1} - ${num2} = ${result} - even`);
        }else{
            console.log(`${num1} - ${num2} = ${result} - odd`);
        };
        break;
    
    case `*`:
        result=num1*num2;

        if(result%2==0){
            console.log(`${num1} * ${num2} = ${result} - even`);
        }else{
            console.log(`${num1} * ${num2} = ${result} - odd`);
        };
        break;

    case `/`:
        result=num1/ num2
        if(num2==0){
            console.log(`Cannot devide ${num1} by zero`)
        }else{ 
            console.log(`${num1} / ${num2} = ${result}`)
        }
        break;

    case `%`:
        result=num1% num2;
        if(num2==0){
            console.log(`Cannot devide ${num1} by zero`);
        }else{
            console.log(`${num1} % ${num2} = ${result}`);
        };
        break;

        
    }

}
numbers(["10","12","+"]);
numbers(["10","1","-"]);
numbers(["7","3","*"]);
numbers(["123", "12", "/"]);
numbers(["10", "3", "%"]);
numbers(["112", "0", "/"]);
numbers (["10", "0", "%"]);