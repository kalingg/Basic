function wordReader (input){

    let index =0;

    let command = input[index];



    while (command !== `Stop`){

        let name = input[index];
        console.log(name);
        index++;
        command= input[index];
        
        
       
    };
};
wordReader(["Nakov","SoftUni","Sofia","Bulgaria","SomeText","Stop","AfterStop","Europe","HelloWorld"]);
wordReader(["Sofia", "Berlin", "Moscow", "Athens", "Madrid", "London", "Paris", "Stop", "AfterStop"]);