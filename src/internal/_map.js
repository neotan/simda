const _map = (fn, list) => {
  const result = []

  for (let i in list) {
    if (list.hasOwnProperty(i)) {
      result.push(fn(list[i], i, list))
    }
  }
  return result
}

export default _map
