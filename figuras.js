//Codigo del cuadrado

console.group("Cuadrados"); //Función para agrupar varios console.log

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
}
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado;
}
//console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd(); //Función para finalizar el agrupamiento de varios console.log

//Codigo del triangulo

console.group("Triangulos");

/*const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
    "Los lados del triangulo miden: "
    + ladoTriangulo1 + "cm, "
    + ladoTriangulo2 + "cm, "
    + baseTriangulo + "cm"
);*/

/*const alturaTriangulo = 5.5;
console.log("La altura del triangulo es: " + alturaTriangulo + "cm");*/

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
//console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

//console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

//Codigo del circulo

console.group("Circulos");

// Radio

//const radioCirculo = 4;
//console.log("El radio del circulo: " + radioCirculo + "cm");

// Diametro

function diametroCirculo(radio){
    return radio * 2;
}

// PI

const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Área

function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd();

// Aqui interactuamos con el HTML

/*
Estando desde el navegador en consola ejecutar: document.getElementById("InputCuadrado");
con eso obtendremos el tag html completo del elemento identificado por su nombre:
<input id="InputCuadrado" type="number">
*/

//Codigo Cuadrado

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Codigo Triangulo

function calcularPerimetroTriangulo(){
    const inputL1T = document.getElementById("InputL1Triangulo");
    const valueL1T = inputL1T.value;
    var lado1T = Number(valueL1T);
    const inputL2T = document.getElementById("InputL2Triangulo");
    const valueL2T = inputL2T.value;
    var lado2T = Number(valueL2T);
    const inputBT = document.getElementById("InputBaseTriangulo");
    const valueBT = inputBT.value;
    var baseT = Number(valueBT);

    const perimetroT = perimetroTriangulo(lado1T, lado2T, baseT);
    alert(perimetroT);
}

function calcularAreaTriangulo(){
    const inputBT = document.getElementById("InputBaseTriangulo");
    const valueBT = inputBT.value;
    var baseT = Number(valueBT);
    const inputAT = document.getElementById("InputAlturaTriangulo");
    const valueAT = inputAT.value;
    var alturaT = Number(valueAT);

    const areaT = areaTriangulo(baseT, alturaT);
    alert(areaT);
}

//Codigo Circulo

function calcularPerimetroCirculo(){
    const inputRadio = document.getElementById("InputRadioCirculo");
    const valueRadio = inputRadio.value;
    var radio = Number(valueRadio);

    const perimetroC = perimetroCirculo(radio);
    alert(perimetroC);
}

function calcularAreaCirculo(){
    const inputRadio = document.getElementById("InputRadioCirculo");
    const valueRadio = inputRadio.value;
    var radio = Number(valueRadio);

    const areaC = areaCirculo(radio);
    alert(areaC);
}

// Triangulo isósceles

function AlturaTrianguloIsosceles(lado1, lado2, base){
    if (lado1 != lado2) {
        alert("No es un triangulo Isósceles ya que los lados no tienen la misma medida");
    }else{
        var altura = Math.sqrt(Math.pow(lado1, 2) - ((Math.pow(base, 2))/4));
        return altura;
    }
}

//Función asociada al boton (En pantalla se solicita el valor de lado1, lado2 y base del triangulo)

function calculaAlturaTriangulo(){
    const inputLado1 = document.getElementById("InputLado1TrianguloI");
    const valueLado1 = inputLado1.value;
    var lado1 = Number(valueLado1);
    const inputLado2 = document.getElementById("InputLado2TrianguloI");
    const valueLado2 = inputLado2.value;
    var lado2 = Number(valueLado2);
    const inputBase = document.getElementById("InputBaseTrianguloI");
    const valueBase = inputBase.value;
    var base = Number(valueBase);

    const alturaTriangulo = AlturaTrianguloIsosceles(lado1, lado2, base);
    if (alturaTriangulo == undefined) {
        alert("No se realiza el calculo de altura del triangulo isósceles");
    }else{
        alert(alturaTriangulo);
    }
}