import assert from 'assert'
import { flatten } from '../src'
import eq from './shared/eq'

describe('flatten', () => {
  it('turns a nested list into one flat list', () => {
    let nest = [1, [2], [3, [4, 5], 6, [[[7], 8]]], 9, 10]
    eq(flatten(nest), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    nest = [[[[3]], 2, 1], 0, [[-1, -2], -3]]
    eq(flatten(nest), [3, 2, 1, 0, -1, -2, -3])
    eq(flatten([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5])
  })

  it('is not destructive', () => {
    const nest = [1, [2], [3, [4, 5], 6, [[[7], 8]]], 9, 10]
    assert.notStrictEqual(flatten(nest), nest)
  })

  it('handles array-like objects', () => {
    const o = {
      length: 3,
      0: [1, 2, [3]],
      1: [],
      2: ['a', 'b', 'c', ['d', 'e']],
    }
    eq(flatten(o), [1, 2, 3, 'a', 'b', 'c', 'd', 'e', 3])
  })

  it('flattens an array of empty arrays', () => {
    eq(flatten([[], [], []]), [])
    eq(flatten([]), [])
  })
})
