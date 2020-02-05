import _curry1 from './internal/_curry1'

const always = x => () => x

export default _curry1(always)
