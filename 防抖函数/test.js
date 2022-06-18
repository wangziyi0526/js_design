/*
 * @Author: wangzy
 * @Date: 2022-06-18 21:57:00
 * @LastEditors: wangzy
 * @LastEditTime: 2022-06-18 22:25:20
 * @Description:
 */
let btn = document.getElementById('btn')
// console.log(btn)
btn.addEventListener('click', debounces(getValue, 2000))

function getValue() {
  console.log(111)
}
function debounces(fn, ms) {
  let t = null
  return function () {
    let isFirst = !t
    if (isFirst) {
      fn()
      t = setTimeout(() => {
        t = null
      }, ms)
    }
  }
}
