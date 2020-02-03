import { keys, map } from '../src'
import eq from './shared/eq'

describe('keys', function() {
  const obj = {
    a: 100,
    b: [1, 2, 3],
    c: { x: 200, y: 300 },
    d: 'D',
    e: null,
    f: undefined,
  }
  function C() {
    this.a = 100
    this.b = 200
  }
  C.prototype.x = function() {
    return 'x'
  }
  C.prototype.y = 'y'
  const cObj = new C()

  it('returns an empty array if the given object is not an object', function() {
    eq(keys('a string'), [])
  })

  it("returns an array of the given object's own keys", function() {
    eq(keys(obj).sort(), ['a', 'b', 'c', 'd', 'e', 'f'])
  })

  it('works with hasOwnProperty override', function() {
    eq(
      keys({
        hasOwnProperty: false,
      }),
      ['hasOwnProperty'],
    )
  })

  it('works for primitives', function() {
    const result = map(
      function(val) {
        return keys(val)
      },
      [
        null,
        undefined,
        55,
        '',
        true,
        false,
        NaN,
        Infinity,
        [],
        Symbol('str'),
        123n,
      ],
    )
    eq(result, [[], [], [], [], [], [], [], [], [], [], []])
  })

  it("does not include the given object's prototype properties", function() {
    eq(keys(cObj).sort(), ['a', 'b'])
  })
})
