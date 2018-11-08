const ArrayStack = require('./ArrayStack')
const ArrayQueue = require('./ArrayQueue')
const loopQueue = require('./loopQueue')
const stack = new ArrayStack()
const queue = new ArrayQueue(20)
const lqueue = new loopQueue(20)

for (let i = 0; i < 5; i++) {
  stack.push(i)
  console.log(stack.toString())
}

stack.pop()
console.log(stack.toString())

for (let i = 0; i < 10; i++) {
  queue.enqueue(i)
  console.log(queue.toString())
  if (i % 3 == 2) {
    queue.dequeue()
    console.log(queue.toString())
  }
}

for (let i = 0; i < 10; i++) {
  lqueue.enqueue(i)
  console.log(lqueue.toString())
  if (i % 3 == 2) {
    lqueue.dequeue()
    console.log(lqueue.toString())
  }
}
