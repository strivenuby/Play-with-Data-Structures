const ArrayCls = require('./ArrayCls')

const arrCls = new ArrayCls(20)

for (let i = 0; i < 10; i++) {
  arrCls.addLast(i)
}

// arrCls.add(1, 100)
// console.log(arrCls.toString())

// arrCls.addFirst(-1)
// console.log(arrCls.toString())

arrCls.remove(2)
console.log(arrCls.toString())

arrCls.removeElement(4)
console.log(arrCls.toString())

arrCls.removeList()
console.log(arrCls.toString())

// console.log(arrCls.toString())
