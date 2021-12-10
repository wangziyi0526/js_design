// es5
// function Point (x,y) {
//     this.x = x
//     this.y = y
// }
// Point.prototype.toString = function () {
//     return '(' + this.x + ', ' + this.y + ')';
// }
// var p1 = new Point(1,2)
// console.log(p1.toString())
// es6
// class Point6 {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//
//     toString() {
//         return '(' + this.x + ', ' + this.y + ')';
//     }
// }
// var p2 = new Point6(3,4)
// console.log(p2.toString())

//利用 Object.assign()
//
// let getName = function () {
//     return this.name
// }
//
// let getAge = function () {
//     return this.age
// }
//
// class Peron {
//     constructor(name,age) {
//         this.name = name
//         this.age = age
//     }
// }
//
// Object.assign(Peron.prototype,{
//     getName,
//     getAge
// })
//
// let p = new Peron('wzy',28)
//
// console.log(p)
// console.log(p.getName())
// console.log(p.getAge())

// class Foo {
//     constructor() {
//         return Object.create(null)
//     }
// }
// console.log(new Foo() instanceof Foo)
// class Logger {
//     constructor() {
//         this.printName = this.printName.bind(this)
//         this.print = this.print.bind(this)
//         this.name = 'Bryant'
//     }
//     printName(name = 'there') {
//         this.print(`Hello ${this.name}`)
//     }
//     print(text) {
//         console.log(text)
//         console.log(this.name)
//     }
//
// }
// const logger = new Logger();
// const { printName,print } = logger;
// printName();
// print()

// class Foo {
//     static classMethod () {
//         return 'hello'
//     }
// }
//
// class Bar extends Foo {
//     static classMethod () {
//         console.log('super',super)
//         return super.classMethod() +', too';
//     }
// }
// Bar.classMethod()

// class Widget {
//
//     // 公有方法
//     foo (baz) {
//         this._bar(baz);
//     }
//
//     // 私有方法
//     _bar(baz) {
//         return this.snaf = baz;
//     }
//
//     // ...
// }
// let w = new Widget()
// w.foo('name')
// w._bar('age')
//
// class Widgets {
//     foo (baz) {
//         bar.call(this, baz);
//         console.log(name)
//     }
//
//     // ...
// }
//
// function bar(baz) {
//     return this.snaf = baz;
// }
// let w1 = new Widgets()
// w1.foo('kobe')
// console.log('ss',w1.snaf)

class IncreasingCounter {
    #count = 0;

    increment() {

        this.#count++;
        console.log(this.#count)
    }
}

let inc = new IncreasingCounter()
console.log(inc.increment())