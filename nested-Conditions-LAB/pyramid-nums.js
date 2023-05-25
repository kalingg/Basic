function pyradid (num){

    let current = 1;
    let isBigger=false;
    let printCurrentLine= ``;
    let number = Number (num[0])

    for (let rows=1; rows<=number; rows++){
        for(let cols=1; cols<=rows; cols++){
            if(current>number){
                isBigger=true;
                break;
            }
            printCurrentLine+=current+ ` `;
            current++
        }
        console.log(printCurrentLine);
        printCurrentLine = ``;
        if(isBigger){
            break;
        }
    }
    console.log(`------------------------`)
}
pyradid(["7"])
pyradid(["12"])
pyradid(["15"])