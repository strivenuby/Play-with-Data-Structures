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
    this.add(0, e)
  }
  /**
   * 在链表的 index（0-based）位置添加新的元素 e
   * @param {Int} index
   * @param {*} e
   */
  add(index, e) {
    if (index < 0 || index > this.size)
      throw new Error('Add failed. Illegal index.')
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
  /**
   * 获取链表的第index（0-based）个位置的元素
   * @param {Int} index
   */
  get(index) {
    if (index < 0 || index > this.size)
      throw new Error('Add failed. Illegal index.')
    const cur = this.dummyHead.next
    for (let i = 0; i < index; i++) {
      cur = cur.next
    }
    return cur.e
  }
  /**
   *获取链表第一个元素
   */
  getFirst() {
    return this.get(0)
  }
  /**
   * 获取链表最后一个元素
   */
  getLast() {
    return this.get(this.size - 1)
  }
  /**
   * 修改链表的第index（0-based）个位置的元素为e
   * @param {Int } index
   * @param {*} e
   */
  set(index, e) {
    if (index < 0 || index > this.size)
      throw new Error('Add failed. Illegal index.')
    const cur = this.dummyHead.next
    for (let i = 0; i < index; i++) {
      cur = cur.next
    }
    cur.e = e
  }
  /**
   * 查找链表中是否有元素e
   * @param {*} e
   */
  contains(e) {
    const cur = this.dummyHead.next
    while (cur != null) {
      if (cur.e === e) return true
      cur = cur.next
    }
    return false
  }
  /**
   * 在链表中删除第index（0-based）个位置的元素，返回删除的元素
   * @param {Int} index
   */
  remove(index) {
    if (index < 0 || index > this.size)
      throw new Error('Add failed. Illegal index.')
    let prev = this.dummyHead
    for (let i = 0; i < index; i++) {
      prev = prev.next
    }
    const retNode = prev.next
    prev.next = retNode.next
    retNode.next = null
    this.size--
    return retNode.e
  }
  /**
   * 从链表中删除第一个元素，返回删除的元素
   */
  removeFirst() {
    return this.remove(0)
  }
  /**
   * 从链表中删除最后一个元素，返回删除的元素
   */
  removeLast() {
    return this.remove(this.size - 1)
  }
  toString() {
    let str = '',
      cur = this.dummyHead.next
    while (cur != null) {
      str += `${cur.e}->`
      cur = cur.next
    }
    str += 'NULL'
    return str
  }
}

module.exports = LinkedList
