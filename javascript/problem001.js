/*
** https://projecteuler.net/problem=1
** Run: node problem001.js
*/

Rx = require('rx');

var n = 999;

var source = Rx.Observable.range(1, n)
    .filter(function(v) {
        return (v % 3 == 0 || v % 5 == 0);
    }).sum()
    .subscribeOnNext(function (v) {
        console.log(v);
    }); 
