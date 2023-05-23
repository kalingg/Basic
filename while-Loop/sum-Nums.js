function sum(nums){

let biggerNum= Number (nums[0]);
let sum = 0;

let index=1

while (true){
    
    let ind= Number (nums[index])
    sum+=ind;

    index++
    if(biggerNum<= sum){

        break;
    }
}

console.log(sum)
};
sum(["100","10","20","30","40"]);
sum(["20", "1", "2", "3", "4", "5", "6"]);