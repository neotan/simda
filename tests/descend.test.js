import { descend, identity } from '../src'
import eq from './shared/eq'

describe('descend', function() {
  it('builds a descending comparator function out of the identity function', function() {
    eq([3, 1, 8, 1, 2, 5].sort(descend(identity)), [8, 5, 3, 2, 1, 1])
  })
})
