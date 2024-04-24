function enumerarElementos(valor1, valor2) {
    let menor = Math.min(valor1, valor2);
    let mayor = Math.max(valor1, valor2);
    let elementosIntermedios = [];
    
    for (let i = menor + 1; i < mayor; i++) {
      elementosIntermedios.push(i);
    }
    
    return elementosIntermedios;
  }
  
  let valor1 = 1;
  let valor2 = 10;
  let elementosSeparadores = enumerarElementos(valor1, valor2);
  console.log(elementosSeparadores);