let numbers = [1,2,3,4,5]

//@@itarator

let itarator = numbers[Symbol.iterator]();
console.log(itarator.next().value); //1
console.log(itarator.next().value); //2
console.log(itarator.next().value); //3
console.log(itarator.next().value); //4
console.log(itarator.next().value); //5
console.log(itarator.next().value); //undefined