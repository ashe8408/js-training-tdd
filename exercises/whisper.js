'use strict';

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

// Your code:
function whisper(str) {
    return '\`' + str.toLowerCase() + '\`';
}

//* Begin of tests
const assert = require('assert');

//assert.fail('You must write your own tests');
assert.strictEqual(typeof whisper, 'function');
assert.strictEqual(whisper.length, 1);
assert.deepStrictEqual(whisper('SALUT LES GENS'), '`salut les gens`');
assert.deepStrictEqual(whisper('bonjour'),'`bonjour`');
assert.deepStrictEqual(whisper('Bonjour Tout Le Monde'),'`bonjour tout le monde`');
assert.deepStrictEqual(whisper('258046'), '`258046`');
assert.deepStrictEqual(whisper(''), '``');

// End of tests */
