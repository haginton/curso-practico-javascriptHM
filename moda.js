function calcularModa (miLista){ // ej argumento funcion: [1,1,1,1,2,2,2,2,2,6,6,6,6,6,7,7,7,4,4,4,4,4,4,4,4,4,4,4,9,51,3,6,8,4,6,8,9,41,1,2,6]
    const listaCount = {};

    miLista.map(
    function (elemento){
            if (listaCount[elemento]){
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    );

    const listaArray = Object.entries(listaCount).sort( // Object.entries(objeto) esto convierte el objeto pasado como argumento en un array
        function(elementoA, elementoB){
            return elementoA[1] - elementoB[1];
        }
    );

    const moda = listaArray[listaArray.length - 1];

    return moda;
}