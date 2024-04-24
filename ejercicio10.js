const numeros = [1, 2, 3, 4, 5];
const sumaPares = numeros.reduce((acumulador, valorActual) => {
    if (valorActual % 2 === 0) {
        return acumulador + valorActual;
    } else {
        return acumulador;
    }
}, 0);
console.log(sumaPares); 
