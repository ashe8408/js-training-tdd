'use strict';

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code:
function cutFirst(str1) {
    return str1.substr(2);
}

function cutLast(str2) {
    return str2.substr(0,str2.length-2);
}

function cutFirstLast(str3) {
    let first = '';
    let second = '';
    first = cutFirst(str3);
    second = cutLast(first);
    return second;
}

//* Begin of tests
const assert = require('assert');

//assert.fail('You must write your own tests');
assert.strictEqual(typeof cutFirst, 'function');
assert.strictEqual(cutFirst.length, 1);
assert.deepStrictEqual(cutFirst('xxje suis biggie smalls'), 'je suis biggie smalls');
assert.deepStrictEqual(cutFirst('AUJE SUIS BIGGIE SMALLS'), 'JE SUIS BIGGIE SMALLS');
assert.deepStrictEqual(cutFirst('PtJe Suis Biggie Smalls'), 'Je Suis Biggie Smalls');
assert.deepStrictEqual(cutFirst('08je suis biggie smalls'), 'je suis biggie smalls');
assert.deepStrictEqual(cutFirst(''), '');

assert.strictEqual(typeof cutLast, 'function');
assert.strictEqual(cutLast.length, 1);
assert.deepStrictEqual(cutLast('je suis biggie smallsxx'), 'je suis biggie smalls');
assert.deepStrictEqual(cutLast('JE SUIS BIGGIE SMALLSAU'), 'JE SUIS BIGGIE SMALLS');
assert.deepStrictEqual(cutLast('Je Suis Biggie SmallsPt'), 'Je Suis Biggie Smalls');
assert.deepStrictEqual(cutLast('je suis biggie smalls08'), 'je suis biggie smalls');
assert.deepStrictEqual(cutLast(''), '');

assert.strictEqual(typeof cutFirstLast, 'function');
assert.strictEqual(cutFirstLast.length, 1);
assert.deepStrictEqual(cutFirstLast('xxje suis biggie smallsxx'), 'je suis biggie smalls');
assert.deepStrictEqual(cutFirstLast('AUJE SUIS BIGGIE SMALLSAU'), 'JE SUIS BIGGIE SMALLS');
assert.deepStrictEqual(cutFirstLast('PTJe Suis Biggie SmallsPt'), 'Je Suis Biggie Smalls');
assert.deepStrictEqual(cutFirstLast('08je suis biggie smalls08'), 'je suis biggie smalls');
assert.deepStrictEqual(cutFirstLast(''), '');

// End of tests */
