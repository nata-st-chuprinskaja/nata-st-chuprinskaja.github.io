let a = +prompt('Введите сторону квадрата');
let P = a*4;
alert(`Периметр квадрата = ${P}`);
console.log(P);

let length = +prompt('Введите длинну ребра куба');
let CubVolume = length*length*length;
let CubArea = length*length*6;
alert(`Объем куба = ${CubVolume}, площадь его боковой поверхности ${CubArea}`);
console.log(CubArea);

let radius = +prompt('Введите радиус окружности');
let circuit = Math.round(radius*Math.PI*2*100)/100;
let CircleArea = Math.round(Math.PI*radius*radius*100)/100;
alert(`Длинна окружности = ${circuit}, площадь круга ${CircleArea}`);
console.log(circuit, CircleArea);

let V = +prompt('Введите объем вещества в кг');
let M = +prompt('Введите массу вещества в куб.м.');
let density = M/V;
alert(`Плотность вещества = ${density}`);
console.log(density);

let population = +prompt('Введите кол-во жителей в государстве');
let area = +prompt('Введите площать территории кв.км.');
let PopulationDensity = population/area;
alert(`Плотность населения вашего государства = ${PopulationDensity} на 1кв.км`);
console.log(PopulationDensity);

let sideA = +prompt('Введите сторону a прямоугольного треугольника');
let sideB = +prompt('Введите сторону b прямоугольного треугольника');
let lengthHypotenuse = Math.round(Math.sqrt(sideA*sideA+sideB*sideB)*100)/100;
alert(`Длинна гипотинузы = ${lengthHypotenuse}`);
console.log(lengthHypotenuse);

let valueA = +prompt('Введите значение а');
let valueY = Math.round(((valueA*valueA+10)/Math.sqrt(valueA*valueA+1))*100)/100;
alert(`Значение y = ${valueY}`);
console.log(valueY);