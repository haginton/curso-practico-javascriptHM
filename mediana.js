/*const lista1 = [
    100,
    200,
    500,
    400000000
];*/

function calcularMediana(lista){

    let listaOrdenada =lista.sort(function(a,b){
        return a - b;
    })

    const mitadLista1 = parseInt(listaOrdenada.length / 2);

    let mediana;

    if (esPar(listaOrdenada.length)){
        const elemento1 = listaOrdenada[mitadLista1 - 1];
        const elemento2 = listaOrdenada[mitadLista1];

        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1, 
            elemento2
        ]);

        mediana = promedioElemento1y2;

    } else {
        mediana = listaOrdenada[mitadLista1]
    }

    return mediana;

}

function esPar(numero){
    if(numero % 2 === 0){
        return true;
    }else{
        return false;
    }
}


function calcularMediaAritmetica(lista) { // se calcula el promedio por medio del encapsulamiento del codigo en una función
    const sumaLista = lista.reduce( // metodo reduce() perteneciente a los array que permite ir operando cada elemento
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}