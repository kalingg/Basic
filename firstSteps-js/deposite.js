function deposite(input){

   let interest= Number(input[0])
   let estimatetTime= Number(input[1])
   let rate = Number(input[2])

   console.log(interest + estimatetTime *(((interest * rate)/ 12)/100))
}
deposite(["200","3","5.7"])
