function calc(){
    let growth = +growthInput.value;
    let weight = +weightInput.value;
    let bodymassindex;
    let diagnosis;
    if (growth<3){
        bodymassindex = weight/(growth**2);
        bodymassindex = Math.round(bodymassindex*100)/100;
    }else {
        bodymassindex = weight/((growth/100)**2);
        bodymassindex = Math.round(bodymassindex*100)/100;
    }
    bodymassindexPlace.innerHTML = bodymassindex;

    if (bodymassindex < 16){
        diagnosisPlace.innerHTML ='Выраженный дефицит массы тела';
    }else if (bodymassindex <= 18.5){
        diagnosisPlace.innerHTML = 'Недостаточная (дефицит) масса тела';
    }else if (bodymassindex <= 25){
        diagnosisPlace.innerHTML = 'Норма';
    }else if (bodymassindex <= 30){
        diagnosisPlace.innerHTML = 'Избыточная масса тела (предожирение)';
    }else if (bodymassindex <= 35){
        diagnosisPlace.innerHTML = 'Ожирение';
    }else if (bodymassindex <= 40){
        diagnosisPlace.innerHTML = 'Ожирение резкое';
    }else {
        diagnosisPlace.innerHTML = 'Очень резкое ожирение';
    }
    

}