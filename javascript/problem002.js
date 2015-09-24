/*
 * https://projecteuler.net/problem=2
 * Run: node problem002.js
 */ 

var R = require('ramda');

var fibonacci = function* () {
    var fn1 = arguments[0] || 1;
    var fn2 = arguments[1] || 1;
    yield fn2, yield* fibonacci(fn2, fn1 + fn2);
}

var takeWhile = function* (f, list) {
    for (var x of list) {
        if (! f(x)) { break }
        yield x;
    }
}

var toArray = function (it) {
    var result = []
    for (var x of it) {
        result.push(x);
    }
    return result;
}

console.log(
    R.compose(
        R.sum,
        R.filter(function (x) { return ! (x & 1) })
    )(toArray(takeWhile(function(x) { return x < 4000000 }, fibonacci())))
);
