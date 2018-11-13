class Node {
  constructor(e = null, next = null) {
    this.e = e
    this.next = next
  }
  toString() {
    return this.e
  }
}

class LinkedListQueue {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  getSize() {
    return this.size
  }

  isEmpty() {
    return this.size === 0
  }

  enqueue(e) {
    if (this.tail === null) {
      this.tail = new Node(e)
      this.head = this.tail
    } else {
      this.tail.next = new Node(e)
      this.tail = this.tail.next
    }
    this.size++
  }

  dequeue() {
    if (this.isEmpty()) throw new Error('Cannot dequeue from an empty queue.')

    const retNode = this.head
    this.head = this.head.next
    retNode.next = null
    if (this.head === null) this.tail = null
    this.size--
    return retNode.e
  }

  getFront() {
    if (this.isEmpty()) throw new Error('Queue is empty.')
    return this.head.e
  }

  toString() {
    let str = ''
    str += 'Queue: front '

    let cur = this.head
    while (cur != null) {
      str += `${cur.toString()} -> `
      cur = cur.next
    }
    str += 'NULL tail'
    return str
  }
}

module.exports = LinkedListQueue
