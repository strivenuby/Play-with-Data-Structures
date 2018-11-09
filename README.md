# Play-with-Data-Structures

## 前言

- 根据慕课网《玩转数据结构》课程，总结代码实现过程

- 以 `node` 运行为准

- 代码中涉及到 JS 类，默认将 类中变量当做私有变量（考虑代码的整洁度）

## 数组

- [基础数组](https://github.com/strivenuby/Play-with-Data-Structures/tree/master/Arrays/JS/01.js)

- [封装数组类](https://github.com/strivenuby/Play-with-Data-Structures/tree/master/Arrays/JS/ArrayCls.js)

## 栈与队列

共同点：线性结构、 对应操作（数组的子集）

不同点：

1. [栈 (Stack)](https://github.com/strivenuby/Play-with-Data-Structures/tree/master/Stacks-and-Queues/JS/ArrayStack.js)

   - 出入方式：后进先出

   - 只能从一端添加元素，也只能从一端取出元素，这一端称为栈顶

2. [队列 (Queue)](https://github.com/strivenuby/Play-with-Data-Structures/tree/master/Stacks-and-Queues/JS/ArrayQueue.js)

   - 出入方式：先进先出

   - 只能从一端（队尾）添加元素，只能从另一端（队首）取出元素

#### 循环队列

原理：当元素出列后，首索引向后挪移一个空间；当元素入列后，如果元素后段未有剩余空间并且之前已有元素出列，则将队首视为入列

代码演示：[LoopQueue](https://github.com/strivenuby/Play-with-Data-Structures/tree/master/Stacks-and-Queues/JS/LoopQueue.js)

## 链表 (Linked List)

- 最简单的动态数据结构

- 数据存储在 "节点" (Node) 中
  - 优点：真正的动态，不需要处理固定的容量问题
  - 缺点：丧失了随机访问的能力
