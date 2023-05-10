function fishtank(input){

    let length= Number (input[0]);
    let width= Number (input[1]);
    let height= Number (input[2]);
    let percentage= (Number (input[3]))* 0.01 ;

    
    let tank = (length * width* height)* 0.001;
    let totalCubM= tank* (1-percentage)
    
    console.log(totalCubM)
}
fishtank(["85","75","47","17"]);
fishtank (["105","77","89","18.5"])