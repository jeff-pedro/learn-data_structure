let numbers = [1, 2, 3, 4, 5]
let elementos = 0;

// itera por cada elemento até que a função retorne "true"

numbers.some( function(x) {
    elementos++;
    return (x % 2 == 0) ? true : false;
});

console.log(`Percorreu ${elementos} elemento(s) e retornou "true".`);