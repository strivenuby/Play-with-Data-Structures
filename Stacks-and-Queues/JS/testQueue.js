const ArrayQueue = require('./ArrayQueue')
const LoopQueue = require('./LoopQueue')

function testQueue(q, opCount) {
  const startTime = Date.now()
  for (let i = 0; i < opCount; i++) {
    const random = Math.floor(Math.random() * opCount + 1)
    // console.log(random)
    q.enqueue(random)
  }
  for (let i = 0; i < opCount; i++) q.dequeue()

  const endTime = Date.now()
  return endTime - startTime
}

const opCount = 1000000

const arrayQueue = new ArrayQueue(opCount)
const time1 = testQueue(arrayQueue, opCount)
console.log(`ArrayQueue, time: ${time1} ms`)

const loopQueue = new LoopQueue(opCount)
const time2 = testQueue(loopQueue, opCount)
console.log(`LoopQueue, time: ${time2} ms`)
