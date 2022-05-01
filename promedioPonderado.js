function promedioPonderado(cantidadNotasCredito){ //Pasar por argumento la cantidad de nota/credito a ingresar

    var arrayNotaCredito = [];

    for (let index = 0; index < cantidadNotasCredito; index++) { //Loop para dependiente del valor ingresado como argumento en la función
        let cursoPantalla = prompt("Digita el curso " + (index + 1) + ": ",0) //Captura por patanlla del valor del curso
        let notaPantalla = prompt("Digita la nota " + (index + 1) + ": ",0); //Captura por patanlla del valor de nota
        let creditoPantalla = prompt("Digita el credito " + (index + 1) + ": ",0); //Captura por patanlla del valor de credito
        let nota = parseFloat(notaPantalla); //Parseo a numero con punto flotante de la variable nota
        let credito = parseFloat(creditoPantalla); //Parseo a numero con punto flotante de la variable credito
        let objeto = { //Conversion a variable objeto el par nota/credito capturado por pantalla
            'curso': cursoPantalla,
            'nota': nota,
            'credito': credito
        };
        arrayNotaCredito.push(objeto); //por cada loop adicionamos la variable objeto a la variable array
    }

    console.log(arrayNotaCredito);

    return calculaPromedioPonderado(arrayNotaCredito); //Llamado a la función que calcula el promedio ponderado.

}

/*
    Ejemplo Input: 

    [
        {curso: "Educación Física", nota: 15, credito: 5},
        {curso: "Programación", nota: 11, credito: 4},
        {curso: "Finanzas personales", nota: 5, credito: 2}
    ]

    Valor esperado: 11.727272727272727
*/

function calculaPromedioPonderado (arrayObjetos){

    var sumatoriaNotaXcredito = 0;
    var sumatoriaCredito = 0;

    for (let index = 0; index < arrayObjetos.length; index++) {
        const objeto = arrayObjetos[index]; //En cada loop toma de toda la variable objeto del array segun su indice (ej. {nota: 15, credito: 5})
        let notaXcredito = objeto['nota'] * objeto['credito']; // multiplicación de los valores de las claves 'nota' y 'credito' de la variable objeto recien capturada
        sumatoriaNotaXcredito = sumatoriaNotaXcredito + notaXcredito; //Sumatoria acumulada del resultado de multiplicar la nota x credito
    }

    for (let index2 = 0; index2 < arrayObjetos.length; index2++) {
        const objeto2 = arrayObjetos[index2]; //En cada loop toma de toda la variable objeto del array segun su indice (ej. {nota: 15, credito: 5})
        let credito = objeto2['credito']; //Captura del valor de la clave 'credito' de la variable objeto recien capturada
        sumatoriaCredito = sumatoriaCredito + credito; //Sumatoria acumulada del valor de credito
    }

    console.log("sumatoriaNotaXcredito: " + sumatoriaNotaXcredito);
    console.log("sumatoriaCredito: " + sumatoriaCredito);

    const promedioPonderado = sumatoriaNotaXcredito / sumatoriaCredito;

    return promedioPonderado;
}