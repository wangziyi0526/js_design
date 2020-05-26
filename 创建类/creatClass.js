// 创建一个类
// 在JavaScript中创建一个类很容易，首先声明一个函数保存在一个变量里。按照变成习惯一般将这个代表类的变量名首字母大写。然后在这个函数(类)的内部
// 通过对this(函数内部自带的一个变量，用于指向当前这个对象)变量添加属性或者方法来实现对类添加属性或者方法，例如：

let Book = function (id, bookName, bookPrice){
  this.id = id;
  this.bookName = bookName;
  this.bookPrice = bookPrice;
}
Book.prototype.bookType = function (code){
  console.log(code)
  console.log('调用person方法，就会这行这里面的逻辑')  
}
Book.prototype = {
  person: function (person) {
    console.log(person)
    console.log('调用person方法，就会这行这里面的逻辑')  
  }
}

let book = new Book(1, "JavaScript设计模式", "39");
console.log(book.id,book.bookName,book.bookPrice)


book.person('wzy');
book.bookType('前端');
