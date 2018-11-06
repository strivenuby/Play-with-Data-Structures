const resize = Symbol('resize')

class ArrayCls {
  /**
   * 构造函数，传入数组的容量 capacity 构造 Array
   * @param {Int} capacity 容量值，默认为 10
   */
  constructor(capacity = 10) {
    this.data = []
    this.data.length = capacity
    this.size = 0
  }
  /**
   * 获取数组中的元素个数
   */
  getSize() {
    return this.size
  }
  /**
   * 获取数组的容量
   */
  getCapacity() {
    return this.data.length
  }
  /**
   * 返回数组是否为空
   */
  isEmptry() {
    return this.size === 0
  }
  /**
   * 向所有元素后添加一个新元素
   * @param {*} e 元素
   */
  addLast(e) {
    this.add(this.size, e)
  }
  /**
   * 在所有元素前添加一个新元素
   * @param {*} e 元素
   */
  addFirst(e) {
    this.add(0, e)
  }
  /**
   * 在第 index 个位置插入一个新元素 e
   * @param {Int} index 索引
   * @param {*} e 元素
   */
  add(index, e) {
    let { size, data } = this
    if (size === data.length) throw new Error('AddLast failed. Array is full.')
    if (index < 0 || index > size) this[resize](2 * data.length)
    for (let i = size - 1; i >= index; i--) data[i + 1] = data[i]

    this.data[index] = e
    this.size++
  }
  /**
   * 获取 index 索引位置的元素
   * @param {Int} index 索引
   */
  get(index) {
    if (index < 0 || index >= this.size)
      throw new Error('Get failed. Index is illegal.')
    return this.data[index]
  }
  /**
   * 设置 index 索引位置的元素为 e
   * @param {Int} index 索引
   * @param {*} e 元素
   */
  set(index, e) {
    if (index < 0 || index >= this.size)
      throw new Error('Get failed. Index is illegal.')
    this.data[index] = e
  }
  /**
   * 查找数组中是否有元素 e
   * @param {*} e 元素
   */
  contains(e) {
    for (let i = 0; i < this.size; i++) {
      if (this.data[i] === e) {
        return true
      }
    }
    return false
  }
  /**
   * 查找数组中元素 e 所在的索引，如果不存在元素 e，则返回 -1
   * @param {*} e 元素
   */
  find(e) {
    for (let i = 0; i < this.size; i++) {
      if (this.data[i] === e) {
        return i
      }
    }
    return -1
  }
  /**
   * 从数组中删除 index 位置的元素，返回删除的元素
   * @param {Int} index
   */
  remove(index) {
    let { size, data } = this
    if (index < 0 || index >= size)
      throw new Error('Get failed. Index is illegal.')
    let ret = data[index]
    for (let i = index + 1; i < size; i++) {
      data[i - 1] = data[i]
    }
    this.size--
    if (size === data.length / 2) {
      this[resize](data.length / 2)
    }
    return ret
  }
  /**
   * 从数组中删除第一个元素，返回删除的元素
   */
  removeFirst() {
    return this.remove(0)
  }
  /**
   * 从数组中删除最后一个元素，返回删除的元素
   */
  removeList() {
    return this.remove(this.size - 1)
  }
  /**
   * 从数组中删除元素 e
   * @param {*} e 元素
   */
  removeElement(e) {
    let index = this.find(e)
    if (index != -1) this.remove(index)
  }
  toString() {
    let str = undefined,
      { size, data } = this
    str = `Array: size = ${size}, capacity = ${data.length}\n`
    str += '['
    for (let i = 0; i < size; i++) {
      str += data[i]
      if (i != size - 1) {
        str += ', '
      }
    }
    str += ']'
    return str
  }
  /**
   * 数组扩充
   * @param {Int} newCapacity 新的容量
   */
  [resize](newCapacity) {
    let newData = [],
      { size, data } = this
    newData.length = newCapacity
    for (let i = 0; i < size; i++) {
      newData[i] = data[i]
    }
    this.data = newData
  }
}

module.exports = ArrayCls
