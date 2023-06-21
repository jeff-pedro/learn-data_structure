const assert = require('assert');
const Stack = require('./Stack');

const stack = new Stack();

stack.push('bacon', 'ovos'); // adiciona elementos à pilha

assert.deepEqual(
    stack.peek(), // mostra o elemento do topo
    'ovos'
);


