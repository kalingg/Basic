function grade(result) {
    let score = Number(result[0]);
  
    switch (true) {
      case score <= 2.99 && score >= 2.00:
        console.log("Bad grade");
        break;
  
      case score <= 3.49:
        console.log("Could be better");
        break;
  
      case score <= 4.49:
        console.log("Good");
        break;
  
      case score <= 5.49:
        console.log("Better");
        break;
  
      case score <= 6.00:
        console.log("Excellent");
        break;
  
      default:
        console.log("Invalid score");
        break;
    }
  }
grade(["6"]);