
let numero1 = 10;
let numero2 = 20;

for (let i = Math.min(numero1, numero2); i <= Math.max(numero1, numero2); i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}