function home (input){

    let flower= input[0];
    let amount= Number (input[1]);
    let budget= Number (input[2]);
    let flowerMoney=0; 

    switch(flower){

        case `Roses`:
            flowerMoney+=5 *amount;
            if(amount>80){
                flowerMoney*=0.90;
            }
            break;
        case `Dahlias`:
            flowerMoney+=3.80 *amount;
            if(amount>90){
                flowerMoney*=0.85;
            }
            break;
        case `Tulips`:
            flowerMoney+=2.80 *amount;
            if(amount>80){
                flowerMoney*=0.85;
            }
            break;
        case `Narcissus`:
            flowerMoney+=3 *amount;
            if(amount<120){
                flowerMoney*=1.15;
            }
            break;
        case `Gladiolus`:
            flowerMoney+=2.50 *amount;
            if(amount<80){
                flowerMoney*=1.20;
            }
            break;
    }

    if(budget> flowerMoney){
        console.log(`Hey, you have a great garden with ${amount} ${flower} and ${(budget-flowerMoney).toFixed(2)} leva left `);

    }else{
        console.log(`Not enough money, you need ${(flowerMoney-budget).toFixed(2)} leva more`)
    }


}

home(["Roses","55","250"])
home(["Tulips","88","260"])
