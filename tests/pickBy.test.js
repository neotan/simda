import assert from 'assert'
import { always, pickBy, T } from '../src'
import eq from './shared/eq'

describe('pickBy', function() {
  const obj = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }

  it('creates a copy of the object', function() {
    assert.notStrictEqual(pickBy(always(true), obj), obj)
  })

  it('when returning truthy, keeps the key', function() {
    eq(pickBy(T, obj), obj)
    eq(pickBy(always({}), obj), obj)
    eq(pickBy(always(1), obj), obj)
  })

  it('when returning falsy, keeps the key', function() {
    eq(pickBy(always(false), obj), {})
    eq(pickBy(always(0), obj), {})
    eq(pickBy(always(null), obj), {})
  })

  it('is called with (val,key,obj)', function() {
    eq(
      pickBy(function(val, key, _obj) {
        eq(_obj, obj)
        return key === 'd' && val === 4
      }, obj),
      { d: 4 },
    )
  })

  it('retrieves prototype properties', function() {
    const F = function(param) {
      this.x = param
    }
    F.prototype.y = 40
    F.prototype.z = 50
    const obj = new F(30)
    obj.v = 10
    obj.w = 20
    eq(
      pickBy(function(val) {
        return val < 45
      }, obj),
      { v: 10, w: 20, x: 30, y: 40 },
    )
  })
})
