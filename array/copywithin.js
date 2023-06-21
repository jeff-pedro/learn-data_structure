let numbers = [1,2,3,4,5,6];

// copia uma sequência de valores do array para uma posição inicial do array

numbers.copyWithin(0, 3); //copia do índice 3 até o fim do array
console.log(numbers);

// ...passando valores de inicio e fim da copia

numbers.copyWithin(1, 3, 5)
console.log(numbers);