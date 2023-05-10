function rearing (input){


let pagesNumber = Number (input[0]);
let pagesHour = Number (input[1]);
let days = Number (input[2]);


    let timeForABook = pagesNumber / pagesHour;

    let hoursADay = timeForABook/ days

    console.log(hoursADay)
}
rearing (["212","20","2"])
rearing (["432","15","4"])