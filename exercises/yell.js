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
assert.strictEqual(yell('Hello World'), 'HELLO WORLD');
assert.strictEqual(yell(''), '');
assert.strictEqual(yell('Hello World'), 'HELLO WORLD');
assert.strictEqual(yell('i wrote my own tests'), 'I WROTE MY OWN TESTS');
// End of tests */
