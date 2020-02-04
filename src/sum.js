import add from './add'
import _curry1 from './internal/_curry1'
import reduce from './reduce'

const sum = reduce(add, 0)

export default _curry1(sum)
