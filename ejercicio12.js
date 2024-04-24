
let persona1 = { nombre: "Ana", sexo: "mujer", edad: 25 };
let persona2 = { nombre: "Juan", sexo: "hombre", edad: 30 };
let persona3 = { nombre: "María", sexo: "mujer", edad: 28 };
let persona4 = { nombre: "Gustavo", sexo: "hombre", edad: 22 };


let personas = [persona1, persona2, persona3, persona4];


let sumEdades = personas.reduce((total, persona) => total + persona.edad, 0);
let promedioEdad = sumEdades / personas.length;


let mujerMayorEdad = personas.reduce((mayor, persona) => (persona.sexo === "mujer" && persona.edad > mayor.edad) ? persona : mayor, { nombre: "", edad: 0 }).nombre;


let hombreMenorEdad = personas.reduce((menor, persona) => (persona.sexo === "hombre" && (persona.edad < menor.edad || menor.edad === 0)) ? persona : menor, { nombre: "", edad: 0 }).nombre;


let mujeres = personas.filter(persona => persona.sexo === "mujer");
let sumEdadesMujeres = mujeres.reduce((total, persona) => total + persona.edad, 0);
let promedioEdadMujeres = sumEdadesMujeres / mujeres.length;
