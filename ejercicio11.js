function identificarLetras(palabra) {
    let letras = {};
    for (let letra of palabra) {
      if (letras[letra]) {
        letras[letra]++;
      } else {
        letras[letra] = 1;
      }
    }
    return letras;
  }
  
  let resultado = identificarLetras('entretenimiento');
  console.log(resultado); // Output: { P: 1, A: 2, L: 1 }
  