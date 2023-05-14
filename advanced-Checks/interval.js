function incomeNum(input){


   for (let i =0; i<input.length; i++){
    let num =Number (input [i]);
    if(num > -100 && num < 100 && num != 0 ){
        console.log(`Yes`)
    }else{
        console.log(`No`)
    }
   }

}
incomeNum([`-25`,`0`, `25`]);
