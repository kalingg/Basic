function points(input){

let score = Number (input[0])
let pointsGathered = 0;

    if(score <= 100){
        pointsGathered+= 5;
            
    }else if (score > 100 && score < 1000){
        pointsGathered+= score *0.20;

    }if(score > 1000){
        pointsGathered+= score *0.10;
        }
                        
        if(score %2 == 0){
            pointsGathered+= 1;
        
        }else if(score % 10 == 5){
            pointsGathered+=2;
        }


console.log(pointsGathered);
console.log(score + pointsGathered);
}
points(["20"]);
points(["175"]);
points(["2703"]);
points(["15875"]);
