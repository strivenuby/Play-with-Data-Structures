const LinkedList = require('./LinkedList')
const LinkedListStack = require('./LinkedListStack')
const LinkedListQueue = require('./LinkedListQueue')
const linkedList = new LinkedList()
const stack = new LinkedListStack()
const queue = new LinkedListQueue()

for (let i = 0; i < 5; i++) {
  linkedList.addFirst(i)
  console.log(linkedList.toString())
}

linkedList.add(2, 666)
console.log(linkedList.toString())

linkedList.remove(2)
console.log(linkedList.toString())

linkedList.removeFirst()
console.log(linkedList.toString())

linkedList.removeLast()
console.log(linkedList.toString())

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
