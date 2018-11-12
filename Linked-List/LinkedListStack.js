const LinkedList = require('./LinkedList')

class LinkedListStack {
  constructor() {
    this.list = new LinkedList()
  }
  getSize() {
    return this.list.getSize()
  }
  isEmpty() {
    return this.list.isEmptry()
  }
  push(e) {
    return this.list.addFirst(e)
  }
  pop() {
    return this.list.removeFirst()
  }
  peek() {
    return this.list.getFirst()
  }
  toString() {
    let str = ''
    str += 'Stack: top '
    str += this.list
    return str
  }
}

module.exports = LinkedListStack
