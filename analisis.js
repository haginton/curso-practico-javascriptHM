const salariosCol = colombia.map(
    function(persona) {
        return persona.salary;
    }
);

const slariosColSorted = salariosCol.sort( //ordenamos la lista de menor a mayor
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

function esPar(numero){
    return (numero%2 === 0);
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

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);

        return mediana;

    }else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

console.log(
    medianaSalarios(slariosColSorted)
);