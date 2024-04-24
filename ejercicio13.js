let persona1 = { nombre: "Ana", sexo: "mujer", edad: 25 };
let persona2 = { nombre: "Juan", sexo: "hombre", edad: 30 };
let persona3 = { nombre: "María", sexo: "mujer", edad: 28 };
let persona4 = { nombre: "Gustavo", sexo: "hombre", edad: 22 };


let personas = [persona1, persona2, persona3, persona4];

function calcularPromedioEdad(personas) {
    let totalEdad = 0;
    personas.forEach(persona => {
        totalEdad += persona.edad;
    });
    return totalEdad / personas.length;
}

function nombreMujerMayorEdad(personas) {
    let mayorEdad = 0;
    let nombreMujerMayorEdad = "";
    personas.forEach(persona => {
        if (persona.sexo === "femenino" && persona.edad > mayorEdad) {
            mayorEdad = persona.edad;
            nombreMujerMayorEdad = persona.nombre;
        }
    });
    return nombreMujerMayorEdad;
}

function nombreHombreMenorEdad(personas) {
    let menorEdad = Infinity;
    let nombreHombreMenorEdad = "";
    personas.forEach(persona => {
        if (persona.sexo === "masculino" && persona.edad < menorEdad) {
            menorEdad = persona.edad;
            nombreHombreMenorEdad = persona.nombre;
        }
    });
    return nombreHombreMenorEdad;
}

function promedioEdadMujeres(personas) {
    let totalEdadMujeres = 0;
    let cantidadMujeres = 0;
    personas.forEach(persona => {
        if (persona.sexo === "femenino") {
            totalEdadMujeres += persona.edad;
            cantidadMujeres++;
        }
    });
    return totalEdadMujeres / cantidadMujeres;
}

let promedioEdadTotal = calcularPromedioEdad(personas);

let mujerMayorEdad = nombreMujerMayorEdad(personas);

let hombreMenorEdad = nombreHombreMenorEdad(personas);

let promedioEdadMujeresTotal = promedioEdadMujeres(personas);

console.log("Promedio de edad total:", promedioEdadTotal);
console.log("Nombre de la mujer con mayor edad:", mujerMayorEdad);
console.log("Nombre del hombre con menor edad:", hombreMenorEdad);
console.log("Promedio de edad de las mujeres:", promedioEdadMujeresTotal);