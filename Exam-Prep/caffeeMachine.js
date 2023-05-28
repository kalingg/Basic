function caffeeMachine(input){

    let drink = input[0];
    let sugar = input[1];
    let quantity = Number (input[2]);

    let totalPrice=0;

    switch(drink){

        case `Espresso`:

            switch(sugar){

                case `Without`:
                    totalPrice=0.90 * quantity;
                    
                    if (sugar == `Without`){
                        totalPrice*=0.65;
                
                    };
                    
                    break;

                case `Normal`:
                    totalPrice=1.00 * quantity;
                    break;

                case `Extra`:
                    totalPrice=1.20 * quantity;
                    break;

            };
            break;

        case `Cappuccino`:

            switch(sugar){

                case `Without`:
                    totalPrice=1.00 * quantity;
                    
                    if (sugar == `Without`){
                        totalPrice*=0.65;
                
                    };
                    
                    break;

                case `Normal`:
                    totalPrice=1.20 * quantity;
                    break;

                case `Extra`:
                    totalPrice=1.60 * quantity;
                    break;

            };
            break;

        case `Tea`:

            switch(sugar){
                
                case `Without`:
                    totalPrice=0.50 * quantity;
                    
                    if (sugar == `Without`){
                        totalPrice*=0.65;
                
                    };
                    
                    break;

                case `Normal`:
                    totalPrice=0.60 * quantity;
                    break;

                case `Extra`:
                    totalPrice=0.70 * quantity;
                    break;

            };
            break;
    };

    if (drink == `Espresso` && quantity>= 5){
        totalPrice*=0.75;
    
    }else if (totalPrice > 15){
        totalPrice*=0.80;
    };

console.log(`You bought ${quantity} cups of ${drink} for ${(totalPrice).toFixed(2)} lv.`);

};

caffeeMachine ([`Espresso`,`Without`,`10`]);
caffeeMachine([`Cappuccino`,`Normal`,`13`]);
caffeeMachine ([`Tea`,`Extra`,`3`]);