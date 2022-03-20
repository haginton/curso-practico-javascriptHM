//const preciOriginal = 120;
//const descuento = 18;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento
}

/*console.log({
    preciOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
});*/

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

const cupones = ["descuento_del_dia", "super_ahorro", "hiper_oferta"];

function onClickButtonPriceCupon() {
    const inputPriceCupon = document.getElementById("InputPriceCupon");
    const priceValueCupon = inputPriceCupon.value;

    const inputDiscountCupon = document.getElementById("InputDiscountCupon");
    const discountValueCupon = inputDiscountCupon.value;

    var precioConDescuentoCupon;

    switch (discountValueCupon){
        case cupones[0]:
            precioConDescuentoCupon = calcularPrecioConDescuento(priceValueCupon, 10);
            break;
        case cupones[1]:
            precioConDescuentoCupon = calcularPrecioConDescuento(priceValueCupon, 30);
            break;
        case cupones[2]:
            precioConDescuentoCupon = calcularPrecioConDescuento(priceValueCupon, 50);
            break;
        default:
            alert("Cupon no valido");
    }
    
    if (precioConDescuentoCupon != null){
        const resulCupon = document.getElementById("ResultCupon");
        resulCupon.innerText = "El precio con descuento gracias al cupon es: $" + precioConDescuentoCupon;
    }

}