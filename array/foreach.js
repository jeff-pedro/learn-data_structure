let numbers = [1,2,3,4,5,6,7,8,9,10]

// com função anônima
numbers.forEach( function(x) {
    // console.log( x % 2 === 0 );
});

// com arrow function
numbers.forEach( x => {
    console.log( x % 2 === 0);
});