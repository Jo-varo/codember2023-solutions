import { validFilesChecker } from './index';

const answer: [string, { [index: number]: string }] = [
  `xyzz33-xy
abcca1-ab1
abbc11-ca`,
  { 0: 'xyzz33-xy' },
];

describe('Tests Challenge 04', () => {
  test('Return real files', () => {
    const [list, result] = answer;
    expect(validFilesChecker(list)).toStrictEqual(result);
  });
});
