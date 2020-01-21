import { split } from "../src";
import eq from "./shared/eq";

/*eslint-enable */
describe('split', () => {
  it('splits a string into an array', () => {
    eq(split('.', 'a.b.c.xyz.d'), ['a', 'b', 'c', 'xyz', 'd'])
  })

  it('the split string can be arbitrary', () => {
    eq(split('at', 'The Cat in the Hat sat on the mat'), [
      'The C',
      ' in the H',
      ' s',
      ' on the m',
      '',
    ])
  })
})
/*eslint-enable */
