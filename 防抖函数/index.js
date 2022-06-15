/*
 * @Author: wangzy
 * @Date: 2022-06-15 10:31:13
 * @LastEditors: wangzy
 * @LastEditTime: 2022-06-15 11:25:03
 * @Description: 原生js 手写 防抖函数 利用定时器
 */

let btn = document.getElementById('btn')
btn.addEventListener('click', debounce(getValue, 2000))
function getValue() {
  console.log(123)
}
function debounce(fn, time) {
  let t = null
  return function () {
    var fristHandle = !t
    if (fristHandle) {
      fn()
    }
    t = setTimeout(function () {
      t = null
    }, time)
  }
}
