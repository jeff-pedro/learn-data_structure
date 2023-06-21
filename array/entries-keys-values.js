let numbers = [1,2,3,4,5]

// entries -> método que devolve um @@iterator contendo chave:valor

let aEntries = numbers.entries();
console.log("\n'entries'");
console.log(aEntries.next().value);
console.log(aEntries.next().value);
console.log(aEntries.next().value);

// keys -> devolve um @@iterator contendo as chaves do array/objeto

let aKeys = numbers.keys();
console.log("\n'keys'");
console.log(aKeys.next());
console.log(aKeys.next());
console.log(aKeys.next());

// values -> devolve um @@iterator contendo os valores do array/objeto

let aValues = numbers.values();
console.log("\n'values'");
console.log(aValues.next());
console.log(aValues.next());
console.log(aValues.next());
console.log(aValues.next());
console.log(aValues.next());
console.log(aValues.next()); //value: undefined, done:true
