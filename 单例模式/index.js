/*
 * @Author: wangzy
 * @Date: 2022-04-28 16:34:26
 * @LastEditors: wangzy
 * @LastEditTime: 2022-04-28 20:10:52
 * @Description: 单例模式
 */

// 手写单例模式

// 静态函数版本

class Person {
  constructor() {
    this.name = ''
  }
  peronInfo(str) {
    this.name = str
  }
  static OnePerson() {
    if (!Person.instance) {
      Person.instance = new Person()
    }
    return Person.instance
  }
}
// let a = Person.OnePerson()
// let b = Person.OnePerson()
// console.log(a === b)
// a.peronInfo('wzy')
// console.log(b.name)

// 闭包版本
function PersonTwo() {}
PersonTwo.prototype.name = ''
PersonTwo.prototype.peronInfo = function (str) {
  this.name = str
}
const Base = (function () {
  let flag = null
  return function () {
    if (!flag) {
      flag = new PersonTwo()
    }
    return flag
  }
})()
let aa = new Base()
let bb = new Base()
aa.peronInfo('wzy')
console.log(bb.name)
