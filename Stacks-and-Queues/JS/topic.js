/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 有效字符串需满足：
 *
 *  1.左括号必须用相同类型的右括号闭合。
 *  2.左括号必须以正确的顺序闭合。
 *
 * 注意空字符串可被认为是有效字符串
 */
const ArrayStack = require('./ArrayStack')

function isVaild(s) {
  const stack = new ArrayStack()
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i)
    if (c === '(' || c === '[' || c === '{') {
      stack.push(c)
    } else {
      if (stack.isEmptry()) return false
      const topChar = stack.pop()
      if (c === ')' && topChar !== '(') return false
      if (c === ']' && topChar !== '[') return false
      if (c === '}' && topChar !== '{') return false
    }
  }
  return stack.isEmptry()
}

var strs = ['()', '()[]{}', '(]', '([)]', '{[]}']

strs.map(e => {
  console.log(e, ' ------ ', isVaild(e))
})
