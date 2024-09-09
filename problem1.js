function clculateMoney(ticketSale) {
    if(ticketSale < 0){
        return 'invalid number'
    }
    let result = ticketSale * 120 - (500 + 8 * 50);

    return result;
}
console.log(clculateMoney(10));
console.log(clculateMoney(1055));
console.log(clculateMoney(93));
console.log(clculateMoney(-15));
