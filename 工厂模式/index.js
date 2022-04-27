/*
 * @Author: wangzy
 * @Date: 2022-04-24 13:49:28
 * @LastEditors: wangzy
 * @LastEditTime: 2022-04-27 13:16:41
 * @Description: 工厂模式 构造函数 工具类
 */

// 抽象工具工厂
class Utils {
  // 操作Object
  operationObject() {
    throw new Error('抽象工厂方法不允许直接调用，你需要将我重写!')
  }
  // 操作Array
  operationArray() {
    throw new Error('抽象工厂方法不允许直接调用，你需要将我重写!')
  }
  // 正则校验
  operationRegExp() {
    throw new Error('抽象工厂方法不允许直接调用，你需要将我重写!')
  }
  // 操作String
  operationOString() {
    throw new Error('抽象工厂方法不允许直接调用，你需要将我重写!')
  }
  // 操作Number
  operationNumber() {
    throw new Error('抽象工厂方法不允许直接调用，你需要将我重写!')
  }
}

// 具体工具工厂

class myUtils extends Utils {
  operationObject() {
    return new Obj()
  }
}

// Obj 工具库

class Obj {
  // 合并对象
  assginObj() {
    let data = {}
    for (let i = 0; i < arguments.length; i++) {
      Object.assign(data, arguments[i])
    }
    return data
  }
  // 根据key 查找对象中是否存在的键值对，有则返回value 无则返回fasle
}

let my_utils = new myUtils()

let test = my_utils.operationObject().assginObj(data, data1)
console.log(test)
