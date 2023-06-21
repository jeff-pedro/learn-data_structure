let numbers = [1,2,3,4,5];

// cria um novo array a partir de um array existente

let numbers2 = Array.from(numbers);
console.log(`array original: ${numbers}`);
console.log(`array copiado: ${numbers2}`);
console.log();

// filtrando
let evens = Array.from(numbers, x => (x % 2 === 0));
console.log(evens);