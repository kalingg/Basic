function hotel(input) {
    let month = input[0];
    let days = Number(input[1]);

    if (month == 'May' || month == 'October') {
        
        if (days > 7 && days <= 14) {
            console.log(`Apartment: ${((65 * days) * 0.90).toFixed(2)} lv.`);
            console.log(`Studio: ${(50 * days).toFixed(2)} lv.`);
        } else if (days > 14) {
            console.log(`Apartment: ${((65 * days) * 0.70).toFixed(2)} lv.`);
            console.log(`Studio: ${((50 * days) * 0.90).toFixed(2)} lv.`);
        } else {
            console.log(`Apartment: ${(65 * days).toFixed(2)} lv.`);
            console.log(`Studio: ${(50 * days).toFixed(2)} lv.`);
        }
    } else if (month == 'June' || month == 'September') {
        
        switch (true) {
            case days >= 14:
                console.log(`Apartment: ${((68.70 * days) * 0.80).toFixed(2)} lv.`);
                console.log(`Studio: ${((72.50 * days) * 0.90).toFixed(2)} lv.`);
                break;

            default:
                console.log(`Apartment: ${(68.70 * days).toFixed(2)} lv.`);
                console.log(`Studio: ${(72.50 * days).toFixed(2)} lv.`);
                break;
        }
    } else if (month == 'July' || month == 'August') {
        console.log(`Apartment: ${(77 * days).toFixed(2)} lv.`);
        console.log(`Studio: ${(76 * days).toFixed(2)} lv.`);
    }
}

hotel(["May", "15"]);
hotel(["June", "14"]);
hotel(["August", "20"]);