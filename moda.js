function calcularModa (miLista){ // ej argumento funcion: [1,1,1,1,2,2,2,2,2,6,6,6,6,6,7,7,7,4,4,4,4,4,4,4,4,4,4,4,9,51,3,6,8,4,6,8,9,41,1,2,6]
    const listaCount = {};

    miLista.map( //Logica para convertir el array en un objeto y en su interior los elementos cada uno con clave=valor, numero=cantidadVecesNumero
    function (elemento){
            if (listaCount[elemento]){
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    );

    const listaArray = Object.entries(listaCount).sort( // Object.entries(objeto) esto convierte el objeto pasado como argumento en un array () , el objeto se convierte en un array de arrays
        function(elementoA, elementoB){
            return elementoA[1] - elementoB[1];
        }
    );

    const moda = listaArray[listaArray.length - 1];

    return moda;
}