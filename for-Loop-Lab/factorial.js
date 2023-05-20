function factorial(input){

let num = Number (input[0])

let finalNum = 1 

for (let i=2; i<=num; i++){
    
    finalNum*= i
    }
    console.log(finalNum)
}
factorial (["4"])
factorial (["8"])