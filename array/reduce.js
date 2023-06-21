const numbers = [1, 2, 3, 4, 5]

// itera por array retornando um valor que será somado a um acumulador

const myReduce = numbers.reduce( (previous, current, index, array) => {
    return previous + current
}, 0);

console.log(myReduce);
