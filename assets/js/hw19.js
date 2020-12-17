for (let i = 0; i <= 100; i++) {     
    console.log(`Выводим число от 0 до 100: ${i}`);
}

for (let i1 = 21; i1 <= 57; i1++) {     
    console.log(`Выводим число от 21 до 57: ${i1}`);
}

for (let i2 = 0; i2 <= 100; i2++) {
    if (i2 % 2 == 0) {
        console.log(`Выводим четные числа от 0 до 100: ${i2}`);   
    }
}

let sum = 0;
for (let i3 = 0; i3 <= 100; i3++) {
    sum = sum + i3;
}
console.log(`Выводим сумму чисел от 1 до 100: ${sum}`)

for (let i4 = 3; i4 <= 1000; i4++) {
    for (let j = 2; j < i4; j++) {
        if (i4 % j == 0) {
            break;
        }else if(i4 == (j + 1)){
            console.log(`Выводим простые числа от 3 до 1000: ${i4}`)
        }
    }  
}