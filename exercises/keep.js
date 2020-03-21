'use strict';

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:
function keepFirst(str1) {
    return str1.substr(0,2);
}

function keepLast(str2) {
    return str2.substr(-2);
}

function keepFirstLast(str3) {
    let trimIt = '';
    let toTrim = '';
    toTrim = str3.substr(3,3);
    trimIt = toTrim.trimEnd();
    return trimIt;
}

//* Begin of tests
const assert = require('assert');

//assert.fail('You must write your own tests');
assert.strictEqual(typeof keepFirst, 'function');
assert.strictEqual(keepFirst.length, 1);
assert.deepStrictEqual(keepFirst('xxje suis Tupac'), 'xx');
assert.deepStrictEqual(keepFirst('AUJE SUIS Tupac'), 'AU');
assert.deepStrictEqual(keepFirst('PtJe Suis Tupac'), 'Pt');
assert.deepStrictEqual(keepFirst('08je suis Tupac'), '08');
assert.deepStrictEqual(keepFirst(''), '');

assert.strictEqual(typeof keepLast, 'function');
assert.strictEqual(keepLast.length, 1);
assert.deepStrictEqual(keepLast('je suis Tupacxx'), 'xx');
assert.deepStrictEqual(keepLast('JE SUIS TupacAU'), 'AU');
assert.deepStrictEqual(keepLast('Je Suis TupacPt'), 'Pt');
assert.deepStrictEqual(keepLast('je suis Tupac08'), '08');
assert.deepStrictEqual(keepLast(''), '');

assert.strictEqual(typeof keepFirstLast, 'function');
assert.strictEqual(keepFirstLast.length, 1);
assert.deepStrictEqual(keepFirstLast('xxxje suis Tupacxx'), 'je');
assert.deepStrictEqual(keepFirstLast('AUDJE SUIS TupacAU'), 'JE');
assert.deepStrictEqual(keepFirstLast('PtLJe Suis TupacPt'), 'Je');
assert.deepStrictEqual(keepFirstLast('085je suis Tupac08'), 'je');
assert.deepStrictEqual(keepFirstLast(''), '');
// End of tests */
