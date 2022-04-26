/*
 * @Author: wangzy
 * @Date: 2022-04-24 13:49:28
 * @LastEditors: wangzy
 * @LastEditTime: 2022-04-26 14:09:52
 * @Description: 工厂模式 构造函数
 */

class MobileFactory {
  // 提供操作系统的接口
  createOS() {
    throw new Error('抽象工厂方法不允许直接调用，你需要将我重写!')
  }
  // 提供硬件的接口
  createHardWare() {
    throw new Error('抽象工厂方法不允许直接调用，你需要将我重写!')
  }
}

let my = new MobileFactory()
my.createHardWare()
