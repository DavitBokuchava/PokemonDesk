import example from './example';

describe('toCapitalizeFirstLetter', () => {
  test('pass argument of type of string like text and return with the  first capitalized text ', () => {
    const text = example('hello world');
    expect(text).toBe('Hello world');
  });
});
