function salary(input){

    let monthSelary=  Number (input[1]);


    for (let i=2; i< input.length; i++){

        let tab= input[i];
        
        switch(tab){

            case `Facebook`:
            case `facebook`:
            monthSelary-=150;
            break;

            case `Instagram`:
            case `instagram`:
            monthSelary-= 100;
            break;

            case `Reddit`:
            case `reddit`:
            monthSelary-=50;
            break;
        }

    }
if(monthSelary ==0){
console.log(`You have lost your salary.`);

}else{
    console.log(monthSelary)
}


};

salary(["10","750","Facebook","Dev.bg","Instagram","Facebook","Reddit","Facebook","Facebook"])
salary(["3","500","Github.com","Stackoverflow.com","softuni.bg"])
salary(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"])