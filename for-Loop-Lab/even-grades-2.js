function grade( num){

    let numbers = Number (num[0]);

    for (let i=0; i<=numbers; i++){
        
        if (i %2==0 && i !=0){
            console.log((2)**(i));
        
        }
        if ((i) ==1 && i !=0){
            console.log(`1`)
        }
       
    }

}
grade(["3"]);
grade(["4"]);
grade(["5"]);
grade(["6"]);
grade(["7"]);