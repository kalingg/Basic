function incomeDay (input){

    let num = input[0]
    switch(num){

        case '1':
            console.log(`Monday`);
        break;
        
        case `2`:
            console.log(`Tuesday`);
        break;
        
        case `3`:
            console.log(`Wednesday`);
        break;
        
        case `4`:
            console.log(`Thursday`);
        break;
        
        case `5`:
            console.log(`Friday`);
        break;
        
        case `6`:
            console.log(`Saturday`);
        break;
        
        case `7`:
            console.log(`Sunday`);
        break;
        
        default:
            console.log(`Error. Enter a number, from 1-7 !`);
        break;
    }

 

};
incomeDay(['1']);
incomeDay(['2']);
incomeDay(['3']);
incomeDay(['4']);
incomeDay(['5']);
incomeDay(['6']);
incomeDay(['7']);
incomeDay(['18']);