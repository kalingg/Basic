function countWords(str) {
    let count = 0;
    let word = '';
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
  
      
      if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || char === "'") {
        word += char;
      }
      
      else if (char === ' ' || char === '.' || char === ',' || i === str.length - 1) {
        
        if (word.length > 0) {
          count++;
          word = '';
        }
      }
    }
  
    console.log(count);
  }

  countWords ("This message has exactly eleven words.One more as it's allowed!");

  countWords ("This message has ten words and you can send it!");