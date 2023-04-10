console.group('Cuadrado');


const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

function calcularCuadrado(lado){
    return{
        perimetro: lado*4,
        area: lado*lado,
    };
}

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado
});

console.groupEnd('Cuadrado');

console.group('Triangle');

const lado1Triangulo = 6;
const lado2Triangulo = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = lado1Triangulo  + lado2Triangulo + baseTriangulo;
const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;

function calcularTriangulo(lado1,lado2,base,altura){
    return{
        perimetro: lado1 + lado2 + base,
        area: (base*altura)/2,
    };
}

function calculateHeightTriangle(side1,base){
    if(side1 == base){
        console.warn('Este no e un triangulo isosceles');
    } else{
        // h = raiz cuadrada(lado1**2 -(b**2)/4
        const altura = Math.sqrt(Math.pow(side1,2)-(Math.pow(base,2)/4));
        return altura;
    }
}

console.log({
    lado1Triangulo,
    lado2Triangulo,
    baseTriangulo,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo,
});

console.groupEnd('Triangle');

console.group('Circle');

const radiusCircle = 3;
const diameterCircle = radiusCircle * 2;
const PI = 3.1416;

const circumference = diameterCircle * Math.PI;
const areaCircle = (radiusCircle ** 2) * Math.PI;

console.log({
    radiusCircle,
    diameterCircle,
    PI,
    circumference,
    areaCircle,
});

function calculateCircle(radius){
    const diameter = radius * 2;
    const radiusSquared = Math.pow(radius, 2);
    return{
        circumference: diameter * Math.PI,
        area: radiusSquared * Math.PI,
    };
}

console.groupEnd('Circle');

console.group('scalene triangle');

function scaleneTriangle(side1, side2, side3){
    let semiPerimeter = (side1 + side2 + side3) / 2;
    let h = (2/side1)*Math.sqrt(semiPerimeter*(semiPerimeter - side1)*(semiPerimeter - side2)*(semiPerimeter - side3));
    return h;
}


console.groupEnd('scalene triangle');

const ButtonDiscount = document.querySelector('.discout-button');

ButtonDiscount.addEventListener('click', calculateDiscount);

function calculateDiscount(){
    const result = document.querySelector('.discount-answer');
    const price = document.querySelector('.input-number').value;
    const discount = document.querySelector('.input-discount-number').value;

    const discountAnswer = (parseInt(price)*(100 - parseInt(discount))/100);
    result.innerText = "El precio con descuento es de: $" + discountAnswer;

}