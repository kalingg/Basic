function sum (input){

    let str= input;
    let result=0;


    for(let num=0; num < str.length; num++){
        
        for(let j=0; j<str[num].length; j++){
            
            let strNum = (str[num][j]);
            result+= Number (strNum);
            };
     };



console.log(`The sum of the digits is: ${result}`);
};

sum([`1234`]);
sum([`564891`]);
