import assert from 'assert'
import { map } from '../src'
import eq from './shared/eq'

describe('map', () => {
  const times2 = x => {
    return x * 2
  }
  const add1 = x => {
    return x + 1
  }
  const dec = x => {
    return x - 1
  }

  it('maps simple functions over arrays', () => {
    eq(map(times2, [1, 2, 3, 4]), [2, 4, 6, 8])
  })

  it('maps simple functions into arrays', () => {
    eq(map(times2)([1, 2, 3, 4]), [2, 4, 6, 8])
  })

  it('maps over objects', () => {
    eq(map(dec, {}), {})
    eq(map(dec, { x: 4, y: 5, z: 6 }), { x: 3, y: 4, z: 5 })
  })

  it('dispatches to objects that implement `map`', () => {
    const obj = {
      x: 100,
      map: f => f(this.x),
    }
    eq(map(add1, obj), { x: 101, map: f => f(this.x) })
  })

  it('throws a TypeError on null and undefined', () => {
    assert.throws(() => {
      return map(times2, null)
    }, TypeError)
    assert.throws(() => {
      return map(times2, undefined)
    }, TypeError)
  })

  it('composes', () => {
    const mdouble = map(times2)
    const mdec = map(dec)
    eq(mdec(mdouble([10, 20, 30])), [19, 39, 59])
  })
})
