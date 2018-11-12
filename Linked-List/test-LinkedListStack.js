const ArrayStack = require('../Stacks-and-Queues/JS/ArrayStack')
const LinkedListStack = require('./LinkedListStack')

/**
 * 测试使用 stack 运行 opCount 个 push 和 pop 操作所需要的时间
 * @param {*} stack
 * @param {*} opCount
 */
function testStack(stack, opCount) {
  const startTime = Date.now()
  for (let i = 0; i < opCount; i++) {
    const random = Math.floor(Math.random() * opCount + 1)
    // console.log(random)
    stack.push(random)
  }
  for (let i = 0; i < opCount; i++) stack.pop()

  const endTime = Date.now()
  return endTime - startTime
}

const opCount = 10000000
const arrayStack = new ArrayStack(opCount)
const time1 = testStack(arrayStack, opCount)
console.log(`ArrayQueue, time: ${time1} ms`)

const linkedListStack = new LinkedListStack()
const time2 = testStack(linkedListStack, opCount)
console.log(`LinkedListStack, time: ${time2} ms`)
