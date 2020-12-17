let winterDays = [-48, -46, 48, 27, -20, -35, 43, 4, 9, 10, 41, -46, -4, 0, -38, -49, 25, -46, -48, -23, -25, -22, 12, 38, 19, -20, 26, 4, 19, 23, 26, -41, 4, -13, -9, -11, -7, 38, 27, 41, 14, -35, -38, -44, -44, -22, -24, 29, -32, 41, 7, -25, 3, 27, -45, 10, 48, 8, -34, -49, 17, -16, 41, -11, -50, -6, -34, 20, 14, -18, 39, -28, -33, -27, -48, 40, -37, -44, 0, 46, 36, -34, -50, 8, -3, 26, 40, 10, -36, 24];

let amount = 0;
for (let i = 0; i < winterDays.length; i++){
    if((winterDays[i]>=0) && (winterDays[i+1]<0)){
        amount= amount+1;
    }
}
console.log(`Количество морозных дней ${amount}`);

let duration = [];
let quantity = 1;

for (let i = 0; i < winterDays.length; i++){
    if((winterDays[i]<0) && (winterDays[i+1]<0)){
        quantity = quantity + 1;
        duration.push(quantity);
    }else{
        quantity = 1;
    }
}

let max = duration[0];
for (let i = 0; i < duration.length; i++){
    if(duration[i]>max){
        max=duration[i];
    }
}
console.log(`Максимальный период заморозков ${max} дней`);

let Bitcoin = [10,18,33,7,31,3,8,22,29,7,8];
let profit = [];
let profit1 = 0;
for (let n = 0; n < Bitcoin.length-1;){
    for (let i = 0; i < Bitcoin.length; i++){
        profit1 = Bitcoin[i] - Bitcoin[n];
        profit.push(profit1);
    }Bitcoin.shift(1);
}  
let maximum = profit[0];
for (let i = 0; i < profit.length; i++){
    if(profit[i]>maximum){
        maximum=profit[i];
    }
}
console.log(`Максимальная прибыль ${maximum}$`);