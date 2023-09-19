const btn = document.querySelector('#calculate');
const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calculatePriceWithDiscount);

function calculatePriceWithDiscount(){
    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value);

    if(!price || !discount){
        alert('Ingresa el precio y descuento .-. maldito idiota!!');
    }else if(discount > 100){
        alert('Aja ya quisiseras tener un descuento asi...  .-. maldito!!')
    }else{
        const newPrice = (price * (100 - discount))/100;
        pResult.innerText = "el nuevo precio con descuento es: $" + newPrice;
    }
}
const btn2 = document.querySelector('#calculate2');
const inputPrice2 = document.querySelector('#price2');
const inputDiscount2 = document.querySelector('#discount2');
const pResult2 = document.querySelector('#result2');

btn2.addEventListener('click', calculatePriceWithDiscount2);


function calculatePriceWithDiscount2() {
    const price = Number(inputPrice2.value);
    const discount = inputDiscount2.value;
    switch (discount) {
        case 'XLMOP':
            pResult2.innerText = "Felicidades!!! tu descuento es de 25% por lo tanto el precio a pagar es: $" + descuento(price,25);    
        break;
        case 'WOPRT':
            pResult2.innerText = "Felicidades!!! tu descuento es de 50% por lo tanto el precio a pagar es: $" + descuento(price,50);
        case 'QWFERT':
            pResult2.innerText = "Felicidades!!! tu descuento es de 75% por lo tanto el precio a pagar es: $" + descuento(price,75);
        break;    
        default:
            pResult2.innerText = "Lo siento el cupon de descuento que ingresaste es incorrecto";
        break;
    }
}

const btn3 = document.querySelector('#calculate3');
const inputPrice3 = document.querySelector('#price3');
const inputDiscount3 = document.querySelector('#discount3');
const pResult3 = document.querySelector('#result3');

const arrayUObjeto = [{
    coupon: 'QHISOP',
    descuento: 25,
},
{
    coupon: 'HODOS',
    descuento: 50,
},
{
    coupon: 'ASDCS',
    descuento: 5,
},
{
    coupon: 'OKHHSS',
    descuento: 57,
},
{
    coupon: 'QWEUBF',
    descuento: 51,
},
{
    coupon: 'NIIODO',
    descuento: 90,
}]

btn3.addEventListener('click', calculatePriceWithCoupon);

function calculatePriceWithCoupon(){
    const price = Number(inputPrice3.value);
    const coupon = inputDiscount3.value;
    if(!price || !discount){
        alert('Ingresa el precio y descuento .-. maldito idiota!!');
        return;
    }
    for (let i = 0; i < arrayUObjeto.length; i++) {
        if(arrayUObjeto[i].coupon == coupon){
            pResult3.innerText = 'El cupon es valido!! por lo tanto el descuento es de : $' +  descuento(price, arrayUObjeto[i].descuento);
            break;
        }else{
            pResult3.innerText = 'El cupon no es valido!! por lo tonto .-.';
 
        }
    }
    
}

const btn4 = document.querySelector('#calculate4');
const inputPrice4 = document.querySelector('#price4');
const inputDiscount4 = document.querySelector('#discount4');
const pResult4 = document.querySelector('#result4');


const couponsObj = {
    'NVSODVN':50,
    'NVDJS': 25,
    'JOSUE': 15,
}

const couponsArray = [];
couponsArray.push({
    name: 'JJSAJIA',
    discount: 25,
})
couponsArray.push({
    name: 'DSADD',
    discount: 55,
})
couponsArray.push({
    name: 'JUCAS',
    discount: 65,
})

btn4.addEventListener('click', calculatePriceWithPPCoupon);

function calculatePriceWithPPCoupon(){
    const price = Number(inputPrice4.value);
    const coupon = inputDiscount4.value;
    if(!price || !coupon){
        alert('Ingresa el precio y descuento .-. maldito idiota!!');
        return;
    } 
    let discount;
    function isCouponInArray(couponElement){
        return couponElement.name == coupon;
    }
    const couponInArray = couponsArray.filter(isCouponInArray);

    if(couponInArray.length > 0){
        discount =  couponInArray.discount;
    }else{
     pResult4.innerText = 'El cupón no es válido';
     return;
    }
    // if(couponsObj[coupon]){
    //     discount = couponsObj[coupon];
    // }else{
    //     pResult4.innerText = 'El cupon no es valido'
    // }
    const newPrice = (price * (100 - discount))/100;

    pResult4.innerText = 'El nuevo precio con descuento es: $' + newPrice;
}






function descuento(price,discount){
    const newPrice = (price * (100 - discount))/100;
    return newPrice;
}