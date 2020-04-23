// 需求：导出三个成员，分别是 foo: bar f: function num: 10

// exports.foo = 'bar'
// exports.f = function () {
  
// }
// exports.num = 10

// 写法一
// export const foo = 'bar'
// export const f = function () {
  
// }
// export const num = 10


// 写法二
const foo = 'bar'
const f = function () {
  
}
const num = 10

export {
  foo,
  f,
  num
}

// 相当于 module.exports = function () {}
export default function () {
  console.log('fff')
}
