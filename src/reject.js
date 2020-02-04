import filter from './filter'
import _complement from './internal/_complement'
import _curry2 from './internal/_curry2'

const reject = (predictor, filterable) => {
  return filter(_complement(predictor), filterable)
}

export default _curry2(reject)
