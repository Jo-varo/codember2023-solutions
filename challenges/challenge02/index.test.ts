import { compiler } from './index';

const results = [
  ['##*&', '4'],
  ['&##&*&@&', '0243']
];

describe('Tests', () => {
  results.map(([sentence, result], i) => {
    test(`Test ${i + 1}:`, () => {
      expect(compiler(sentence)).toBe(result);
    });
  });
});
