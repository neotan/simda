import _curry2 from './internal/_curry2'
import _filter from './internal/_filter'
import _isObject from './internal/_isObject'

const filter = (predictor, filterable) => {
  if (_isObject(filterable)) {
    const result = {}
    const entries = Object.entries(filterable)

    for (let [prop, val] of entries) {
      if (predictor(val)) {
        result[prop] = val
      }
    }
    return result
  } else {
    return _filter(predictor, filterable)
  }
}
export default _curry2(filter)
