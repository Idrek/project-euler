/*
 * https://projecteuler.net/problem=5
 * Run: node problem005.js
 */

R = require('ramda');

var anyDivisor = function (num) {
    return R.any(
        function (n) { return (num % n) },
        R.range(2, 21)
    )
};

var numbers = function* () {
    var i = 2;
    while (true) { yield i++ }
};

var myFirst = function (f, l) {
    for (var elem of l) {
        if (! f(elem)) { return elem }
    }
};

console.log(
    myFirst(anyDivisor, numbers())
);
