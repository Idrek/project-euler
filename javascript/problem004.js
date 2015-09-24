/*
 * https://projecteuler.net/problem=4
 * Run: node problem004.js
 */

R = require('ramda');

var nums = function() {
    return R.reverse(R.range(100, 1000));
}

var isPalindrome = function(num) {
    var snum = R.toString(num);
    return snum == R.join('', R.reverse(snum));
};

console.log(
    R.apply(
        Math.max,
        R.filter(
            isPalindrome,
            R.map(function(ns) { return ns[0] * ns[1] },
                R.xprod(nums(), nums())
            )
        )
    )
); 
