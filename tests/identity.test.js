import { identity } from '../src'
import eq from './shared/eq'

describe('identity', () => {
  it('returns its first argument', () => {
    eq(identity(undefined), undefined)
    eq(identity('foo'), 'foo')
    eq(identity('foo', 'bar'), 'foo')
  })
})
