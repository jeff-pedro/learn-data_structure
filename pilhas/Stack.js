class Stack {
    #items;

    constructor() {
        this.#items = [];
    }

    push(...elements) {
        this.#items.push(...elements);
    };
    
    pop() { };
    
    peek() {
        const tamanho = this.#items.length;
        const item = this.#items[tamanho - 1];
        return item;
    };
    
    isEmpty() { };
    clear() { };
    size() { };
}

module.exports = Stack;
