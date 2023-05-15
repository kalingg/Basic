function dress (input){

    let temperature = Number (input[0])
    let around = input[1];

    switch(around){

        case `Morning`:
        if(temperature >=10 && temperature<=18 ){
            console.log(`It's ${temperature} degrees, get your Swearshirt and Sneakers `);
        } else if (temperature >18 && temperature<=24){
            console.log(`It's ${temperature} degrees, get your Shirt and Moccasins `);
        } else if(temperature >=25){
            console.log(`It's ${temperature} degrees, get your T-Shirt and Sandals`);
        }
        break;

        case `Afternoon`:
            if(temperature >=10 && temperature<=18 ){
                console.log(`It's ${temperature} degrees, get your Shirt and Maccasins`);
            } else if (temperature >18 && temperature<=24){
                console.log(`It's ${temperature} degrees, get your T-Shirt and Sandals `);
            } else if(temperature >=25){
                console.log(`It's ${temperature} degrees, get your Swim Suit and BareFoot`);
            }
                break;
                
        case `Evening`:
            if(temperature >=10 && temperature<=18 ){
                console.log(`It's ${temperature} degrees, get your Shirt and Moccasins`);
            } else if (temperature >18 && temperature<=24){
                console.log(`It's ${temperature} degrees, get your Shirt and Moccasins `);
            } else if(temperature >=25){
                console.log(`It's ${temperature} degrees, get your Shirt and Moccasins`);
        break;

        }
    }
}
dress (["16","Morning"])
dress (["22","Afternoon"])
dress (["28", "Evening"])