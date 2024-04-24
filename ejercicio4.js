function esPar(numero) {
    if (numero % 2 === 0) {
        return "El número es par.";
    } else {
        return "El número es impar.";
    }
}

let numero = 23;
console.log(esPar(numero));  