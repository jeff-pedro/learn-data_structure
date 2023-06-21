let numbers = [1, 2, 3, 4, 5]
let elementos = 0;

// itera por cada elemento do array até que a função retorne "false"

let res = numbers.every(x => {
    elementos++;
    return (x % 2 === 0)
});

console.log(`Percorreu "${elementos} elemento(s)" e retornou "${res}".`); //false
