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
