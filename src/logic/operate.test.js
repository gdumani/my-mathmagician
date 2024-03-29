import operate from './operate';

describe('operate', () => {
  test('shoud return 10 after adding 7 + 3', () => {
    expect(operate('7', '3', '+')).toEqual('10');
  });
  test('shoud return 4 after adding 7 - 3', () => {
    expect(operate('7', '3', '-')).toEqual('4');
  });
  test('shoud return 21 after adding 7 x 3', () => {
    expect(operate('7', '3', 'x')).toEqual('21');
  });
  test('shoud return 4 after adding 12 ÷ 3', () => {
    expect(operate('12', '3', '÷')).toEqual('4');
  });
});
