const fibonacci = function(place) {
    if (place < 0) return "OOPS";

    let fib = [0, 1]
    for (let i = 2; i <= place; i++) {
        let fibNumber = fib[i - 2] + fib[i - 1];
        fib.push(fibNumber);
    }

    return fib[place];
};

// Do not edit below this line
module.exports = fibonacci;
