function num(firstNum, secondNum){

let print  = ``;
for (let i = firstNum; i<=secondNum; i++){

    let currentNum= `` + i;
    let oddSum = 0;
    let evenSum = 0;

    for(let j=0;j<= currentNum.length; j++){

        let currentDigit= Number (currentNum.charAt(j));
        if(j%2===0){
            evenSum+=currentDigit;
        }else{
            oddSum+=currentDigit;
        };
    };
    if(oddSum ===evenSum){
        print+=` ${i}`
    };

};    
console.log(print);
};
num("100000","100050");
num("123456","124000");
num("299900", "300000");
num("100115", "100120");