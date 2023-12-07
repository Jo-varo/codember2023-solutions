import { checkInvalidRowsDB } from "./index";

const results: [string, Object[]] = [
  `1a421fa,alex,alex9@gmail.com,18,Barcelona
  9412p_m,maria,mb@hotmail.com,22,CDMX
  494ee0,madeval,mdv@twitch.tv,,`,
  [{username:'maria',input:'9412p_m,maria,mb@hotmail.com,22,CDMX'},{username:'madeval',input:'494ee0,madeval,mdv@twitch.tv,,'}],
];

describe('Tests Challenge 04', () => {
  test('Return real files', () => {
    const [list, result] = results;
    expect(checkInvalidRowsDB(list)).toStrictEqual(result);
  });
});
