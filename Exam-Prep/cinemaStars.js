function cinema(input){

let butget= Number (input[0]);

let row=0;

for(let i=1; i< input.length; i++){

    if(input[i] !=`ACTION` || butget>0){

    let check =Number (input[i]);

    if (!isNaN(input[i])){
        
        let payment = check;
        
        while(payment - butget !=0){

            butget-=payment;
            break;

        }

        if(butget <=0){
            console.log(`We need ${(butget).toFixed(2)} leva for our actors.`)
        }
    }else{

        let actorName= input[i];

        if (actorName.length >15){

            butget*=0.80;
        };
    };  
};
};
if (butget>=0){
    console.log(`We are left with ${butget} leva`);
};
};
cinema(["90000","Christian Bale","70000.50","Leonard DiCaprio","Kevin Spacey","24000.99"]);
cinema(["170000","Ben Affleck","40000.50","Zahari Baharov","80000","Tom Hanks","2000.99","ACTION"]);
