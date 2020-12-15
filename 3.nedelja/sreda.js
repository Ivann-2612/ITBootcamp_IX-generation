//1. Написати функцију која за параметар прима број сати (0-24) и у зависности од доба дана исписује поруке: Добро јутро , Добар дан или Добро вече.
function brojSati(a) {
    if(a >=0 && a<= 12){
        console.log('Dobro jutro');
    }else if(a >=12 && a < 18){
        console.log('Dobar dan');
    }else{
        console.log('Dobro vece');
    }
}
console.log(brojSati(19));
//2. Написати функцију која израчунава цену пице по квадратном центиметру (параметри функције су полупречник у цм, и цена пице)
function cenaPicePoCm2(cenaPice,poluprecnikUCm) {
    let R = 32
    poluprecnikUCm = R/2
    let P = (poluprecnikUCm**2) * Math.PI
    return P/cenaPice
}

console.log(cenaPicePoCm2(1000));