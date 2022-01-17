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

