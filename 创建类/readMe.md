# JavaScript设计模式（二） 封装类

[TOC]

### 创建一个类

- 在JavaScript中创建一个类很容易，首先声明一个函数保存在一个变量里。按编程习惯一般将这个代表类的变量名首字母大写。然后在这个函数（类）的内部，通过this（this是函数内部自带的一个变量，用于指向当前这个对象）变量添加属性或者方法来实现对类添加属性或者方法，例如：

```
  let Book = function (id, bookName, bookPrice){
    this.id = id;
    this.bookName = bookName;
    this.bookPrice = bookPrice;
  }
  let book = new Book(1, "JavaScript设计模式", "39");
  console.log(book.id,book.bookName,book.bookPrice)
```

- 也可以通过在类的原型（类也是一个对象，所以也有原型prototype）上添加属性和方法，有两种方式，一种是 为原型对象属性赋值，另一种则是将一个对象赋值给类的原型对象。但这两种不要混用，例如：

```
//  原型对象属性赋值    

Book.prototype.bookType = function (code){
  console.log(code)
  console.log('调用person方法，就会这行这里面的逻辑')  
}

book.bookType('前端')
```
```
// 将一个对象赋值给类的原型对象
Book.prototype = {
  person: function (person) {
    console.log(person)
    console.log('调用person方法，就会这行这里面的逻辑')  
  }
}

book.person('wzy');
```

- 这样我们将所需要的方法和属性都封装在我们抽象的Book类里面了，当使用工鞥方法是，我们不能直接使用这个 **Book** 类，需要用
new 关键字来实例化（创建）新的对象。使用实例化对象的属性或者方法时，可以通过 点语法访问。


### 下面来说一说，通过this添加的属性和方法，与，在prototype上添加的属性和方法哟偶什么区别？

- 通过 **this** 添加属性、方法是在当前对象上添加的，然而 **JavaScript** 是一种基于原型 **prototype** 的语言，所以每创建一个对象时（当然在JavaScript中函数也是一种对象），它都有一个原型 **prototype** 用于指向其继承的属性、方法。这样通过 **prototype** 继承的方法并不是对象自身的，所以在使用这些方法时，需要通过 **prototype** 一级一级查找来得到。这样你会发现通过 this定义的属性或者方法是该对象自身拥有的，所以我们每次通过类创建一个新对象时，**this** 指向的属性和方法都会得到相应的创建，而通过 **prototype** 继承的属性或者方法是每个对象通过 **prototype**  访问到，所以我们每次通过类创建一个新对象时这些属性和方法不会再次创建。
- **constructor** 是一个属性，当创建一个函数或者对象时，都会为其创建一个原型对象 **prototype**，在 **prototype** 对象中又会像函数中创建 **this** 一样创建一个 **constructor** 属性，那么 **constructor** 属性指向的就是拥有这个原型对象的函数或对象，例如上面例子中 **Book.prototype** 中的 **constructor**  属性指向的就是Book类对象。