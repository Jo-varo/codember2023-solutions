// gato perro perro coche Gato peRRo sol ->gato2perro3coche1sol1
// llaveS casa CASA casa llaves -> llaves2casa3
// taza ta za taza -> taza2ta1za1
// casas casa casasas -> casas1casa1casas1

import { findPatterns } from './index';

const results = [
  ['gato perro perro coche Gato peRRo sol', 'gato2perro3coche1sol1'],
  ['llaveS casa CASA casa llaves', 'llaves2casa3'],
  ['taza ta za taza', 'taza2ta1za1'],
  ['casas casa casasas', 'casas1casa1casasas1'],
];

describe('Tests', () => {
  results.map(([sentence, result], i) => {
    test(`Test ${i+1}:`, () => {
      expect(findPatterns(sentence)).toBe(result);
    });
  });
});
