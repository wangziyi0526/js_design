/*
 * @Author: wangzy
 * @Date: 2022-04-27 23:57:34
 * @LastEditors: wangzy
 * @LastEditTime: 2022-04-28 09:59:13
 * @Description:ES6 Proxy Demo
 */

let handler = {
  get: function (target, propKey) {
    return 'kobe'
  },
  // set: function (target,propKey)
}

let o = {
  age: 29,
}
let object = {
  name: 'wzy',
  proxy: new Proxy(o, handler),
}

// console.log(object.proxy.age)

var proxy = new Proxy(
  {},
  {
    get: function (target, propKey) {
      return 35
    },
  }
)

let obj = Object.create(proxy)
console.log(obj.time)
