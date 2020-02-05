import { ascend, identity } from '../src'
import eq from './shared/eq'

describe('ascend', function() {
  it('builds an ascending comparator function out of the identity function', function() {
    eq([3, 1, 8, 1, 2, 5].sort(ascend(identity)), [1, 1, 2, 3, 5, 8])
  })
})
