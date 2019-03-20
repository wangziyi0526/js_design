// 用对象收编变量 
/*
配合场景来示范下，比如某个组件 或者某个模块需要若干个方法，那我们可以将这些方法放在一个对象里面
来调用，引入的时候只需引入这个对象就可以了
*/
// 比如
let obj = {
  name: function(name){
    if(!name) {
      console.log('答题卡没写名字')
    }else{
      let str = 'hello' + name + '你成功了！'
      console.log(str)
    }
  },
  testCode: function(testCode){
    if(!testCode){
      console.log('准考号没写')
    }else{
      console.log('nice')
    }
  }
}
obj.name();
obj.name('衬衫配红唇');
obj.testCode();
obj.testCode(1234567);

//  另一种形式
let ObjFn = function(){
  return{
    name : function(name){
      console.log(name)
    },
    testCode : function testCode(testCode) {
      console.log(testCode)
    }
  }
} 

var a = ObjFn()

a.name('wzy')
a.testCode(123)
var b = ObjFn()
b.name('hxh')
b.testCode(456)

// 另一种关于把对象定义成类 用关键字new来创建
var Objfun = function () {
  this.name = function(name){
    console.log(name)
  }
  this.age = function(age){
    console.log(age)
  }
  this.testCode = function(testCode){
    console.log(testCode)
  }
}
var c = new Objfun()
c.name('wzy')
c.age(26)
c.testCode(123)

// 利用定义原型对象prototype 去进行定义方法
var Objfu = function () {}
Objfu.prototype = {
  name : function(name){
    var str = name + ' love wzy'
    return str
  },
  age: function(age){
    console.log(age)
    return this
  }
}

var d = new Objfu(); // 同样也是用new关键字进行创建
var e = d.name('hxh') // 变量e用来接收 d.name中ruturn出来的东西
console.log(e)


// 写的都是看到的-------面向对象编程

var f = function (x) {  
  if (x === 1) {  
      console.log('cnm') 
  } else {  
       console.log('hscnm')
      let a = x*f(x-1)  
      console.log(a)
  }  
}; 
f(3);