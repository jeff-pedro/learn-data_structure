let numbers = [1,2,3,4,5,6,7,8,9,10]

for (let n of numbers) {
    console.log( (n % 2 === 0) ? 'even' : 'odd' );
}