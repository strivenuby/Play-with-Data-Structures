const ArrayCls = require('../../Arrays/JS/ArrayCls')

class ArrayStack {
  constructor(capacity = 10) {
    this.array = new ArrayCls(capacity)
  }
  getSize() {
    return this.array.getSize()
  }
  isEmptry() {
    return this.array.isEmptry()
  }
  getCapacity() {
    return this.array.getCapacity()
  }
  push(e) {
    return this.array.addLast(e)
  }
  pop() {
    return this.array.removeList()
  }
  peek() {
    return this.array.getLast()
  }
  toString() {
    let str = undefined,
      { array } = this
    str = `Stack: `
    str += '['
    for (let i = 0; i < array.getSize(); i++) {
      str += array.get(i)
      if (i != array.getSize() - 1) {
        str += ', '
      }
    }
    str += '] top'
    return str
  }
}

module.exports = ArrayStack
