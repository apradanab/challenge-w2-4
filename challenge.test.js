import { methodSome, methodEvery } from './challenge';

describe('methodSome', () => {
  test('should be true when argument is [1, 2, 3, 4] and the function is % 2 === 0', () => {
    const x = [1, 2, 3, 4];
    const y = (element) => element % 2 === 0;
    const expected = true;
    const r = methodSome(x, y);
    expect(r).toBe(expected);
  });
  test('should be false when argument is [] and the function is % 2 === 0', () => {
    const x = [];
    const y = (element) => element % 2 === 0;
    const expected = false;
    const r = methodSome(x, y);
    expect(r).toBe(expected);
  });
  test('should be true when argument is [1, 3, 5, 7] and the function & 1 !== 0', () => {
    const x = [1, 3, 5, 7];
    const y = (element) => element & (1 !== 0);
    const expected = true;
    const r = methodSome(x, y);
    expect(r).toBe(expected);
  });
  test('should be true when argument is [-1, -3, 4, -7] and the function % 2 !== 0', () => {
    const x = [-1, -3, 4, -7];
    const y = (element) => element & (1 !== 0);
    const expected = true;
    const r = methodSome(x, y);
    expect(r).toBe(expected);
  });
});

describe('methodEvery', () => {
  test('should be false when argument is [25, 18, 8, 41] and the condition is < 40', () => {
    const x = [25, 18, 8, 41];
    const y = (element) => element < 40;
    const expected = false;
    const r = methodEvery(x, y);
    expect(r).toBe(expected);
  });
  test('should be true when argument is [] and the condition is % 2 === 0', () => {
    const x = [];
    const y = (element) => element % 2 === 0;
    const expected = true;
    const r = methodEvery(x, y);
    expect(r).toBe(expected);
  });
  test('should be true when argument is [2, 4, 6, 18] and the condition % 2 === 0', () => {
    const x = [2, 4, 6, 18];
    const y = (element) => element % 2 === 0;
    const expected = true;
    const r = methodEvery(x, y);
    expect(r).toBe(expected);
  });
  test('should be true when argument is [-1, -3, 4, -7] and the condition % 2 !== 0', () => {
    const x = [-1, -3, 4, -7];
    const y = (element) => element & (1 !== 0);
    const expected = false;
    const r = methodEvery(x, y);
    expect(r).toBe(expected);
  });
});
