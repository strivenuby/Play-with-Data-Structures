class Node {
  constructor(e = null, next = null) {
    this.e = e
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.dummyHead = new Node()
    this.size = 0
  }
  /**
   * 获取链表中的元素个数
   */
  getSize() {
    return this.size
  }
  /**
   * 返回链表是否为空
   */
  isEmptry() {
    return this.size === 0
  }
  /**
   * 在链表头添加新的元素e
   * @param {*} e
   */
  addFirst(e) {
    this.dummyHead = new Node(e, this.dummyHead)
    size++
  }
  /**
   * 在链表的 index（0-based）位置添加新的元素 e
   * @param {Int} index
   * @param {*} e
   */
  add(index, e) {
    if (index < 0 || index > size) throw new Error('Add failed. Illegal index.')
    let prev = this.dummyHead
    for (let i = 0; i < index; i++) {
      prev = prev.next
    }
    prev.next = new Node(e, prev.next)

    this.size++
  }
  /**
   * 在链表末尾添加新的元素 e
   * @param {*} e
   */
  addLast(e) {
    this.add(size, e)
  }
  toString() {
    return this.e.toString()
  }
}
