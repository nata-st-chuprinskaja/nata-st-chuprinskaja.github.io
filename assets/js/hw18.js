let year = +prompt('Введите год');
if (year % 100 == 0){
    if (year % 400 == 0){alert ('Год высокосный');
    }else{alert ('Год не высокосный')}
}else if (year % 4 == 0){alert ('Год высокосный');
}else {alert ('Год не высокосный');
}

let growth = +prompt('Введите Ваш рост в метрах!');
let weight = +prompt('Введите Ваш вес в кг');

let bodymassindex =weight/(growth**2);
bodymassindex = Math.round(bodymassindex*100)/100;
alert(`Индекс массы тела: ${bodymassindex}`);

if (bodymassindex < 16){
    alert ('Выраженный дефицит массы тела');
}else if (bodymassindex <= 18.5){
    alert ('Недостаточная (дефицит) масса тела');
}else if (bodymassindex <= 25){
    alert ('Норма');
}else if (bodymassindex <= 30){
    alert ('Избыточная масса тела (предожирение)');
}else if (bodymassindex <= 35){
    alert ('Ожирение');
}else if (bodymassindex <= 40){
    alert ('Ожирение резкое');
}else {
    alert ('Очень резкое ожирение');
}