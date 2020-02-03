import isPlainObj from '../src/isPlainObj'
import eq from './shared/eq'

describe('isPlainObj', () => {
  it('works with different types', () => {
    eq(isPlainObj(document.createElement('div')), false)
    eq(isPlainObj(null), false)
    eq(isPlainObj({}), true)
    eq(isPlainObj(Object.create(null)), true)
    eq(
      isPlainObj(
        (() => {
          function Foo() {}

          return new Foo()
        })(),
      ),
      true,
    )
    eq(isPlainObj(5), false)
    eq(isPlainObj('P'), false)
    eq(isPlainObj(new Number(6)), false)
    eq(isPlainObj(Math), false)
  })
})
