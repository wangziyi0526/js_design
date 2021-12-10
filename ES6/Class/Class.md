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

### constructor 方法

`constructor()`方法是类的默认方法，通过`new`命令生成对象实例时，自动调用该方法。一个类必须有`constructor()`方法，
如果没有显示定义，一个空的 `constructor()`方法会被默认添加
```js
class Point{
}
// 等同于
class Point{
    constructor() {
        
    }
}
```
上面代码中，定义了一个空类 `Point`, JavaScript引擎会自动为它添加一个空的`constructor()`方法。
`constructor()` 方法默认返回实例对象 (即`this`),完全可以指定返回另一个对象。
```js
class Foo {
    constructor() {
        return Object.create(null)
    }
}
new Foo() instanceof Foo
// false
```
上面代码中，constructor()函数返回一个全新的对象，结果导致实例对象不是Foo类的实例。
类必须使用new调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行。

### 注意点

1. 严格模式
   类和模块的内部，默认就是严格模式，所以不需要使用 `use strict` 指定运行模式。只要你的代码写在类或模块之中，就只有严格模式
   可用。考虑到未来所有的代码，其实都是运行在模块之中，所以ES6 实际上把整个语言升级到了严格模式。

2. 不存在提升
   类不存在变量提升(hoist)，这一点与ES5 完全不同

```js
new Foo();// ReferenceError
class Foo {}
```

上面代码中，`Foo`类使用在前，定义在后，这样会报错，因为ES6不会把类的声明提升到代码头部。这种规定的原因与下文要提到的继承
有关，必须保证子类在父类之后定义。
```js
{
    let Foo = class {};
    class Bar extends Foo{
        
    }
}

```
上面的代码不会报错，因为`Bar`继承`Foo`的时候，`Foo`已经有定义了。但是，如果存在`class`的提升，上面的代码就会报错，
因为`class`会被提升到代码头部，而`let`命令是不提升的，所以导致`Bar`继承`Foo`的时候，`Foo`还没有定义

3. name属性

由于本质上，ES6的类只是ES5的构造函数的一层包装，所以函数的许多特性都被`Class`继承，包括`name`属性。
```js
class Point {}
Point.name // 'Point'
```
`name`属性总是返回紧跟在`class`关键字后面的类名

4. this的指向

类的方法内部如果含有`this`，它默认指向类的实例。但是，必须非常小心，一旦单独使用该方法，很可能报错
```js
class Logger {
    constructor () {
        this.printName = this.printName.bind(this)
    }
    printName(name = 'there') {
        this.print(`Hello ${name}`)
    }
    print(text) {
        console.log(text)
    }
}
const logger = new Logger();
const { printName } = logger;
printName();
```
### 静态方法
类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上`static`关键字，就表示该方法不会被实例继承，
而是直接通过类来调用，这就称为"静态方法"
```js
class Foo {
    static classMethod() {
        return 'hello';
    }
}
Foo.classMethod() // 'hello'
var foo = new Foo()
foo.classMethod()
// TypeError: foo.classMethod is not a function
```
上面代码中，`Foo`类的`classMethod`方法前有`static`关键字，表明该方法是一个静态方法，可以直接在`Foo`类上调用(`
Foo.classMethod()`),而不是在`Foo`类的实例上调用。如果在实例上调用静态方法，会抛出一个错误，表示不存在该方法。
注意，如果静态防范包含`this`关键字，这个`this`指的是类，而不是实例。

```js
class Foo {
    static bar () {
        this.baz();
    }
    static baz () {
        console.log('hello')
    }
    baz() {
        console.log('world')
    }
}
Foo.bar() // hello
```
上面代码中，静态方法bar调用了this.baz，这里的this指的是Foo类，而不是Foo的实例，等同于调用Foo.baz。另外，从这个例子还可以看出，静态方法可以与非静态方法重名。

父类的静态方法，可以被子类继承。
```js
class Foo {
    static classMethod() {
        return 'hello'
    }
}
class Bar extends Foo {
}
Bar.classMethod()// 'hello'
```
上面代码中，父类`Foo`有一个静态方法，子类`Bar`可以调用这个方法。

静态方法也可以从`super`对象上调用。
```js
class Foo {
    static classMethod () {
        return 'hello'
    }
}

class Bar extends Foo {
    static classMethod () {
        return super.classMethod() +', too';
    }
}
Bar.classMethod()

```
### 实例属性的新写法

实例属性除了定义在 `constructor()` 方法里面的 `this`上面，也可以定义在类的最顶层

```js
class IncreasingCounter {
    constructor (){
        this._count = 0;
    }
    get value() {
        console.log('Getting the current value!');
        return this._count;
    }
    increment () {
        this._count++;
    }
}
```
上面代码中， 实例属性 `_count` 与取值函数`value()` 和 `increment()`方法，出于同一个层级。这是，不需要在实例
属性前面加上`this`。

这种新写法的好处是，所有实例对象自身的属性都定义在类的头部，看上去比较整齐，一眼就能看出这个类有哪些实例属性。
```js
class foo {
    bar = 'hello'
    baz = 'world'
    
    constructor() {
        //...
    }
}
```
上面的代码，一眼就能看出， `foo`类有两个实例属性，一目了然。另外，写起来也比较简洁。

### 静态属性

静态属性指的是 `Class` 本身的属性，即 `class.propName`, 而不是定义在实例对象(`this`)上的属性。
```js
class Foo{
    
}
Foo.prop =1
Foo.prop // 1
```
上面的写法为 `Foo`类定义了一个静态属性 `prop`.

目前只有这种写法可行，因为Es6明确规定，Class 内部只有静态方法，没有静态属性，现在有一提案提供了类的静态属性，写法是在实例属性
前面，加上`static`关键字。

```js
class MyClass {
    static myStaticProp = 42;
    constructor() {
        console.log(MyClass.myStaticProp) // 42
    }
}
```
这个新写法大大方便了静态属性的表达。
```js
// 老写法
class Foo{
    //...
}
Foo.prop = 1

// 新写法
class Foo {
    static prop = 1;
}
```
上面代码中，老写法的静态属性定义在类的外部。整个类生成以后，再生成静态属性。这样让人很容易忽略这个静态属性，也不符合
相关代码应该放在一起的代码组织规则。另外，新写法是显式声明，而不是复制处理，语义更好

