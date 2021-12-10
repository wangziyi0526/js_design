# Class的基本语法

## 简介

### 类的由来

JavaScript 语言中，生成实例对象的传统方法是通过构造函数。下面是一个例子。
```js
// es5
function Point (x,y) {
    this.x = x
    this.y = y
}
Point.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ')';
}
var p = new Point(1,2)
console.log(p)
```
上面这种写法跟传统的面向对象语言（比如 C++ 和 Java）差异很大，很容易让新学习这门语言的程序员感到困惑。

ES6 提供了更接近传统语言的写法，引入了 Class（类）这个概念，作为对象的模板。通过class关键字，可以定义类。

基本上，ES6 的class可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。上面的代码用 ES6 的class改写，就是下面这样

```js
//es6
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
var p = new Point(1,2)
console.log(p)
```

上面代码定义了一个"类"， 可以看到里面有一个`constructor()`方法，这就是构造函数，而`this`关键字则代表实例对象。这种新的Class写法，
本质上与开头的ES5的构造函数`Point`是一致的。

`Point`类除了构造方法，还定义了一个`toString()`方法。注意，定义`toString()`方法的时候，前面不需要加上`function`
这个关键字，直接把函数定义放进去就可以了。另外，方法与方法之间不需要逗号分隔，加了会报错。

ES6的类，完全可以看作构造函数的另一种写法。
```js
class Point {
    //...
}

typeof Point // "function"

Point === Point.prototype.constructor // true
```
上面代码表明，类的数据类型就是函数，类本身就指向构造函数。
使用的时候，也是直接对类使用 `new`命令，根构造函数的用法完全一致。
```js

class Bar {
    doStuff () {
        console.log('stuff');
    }
}
const b = new Bar()
b.doStuff() // 'stuff'
```
上面代码中，`constructor()`、`toString()`、`toValue()`这三个方法，其实都是定义在`Point.prototype`上面。

因此，在类的实例上面调用方法，其实就是调用原型上的方法。

```js
class B {}
const b = new B()
b.constructor === B.prototype.constructor // true
```
上面的代码中，`b`是`B`类的实例，它的`constructor()`方法就是`B`类原型的`constructor()`方法。
由于类的方法都定义在`prototype`对象上面，所以类的新方法可以添加在`prototype` 对象上面。
`Object.assign()` 方法可以很方便地一次向类添加多个方法。

```js
 //利用 Object.assign()

let getName = function () {
    return this.name
}

let getAge = function () {
    return this.age
}

class Peron {
    constructor(name,age) {
        this.name = name
        this.age = age
    }
}

Object.assign(Peron.prototype,{
    getName,
    getAge
})

let p = new Peron('wzy',28)

console.log(p)
console.log(p.getName())
console.log(p.getAge())
```
`prototype` 对象的 `constructor()`属性，直接指向"类"的本身，这与ES5的行为是一致的。

```js
Point.prototype.constructor = Point // true
```
另外，类的内部所有定义的方法，都是不可枚举的(non-enumerable)
```js
class Point {
  constructor(x, y) {
    // ...
  }

  toString() {
    // ...
  }
}

Object.keys(Point.prototype) // 
// []
Object.getOwnPropertyNames(Point.prototype) // 可以返回类的内部所有定义的方法
// ["constructor","toString"]
```
上面代码中，toString()方法是Point类内部定义的方法，它是不可枚举的。这一点与 ES5 的行为不一致。
```js
var Point = function (x,y) {
    //...
}
Point.prototype.toString = function () {
    //...
}

Object.keys(Point.prototype)
// ['toString']
Object.getOwnPropertyNames(Point.prototype)
// ["constructor","toString"]
```
上面代码采用Es5的写法，`toString()`方法就是可枚举的。