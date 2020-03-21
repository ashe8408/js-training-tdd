'use strict';

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

// Your code:
function yell(str) {
    return str.toUpperCase();
}
//* Begin of tests
const assert = require('assert');

//assert.fail('You must write your own tests');
assert.strictEqual(typeof yell, 'function');
assert.strictEqual(yell.length, 1);
assert.deepStrictEqual(yell('Hello World'), 'HELLO WORLD');
assert.deepStrictEqual(yell(''), '');
assert.deepStrictEqual(yell('HowDy hoo'), 'HOWDY HOO');
assert.deepStrictEqual(yell('i wrote my own tests'), 'I WROTE MY OWN TESTS');
assert.deepStrictEqual(yell('789456'),'789456');
// End of tests */
