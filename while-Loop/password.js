function pass (word){

    let name = word[0];
    let password = word[1];
    
    let data = word [2];
    let index = 3;


    while(data !==password ){

        data = word[index];
        index++;
    };

console.log(`Welcome ${name}`);


};
pass(["Nakov","1234","Pass","1324","1234"]);
pass(["Gosho", "secret", "secret"]);
