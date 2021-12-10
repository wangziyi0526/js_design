# 从一道让我失眠的 Promise 面试题开始，深入分析 Promise 实现细节

```js
Promise.resolve().then(() => {
    console.log(0);
    return Promise.resolve(4);
}).then((res) => {
    console.log(res)
})

Promise.resolve().then(() => {
    console.log(1);
}).then(() => {
    console.log(2);
}).then(() => {
    console.log(3);
}).then(() => {
    console.log(5);
}).then(() =>{
    console.log(6);
})
```
> 这道面试题是无意间在微信群里看到的，据说是某厂的面试题。一般关于 Promise 的面试题无非是考察宏微任务、EventLoop 之类的，当我认真去分析这道题的时候，越看越不对劲，感觉有诈！这是要考察啥？

