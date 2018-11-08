const ArrayCls = require('../../Arrays/JS/ArrayCls')

class ArrayQueue {
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
  enqueue(e) {
    return this.array.addLast(e)
  }
  dequeue() {
    return this.array.removeList()
  }
  getFront() {
    return this.array.getFirst()
  }
  toString() {
    let str = undefined,
      { array } = this
    str = `Queue: `
    str += 'font ['
    for (let i = 0; i < array.getSize(); i++) {
      str += array.get(i)
      if (i != array.getSize() - 1) {
        str += ', '
      }
    }
    str += '] tail'
    return str
  }
}

module.exports = ArrayQueue
