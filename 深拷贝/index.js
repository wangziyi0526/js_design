/*
 * @Author: wangzy
 * @Date: 2022-04-28 20:11:07
 * @LastEditors: wangzy
 * @LastEditTime: 2022-04-28 21:03:17
 * @Description: 深拷贝
 */

function deepClone(obj) {
  // 首先判断入参是否是对象或者是null
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }
  let copy = {}
  // 判断入参是都是array
  if (obj.constructor === Array) {
    copy = []
  }
  // 循环对象
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepClone(obj[key])
    }
  }
  return copy
}
let json = {
  name: 'wzy',
  age: 22,
  list: [1, 2, 3, 4],
}

let jsons = deepClone(json)
jsons.name = 'dsdasd'
console.log(jsons)
