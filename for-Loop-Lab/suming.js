function sum(input) {
    let word = input;
    let result = 0;
  
    for (let i = 0; i < word.length; i++) {
      for (let j = 0; j < word[i].length; j++) {
        let index = word[i][j];
  
        switch (index) {

         case 'a':
         case 'A':
            result += 1;
        break;
          
         case 'e':
         case 'E':
            result += 2;
        break;
         
         case 'i':
         case 'I':
            result += 3;
        break;
         
         case 'o':
         case 'O':
            result += 4;
        break;
         
         case 'u':
         case 'U':
            result += 5;
        break;
        
        };
      };
    };
  
    console.log(result);
  };
sum(["hello"]);
sum(["hi"]);
sum(["bamboo"]);
sum(["beer"]);