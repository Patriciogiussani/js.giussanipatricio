function encontrarMayorMenor(a, b, c) {
    let mayor = Math.max(a, b, c);
    let menor = Math.min(a, b, c);
    
    return `El mayor es ${mayor} y el menor es ${menor}`;
  }
  
  
  let resultado = encontrarMayorMenor(100, 50, 80);
  console.log(resultado); 