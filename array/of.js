// cria um array a partir dos argumentos passados para o método

let numbers = Array.of(1)
let numbers2 = Array.of(1,2,3,4,5,6)

console.log(numbers);
console.log(numbers2);

// criando copia de um array
let numbers3 = Array.of(...numbers2)
console.log(`copia de numbers2: ${numbers3}`);