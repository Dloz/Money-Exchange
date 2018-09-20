// PLEASE DON'T change function name

module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
let money = {
    H: 0, Q:0, D:0, N:0, P:0
}
if (currency > 10000)
    return {"error": "You are rich, my friend! We don't have so much coins for exchange"}
while (currency - 50 >= 0) {
    money.H++;
    currency-=50;
}
while (currency - 25 >= 0) {
    money.Q++;
    currency-=25;
}
while (currency - 10 >= 0) {
    money.D++;
    currency-=10;
}
while (currency - 5 >= 0) {
    money.N++;
    currency-=5;
}
while (currency - 1 >= 0) {
    money.P++;
    currency-=1;
}
if (!money.Q) delete money.Q;
if (!money.D) delete money.D;
if (!money.P) delete money.P;
if (!money.N) delete money.N;
if (!money.H) delete money.H;
return money;
    
}
