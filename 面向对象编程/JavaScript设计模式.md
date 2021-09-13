# JavaScript  设计模式

[TOC]

## 面向对象编程

### 灵活的语言 JavaScript

#### 函数的形式

> - 当我们在写函数、方法的时候，基本大致如下:

```
  function fn(){
    console.log('xxx');
  };
  function func(){
    console.log('xxx');
  };
  function fuc(){
    console.log('xxx');
  };
  function funct(){
    console.log('xxx');
  };
```

> - 这么写方法，是正确的。只不过相当于创建了若干个全局变量。类似于这样：

```
var fn = function(){
  console.log('xxx)
};
var func = function(){
  console.log('xxx)
};
var fuc = function(){
  console.log('xxx)
};
var funct = function(){
  console.log('xxx)
};
```

> - 只不过这个在用的时候要提前声明，但是这么看你就会发现，创建了  3  个函数保存在变量里来实现功能，
>   而上面写的格式，只是将变量名放在  function  后面而已，当然从功能上来讲，是没有问题的，但是在团队中开发，如果别人也定义了同样的方法名就会覆盖掉原有的功能了，如果自己也定义了好多方法，这种相互覆盖的问题是很不容易察觉到的。
>   解决办法：用对象收编变量
>   可以将它们放在一个变量里保存，这样就减少覆盖或被覆盖的风险，当然一旦被覆盖，所有功能都会失效，这种现象也很明显，也可以轻松的察觉到问题所在。
>   例如:

```
var _checkObj_ = {
  checkName: function (){
    // 验证姓名
  },
  checkEmail: function (){
    // 验证邮箱
  },
  checkPassword: function (){
    // 验证密码
  }
};
```

> - 此时我们将所有的函数作为  *checkObj*  对象的方法，这样我们就只有一个对象，而我们想要使用它们也很简单，比如检测姓名:

```
_checkObj_.checkName();
```

亦或者：

```
var Checkobj = function(){};
Checkobj.checkName=function(){
    console.log('xxx');
};
Checkobj.checkEmail=function(){
    console.log('xxx');
};
Checkobj.checkPassword=function(){
    console.log('xxx');
};
```

> - 但是别人想用这个对象方法就有些麻烦了，因为对象不能复制一份，或者说这个对象类在用 new 关键字创建新的对象时，新创建对象是不能继承这些方法的。
>   解决办法：

```
var Checkobj = function(){
    return{
        checkName: function(){
           console.log('xxx');
        };
       checkEmail: function(){
           console.log('xxx');
        };
       checkPassword: function(){
           console.log('xxx');
        };
    }
};

```

> - 每次调用这个 函数的时候，把我们之前写的那个对象返回出来，当别人每次调用这个函数时都返回了一个新对象，这样执行过程中明面上是 Checkobj 对象，可实际返回的是新的对象，这样每个人在使用时候，就互不影响了；

```
var a = Checkobj();
a.checkName();
```

#### 类也可以

> - 虽然日通过创建了新对象完成了我们的需求，但是它不是一个真正意义上类的创建方式，并且通过创建的对象 **a** 和 对象 **Checkobj** 没有任何关系（返回出来的对象本身就与**Checkobj** 对象无关），所以要改造下：

```
var CheckObj = function (){
    this.checkName = function(){
        // 校验名字
    }
    this.checkMall = function(){
        // 校验邮箱
    }
    this.checkPassword = function(){
        // 校验密码
    }
}

var a = new CheckObj();
a.checkName(); // 校验姓名
```

#### 检测类

> - 我们是把所有的方法放在了函数内部了，通过 this 定义，所以每一次通过 **new** 关键字创建新对象的时候，新创建的对象都会对类上的 **this** 上的属性进行复制，所以这些新创建出来的对象都会有一套自己的方法，然而有时候这么做造成的消耗是很奢侈的，我们需要处理一下。

```
var CheckObj= function () {};
CheckObj.prototype.checkName = function(){
    console.log("xxx");
};
CheckObj.prototype.checkMall = function(){
    console.log("xxx");
};
CheckObj.prototype.checkPassword = function(){
    console.log("xxx");
};
```

> - 这样创建对象实例的时候，创建出来的对象所拥有的方法就是一个了，因为他们都要依赖 **prototype** 原型依次寻找，而找到的方法都是同一个，它们都绑定在 CheckObj 对象类的原型上。简写：

```
var CheckObj= function () {};
CheckObj.prototype = {
    checkName : function(){
        console.log("xxx");
    },
    checkMall : function(){
        console.log("xxx");
    },
    checkPassword : function(){
        console.log("xxx");
    }
}

var a =  new CheckObj();
a.checkName();
a.checkMall();
a.checkPassword();
```

> - 但是这样是对 对象 **a** 书写了 3 遍，这也是可以避免的，那就要在你声明的每一个方法末尾处将当前对象返回，在 **JavaScript** 中 **this** 指向的就是当前对象，所以你可以将它返回。

```
var checkObj = {
  checkName: function (){
    // 验证姓名
    return this;
  },
  checkEmail: function (){
    // 验证邮箱
    return this;
  },
  checkPassword: function (){
    // 验证密码
    return this;
  }
};

CheckObj.checkName().checkEmail.checkPassword();
```

> - 当然同样的方式 还可以放到类的原型中：

```
var CheckObj= function () {};
CheckObj.prototype = {
    checkName : function(){
        console.log("xxx");
        return this;
    },
    checkMall : function(){
        console.log("xxx");
        return this;
    },
    checkPassword : function(){
        console.log("xxx");
        return this;
    }
}
// 但是使用前，要先new一下
var a = new CheckObj();
a.checkName().checkMall.checkPassword();
```
