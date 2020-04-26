// 1. 用对象收编变量
let str= '';
let obj ={
  name: function(name){
    if(name == ''){
      console.log('请填写你的名字');
      return;
    }else{
      str = `hello I am ${name},`;
      return this;
    }
  },
  age: function(age){
    if(age ==''){
      console.log('请填写你的年龄');
      return this;
    }else{
      str =str +  ` I am ${age} yearsOld,`;
      return this;
    }
  },
  job: function(job){
    if(job ==''){
      console.log('请填写你的工作');
      return;
    }else{
      str =str +  ` I am a ${job}!`;
      console.log(str);
    }
  }
};

obj.name("wzy").age('28').job('fe');

// 2. 封装类
let stri = '';
let Fnobject = function(){
  this.name = function(name){
     stri = stri + `I am ${name}!`
     return this;
  }

  this.age = function(age){
     stri = stri + `${age} yearsOld`
     console.log(stri)
     return this;
  }
}

let a = new Fnobject();
a.name('wzy').age(29);

// 3.在原型链上利用prototype属性添加函数
Function.prototype.addMethods = function(name,fn){
  this.prototype[name] = fn;
  return this;
}
let Methods = function(){};
Methods.addMethods('checkName',function(name){
  console.log(name);
  return this;
});
Methods.addMethods('checkEmail',function(email){
  console.log(email)
  return this;
});

let m = new Methods();
m.checkName('wzy').checkEmail("18510126271@163.com");