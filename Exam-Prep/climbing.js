function climbing(input){

    let people =0;

    let group1 =0;
    let group2 =0;
    let group3 =0;
    let group4 =0;
    let group5 =0;

    for (let i=0; i<=input.length; i++){

        let selection = Number (input[i]);

            if (selection <=5){
                group1+=selection;
                people+=selection;
        
            }else if (selection >= 6 && selection <= 12){
                group2+=selection;
                people+=selection;
            
            }else if(selection >= 13 && selection <= 25){
                group3+=selection;
                people+=selection;
           
            }else if(selection >= 26 && selection <=40){
                group4+=selection;
                people+=selection;
           
            }else if(selection > 40){
                group5+=selection;
                people+=selection;
            };

    };
    console.log(`${((group1/people)*100).toFixed(2)} % of all the people will climb Musala`);
    console.log(`${((group2/people)*100).toFixed(2)} % of all the people will climb Monblon`);
    console.log(`${((group3/people)*100).toFixed(2)} % of all the people will climb Kilimadjaro`);
    console.log(`${((group4/people)*100).toFixed(2)} % of all the people will climb K2`);
    console.log(`${((group5/people)*100).toFixed(2)} % of all the people will climb Everest`);

    console.log(`-------------------------------------------------------------------------`);

}
climbing ([`10`,`10`,`5`,`1`,`100`,`12`,`26`,`17`,`37`,`40`,`78`]);
climbing (["5", "25", "41", "31", "250", "6"]);