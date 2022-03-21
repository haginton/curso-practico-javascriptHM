const lista1 = [
    100,
    200,
    300,
    500
];



function calcularMediaAritmetica(lista) { // se calcula el promedio por medio del encapsulamiento del codigo en una función
    /*let sumaLista = 0;

    for (let i = 0; i < lista.length; i++){
        sumaLista = sumaLista + lista[i];
    }*/

    const sumaLista = lista.reduce( // metodo reduce() perteneciente a los array
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}