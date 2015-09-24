/*
 * https://projecteuler.net/problem=3
 * Run: node problem003.js
 */

R = require('ramda');

var number = 600851475143;

var firstDivisor = R.memoize(function (n) {
    return R.find(
        function (m) { return ! (n % m) },
        R.concat(R.range(2, Math.pow(n, 1/2) + 1), [n])
    );
});

console.log(
    R.apply(
        Math.max,
        R.unfold(
            function (n) { return n < 2 ? false : [firstDivisor(n), n / firstDivisor(n)] },
            number
        )
    )
); 
