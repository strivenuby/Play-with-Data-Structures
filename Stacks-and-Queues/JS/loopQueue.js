const resize = Symbol('resize')

class loopQueue {
  constructor(capacity = 10) {
    this.data = []
    this.data.length = capacity + 1
    this.front = 0
    this.tail = 0
    this.size = 0
  }
  getSize() {
    return this.size
  }
  isEmptry() {
    return this.front === this.tail
  }
  getCapacity() {
    return this.data.length - 1
  }
  enqueue(e) {
    let { data, tail } = this
    if ((this.tail + 1) % this.data.length === this.front)
      this[resize](this.getCapacity() * 2)
    this.data[tail] = e
    this.tail = (tail + 1) % data.length
    this.size++
  }
  dequeue() {
    let { data, front } = this
    if (this.isEmptry()) throw new Error('Cannot dequeue from an empty queue.')
    let ret = data[front]
    this.data[front] = null
    this.front = (front + 1) % data.length
    this.size--
    if (this.size === this.getCapacity() / 4 && this.getCapacity() / 2 !== 0)
      this[resize](this.getCapacity() / 2)
    return ret
  }
  getFront() {
    if (this.isEmptry()) throw new Error('Queue is empty.')
    return this.data[this.front]
  }
  [resize](newCapacity) {
    let newData = [],
      { size, data, front } = this
    newData.length = newCapacity
    for (let i = 0; i < size; i++) {
      newData[i] = data[(i + front) % data.length]
    }
    this.data = newData
    this.front = 0
    this.tail = this.size
  }
  toString() {
    let str = undefined,
      { front, tail, data, size } = this
    str = `LQueue: size = ${size}, capacity = ${this.getCapacity()}\n`
    str += 'front ['
    for (let i = front; i != tail; i = (i + 1) % data.length) {
      str += data[i]
      if ((i + 1) % data.length != tail) {
        str += ', '
      }
    }
    str += '] tail'
    return str
  }
}

module.exports = loopQueue
