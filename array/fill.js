let numbers = [1,2,3,4,5];

// preenche o array com um valor
numbers.fill(0)
console.log(numbers);

// definindo o início do preenchimento
numbers.fill(1, 2);
console.log(numbers);

// definindo o início e fim do preenchimento
numbers.fill(9, 1, 4)
console.log(numbers);

// criadando um array e iniciando valores
let ones = Array(6).fill(1);
console.log(ones);