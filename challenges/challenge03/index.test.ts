import { passwordsChecker } from './index';

const answer: [string, { [index: number]: string }] = [
  `2-4 f: fgff
  4-6 z: zzzsg
  1-6 h: hhhhhh`,
  { 0: '4-6 z: zzzsg' },
];

describe('Tests Challenge 03', () => {
  test('Return incorrect passwords', () => {
    const [list, result] = answer;
    expect(passwordsChecker(list)).toStrictEqual(result);
  });
});
